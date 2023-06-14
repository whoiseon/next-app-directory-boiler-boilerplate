import TodoCard from "./TodoCard";

interface Props { }

async function fetchTodos()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: TodoItem[] = await response.json();

    return todos;
}

async function TodoList({ }: Props)
{
    const todos: TodoItem[] = await fetchTodos();
    return (
        <div className="flex flex-col gap-4 w-[300px]">
            {todos?.map((todo) => <TodoCard key={todo.id} data={todo} />)}
        </div>
    );
}

export default TodoList;
