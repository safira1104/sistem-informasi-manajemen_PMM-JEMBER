"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchemaAdmin } from "../schemas";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignInFormAdmin = () => {
  const form = useForm<z.infer<typeof loginSchemaAdmin>>({
    resolver: zodResolver(loginSchemaAdmin),
    defaultValues: {
      username: "",
      password: "",
      specialCode: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchemaAdmin>) => {
    console.log("Form submitted", values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[20px]"
      >
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="px-2 text-[16px] font-bold">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Username"
                  className="w-full bg-white px-2 py-4 text-[16px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="px-2 text-[16px] font-bold">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="w-full bg-white px-2 py-4 text-[16px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="specialCode"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="px-2 text-[16px] font-bold">
                Special Code
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Special Code"
                  className="w-full bg-white px-2 py-4 text-[16px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mr-3 gap-2 rounded-xl bg-gradient-to-b from-[#457bb0fd] to-[#2657a4] py-6 text-base font-normal text-white shadow-lg transition-all duration-300 hover:from-[#0e3e76] hover:to-[#183b77]">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default SignInFormAdmin;
