import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const loginSchema = z.object({
  email: z.email().min(3, "Email inválido"),
  password: z.string().min(3, "Senha inválida"),
});
export type LoginSchemaData = z.infer<typeof loginSchema>;
export const useLogin = () => {
  const form = useForm<LoginSchemaData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return { form };
};
