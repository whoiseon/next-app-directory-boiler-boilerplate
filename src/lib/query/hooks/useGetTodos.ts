import { fetchTodos } from "@/lib/api/todos";
import { useQuery } from "@tanstack/react-query";

function useGetTodos()
{
    const todos = useQuery<TodoItem[]>({
        queryKey: ["todos"],
        queryFn: fetchTodos
    });

    return todos;
}

export default useGetTodos;
