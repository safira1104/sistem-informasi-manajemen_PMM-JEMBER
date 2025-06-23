"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { registerSchemaGuest } from "../schemas"; // pastikan schema guest sudah dibuat
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

const SignUpFormGuest = () => {
  const form = useForm<z.infer<typeof registerSchemaGuest>>({
    resolver: zodResolver(registerSchemaGuest),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      verifikasiPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchemaGuest>) => {
    console.log("Guest Sign Up:", values);
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
              <FormLabel className="px-2 text-[16px] font-bold">Password</FormLabel>
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
          name="verifikasiPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="px-2 text-[16px] font-bold">Verifikasi Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Verifikasi Password"
                  className="w-full bg-white px-2 py-4 text-[16px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mr-3  gap-2 rounded-xl bg-gradient-to-b from-[#457bb0fd] to-[#2657a4] py-6 text-base font-normal text-white shadow-lg transition-all duration-300 hover:from-[#0e3e76] hover:to-[#183b77]">
          Daftar Sebagai Guest
        </Button>
      </form>
    </Form>
  );
};

export default SignUpFormGuest;
