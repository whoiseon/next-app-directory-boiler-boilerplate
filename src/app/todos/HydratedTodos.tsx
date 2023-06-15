import TodoList from "@/components/TodoList";
import { fetchTodos } from "@/lib/api/todos";
import getQueryClient from "@/lib/query/getQueryClient";
import HydrateOnClient from "@/lib/query/hydrateOnClient";
import { dehydrate } from "@tanstack/react-query";

async function HydratedTodos()
{
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(['todos'], fetchTodos);
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrateOnClient state={dehydratedState}>
            <TodoList />
        </HydrateOnClient>
    );
}

export default HydratedTodos;
