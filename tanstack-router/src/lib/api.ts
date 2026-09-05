import aduana from "@grabreu/aduana";
import { toast } from "~/components/ui/toast";

export const api = aduana.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(undefined, (error) => {
  if (aduana.isHttpError(error)) {
    toast.add({
      title:
        error.problem?.title ??
        error.problem?.detail ??
        '"Something went wrong. Please try again later."',
    });
  }

  throw error;
});
