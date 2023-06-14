"use client";

import useInput from "@/lib/hooks/useInput";
import { boardStore } from "@/zustand/boardStore";

function BoardBox()
{
    const { list, addPost } = boardStore();

    const [title, onChangeTitle, setTitle] = useInput('');
    const [description, onChangeDescription, setDescription] = useInput('');

    const onWrite = () =>
    {
        if (!title && !description) return;
        addPost({
            id: list.length,
            title,
            description,
        });

        setTitle('');
        setDescription('');
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <input type="text" className="px-2 h-[30px] text-black" placeholder="제목" value={title} onChange={onChangeTitle} />
                <textarea className="resize-none p-2 h-[100px] text-black" placeholder="내용" value={description} onChange={onChangeDescription} />
                <button onClick={onWrite}>작성</button>
            </div>
            <ul className="flex flex-col gap-2">
                {list.map((board) => (
                    <li key={board.id} className="p-4 bg-element2 rounded flex flex-col gap-4">
                        <p>{board.title}</p>
                        <p>{board.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BoardBox;
