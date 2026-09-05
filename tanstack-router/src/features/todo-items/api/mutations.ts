import { mutationOptions } from "@tanstack/react-query";
import { api } from "~/lib/api";
import type { TodoItem } from "../types/todo-item";

export const todoItemMutations = {
  star: () =>
    mutationOptions({
      mutationKey: ["todo-items", "star"],
      mutationFn: (input: { todoItemId: string; isStarred: boolean }) =>
        api.patch(`/todo-items/${input.todoItemId}/star`, {
          isStarred: input.isStarred,
        }),
    }),
  complete: () =>
    mutationOptions({
      mutationKey: ["todo-items", "complete"],
      mutationFn: (input: { todoItemId: string }) =>
        api.patch(`/todo-items/${input.todoItemId}/complete`),
    }),
  create: () =>
    mutationOptions({
      mutationKey: ["todo-items", "create"],
      mutationFn: (input: { todoListId: string; title: string }) =>
        api
          .post<TodoItem>("/todo-items", input)
          .then((response) => response.data),
    }),
};
