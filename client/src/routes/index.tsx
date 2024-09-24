import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hello1"],
    queryFn: async () => {
      const res = await api["meaning-of-life"].$get();
      return await res.json();
    },
  });

  return (
    <>
      <div className="flex flex-col">
        <h1>Plan My Pujo</h1>
        {isPending ? (
          <span>Loading...</span>
        ) : isError ? (
          <span>Error: {error.message}</span>
        ) : (
          <span>Meaning of life: {data.answer}</span>
        )}
      </div>
    </>
  );
}
