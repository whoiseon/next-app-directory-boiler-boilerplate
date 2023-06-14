import Link from "next/link";

interface Props
{
    data: TodoItem;
}

function TodoCard({ data }: Props)
{
    return (
        <Link href={`/todos/${data.id}`} className="p-4 bg-element2 shadow-lg rounded">
            {data.title}
        </Link>
    );
}

export default TodoCard;
