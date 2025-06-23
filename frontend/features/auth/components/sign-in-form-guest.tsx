"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchemaGuest } from "../schemas"; // pastikan schema sudah diubah namanya
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

const SignInFormGuest = () => {
  const form = useForm<z.infer<typeof loginSchemaGuest>>({
    resolver: zodResolver(loginSchemaGuest),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchemaGuest>) => {
    console.log("Form submitted", values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[20px]"
      >
        <FormField
          name="nama"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="px-2 text-[16px] font-bold">Nama</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="Nama"
                  className="w-full bg-white px-2 py-4 text-[16px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="px-2 text-[16px] font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email"
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
        <a href="#" className="underline">
          Forgot Password
        </a>
        <Button className="w-full mr-3  gap-2 rounded-xl bg-gradient-to-b from-[#457bb0fd] to-[#2657a4] py-6 text-base font-normal text-white shadow-lg transition-all duration-300 hover:from-[#0e3e76] hover:to-[#183b77]">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default SignInFormGuest;
