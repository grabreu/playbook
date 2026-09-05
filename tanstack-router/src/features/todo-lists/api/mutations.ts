import { mutationOptions } from "@tanstack/react-query";
import { api } from "~/lib/api";
import type { TodoList } from "../types/todo-list";

export const todoListMutations = {
  create: () =>
    mutationOptions({
      mutationKey: ["todo-lists", "create"],
      mutationFn: (input: { name: string }) =>
        api
          .post<TodoList>("/todo-lists", input)
          .then((response) => response.data),
    }),
};
