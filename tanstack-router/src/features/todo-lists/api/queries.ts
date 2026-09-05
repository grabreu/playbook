import { queryOptions } from "@tanstack/react-query";
import { api } from "~/lib/api";
import type { TodoList } from "../types/todo-list";

export const todoListQueries = {
  all: () => ["todo-lists"] as const,
  lists: () => [...todoListQueries.all(), "list"] as const,
  list: () =>
    queryOptions({
      queryKey: todoListQueries.lists(),
      queryFn: () =>
        api.get<TodoList[]>("/todo-lists").then((response) => response.data),
    }),
};
