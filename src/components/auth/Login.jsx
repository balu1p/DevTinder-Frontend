import React from "react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(2, { message: "Email must be at least 2 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 6 characters." }) // Minimum length of 6
    .max(32, { message: "Password must not exceed 32 characters." }) // Optional max length
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    }) // Uppercase letter
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    }) // Lowercase letter
    .regex(/\d/, { message: "Password must contain at least one number." }) // At least one digit
    .regex(/[@$!%*?&#]/, {
      message:
        "Password must contain at least one special character (@$!%*?&#).",
    }),
});

function Login() {
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-center text-3xl ">Login</DialogTitle>
        <DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email.." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password.." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center items-center">
                <button
                  className="bg-white px-3 py-2 rounded-lg text-black font-medium text-lg"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
          </Form>
        </DialogDescription>
      </DialogHeader>
    </div>
  );
}

export default Login;
