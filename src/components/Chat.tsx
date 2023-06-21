"use client";

import useInput from "@/lib/hooks/useInput";
import socket from "@/lib/socket";
import { useEffect, useState } from "react";

interface Chat {
    message: string;
}

function Chat() {
    const [message, onChangeMessage, setMessage] = useInput("");
    const [messages, setMessages] = useState<Chat[]>([]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        socket.sendMessage(message);
        setMessage("");
    };

    useEffect(() => {
        socket.connect();

        socket.onMessage((message) => {
            setMessages((prev) => [...prev, { message }]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="w-[400px] flex flex-col gap-4">
            <ul className="w-full flex flex-col min-h-[400px] overflow-y-scroll">
                {messages.map((chat, i) => {
                    return <li key={i}>{chat.message}</li>;
                })}
            </ul>
            <form className="w-full" onSubmit={onSubmit}>
                <input
                    className="w-full rounded h-[36px] text-black px-2"
                    type="text"
                    placeholder="채팅 내용을 입력해주세요"
                    value={message}
                    onChange={onChangeMessage}
                />
            </form>
        </div>
    );
}

export default Chat;
