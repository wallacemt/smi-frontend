import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { useLogin, type LoginSchemaData } from "@/hooks/use-login";
import { useState } from "react";
import { toast } from "sonner";
import { authLogin } from "@/api/auth";
import { useUserContext } from "@/contexts/UserContext";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);
  const { login } = useUserContext();
  const { form } = useLogin();

  async function handleLogin({ email, password }: LoginSchemaData) {
    setLoading(true);
    try {
      const { token, message } = await authLogin(email, password);
      toast.success(message);
      login(token);
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-card-foreground text-white border-none">
        <CardHeader className="text-center ">
          <div className="flex flex-col items-center">
            <div className={` flex  items-center mb-4`}>
              <img src="./logo.png" alt="Logo" className="w-10 h-10  animate-pulse" />
              <h1 className="text-xl font-bold text-popover-foreground">
                Baixio Turismo <span className="font-bold text-xs absolute text-red-600">AI</span>
              </h1>
            </div>
            <CardTitle className="text-xl">Bem vindo(a) de volta</CardTitle>
            <CardDescription className="-mb-6">Faça login para continuar</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)}>
              <div className="grid gap-6">
                <div className="grid gap-3"></div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="m@example.com" required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" placeholder="********" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
                  {loading ? "Carregando..." : "Entrar"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
