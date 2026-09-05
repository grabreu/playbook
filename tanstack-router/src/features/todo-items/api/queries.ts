import { queryOptions } from "@tanstack/react-query";
import { api } from "~/lib/api";
import type { TodoItem } from "../types/todo-item";

export const todoItemQueries = {
  all: () => ["todo-items"] as const,
  lists: () => [...todoItemQueries.all(), "list"] as const,
  list: (
    input: {
      todoListId?: string;
      isCompleted?: boolean;
      isStarred?: boolean;
    } = {},
  ) =>
    queryOptions({
      queryKey: [...todoItemQueries.lists(), input] as const,
      queryFn: () =>
        api
          .get<TodoItem[]>("/todo-items", {
            params: input,
          })
          .then((response) => response.data),
    }),
};
