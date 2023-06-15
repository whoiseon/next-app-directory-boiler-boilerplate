"use client";

import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Provider } from "react-redux";

interface Props
{
    children: React.ReactNode;
}

function Providers({ children }: Props)
{
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Provider store={store}>
                {children}
            </Provider>
        </QueryClientProvider>
    );
}

export default Providers;
