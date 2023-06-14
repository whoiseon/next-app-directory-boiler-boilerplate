import { notFound } from "next/navigation";

interface Props
{
    params: {
        todoId: string;
    };
}

async function fetchTodo(todoId: string): Promise<TodoItem>
{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { cache: 'force-cache' });
    const todo: TodoItem = await response.json();

    return todo;
}

async function TodoId({ params: { todoId } }: Props)
{
    const todo = await fetchTodo(todoId);
    if (!todo.id) return notFound();

    return (
        <div>
            <div>Todo Id : {todoId}</div>
            <div>Title : {todo.title}</div>
            <div className="py-2">
                completed : {todo.completed ? <span> Yes</span> : <span> No</span>}
            </div>
        </div>
    );
}

export async function generateStaticParams()
{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos: TodoItem[] = await response.json();

    // 10개만 자른다.
    const trimmedTodos = todos.splice(0, 10);

    return trimmedTodos.map((todo) => ({
        todoId: todo.id.toString(),
    }));
}

export default TodoId;
