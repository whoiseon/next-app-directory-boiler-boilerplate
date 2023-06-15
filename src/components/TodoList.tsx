'use client';

import useGetTodos from "@/lib/query/hooks/useGetTodos";
import TodoCard from "./TodoCard";

interface Props { }

function TodoList({ }: Props)
{
    const { data: todos } = useGetTodos();
    return (
        <div className="flex flex-col gap-4 w-[300px]">
            {todos?.map((todo) => <TodoCard key={todo.id} data={todo} />)}
        </div>
    );
}

export default TodoList;
