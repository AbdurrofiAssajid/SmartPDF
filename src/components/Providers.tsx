"use client";
import React, { useState, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";

export default function Providers({children}: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "https:localhost:3000/api/trpc",
        }),
      ],
    })
  )
    return (
      <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
      </trpc.Provider>
    )

  return <div>Provides</div>;
}
