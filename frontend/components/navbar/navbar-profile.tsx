"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BellDot, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AdminDropdown, GuestDropdown } from "@/lib/data/dropdown-data";

interface NavbarProfileProps {
  role?: string;
}

export default function NavbarProfile({ role }: NavbarProfileProps) {
  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex items-center gap-4">
      <BellDot className="h-5 w-5 cursor-pointer text-gray-600" />

      {/* Jika belum login */}
      {!role && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 transition">
              Sign In
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 rounded-lg p-2">
            <DropdownMenuItem
              onClick={() => handleNavigate("/guest/sign-in")}
            >
              Sign in as Guest
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleNavigate("/admin/sign-in")}
            >
              Sign in as Admin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Jika sudah login */}
      {role && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted">
              <Image
                src={"/beranda/avatar.png"}
                width={40}
                height={40}
                alt={"Avatar"}
                className="rounded-full"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-medium">Hanny</p>
                <p className="text-xs text-muted-foreground">
                  {role === "Admin" ? "Admin" : "User"}
                </p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 p-2">
            <div className="flex gap-2 p-2">
              <Image
                src={"/beranda/avatar.png"}
                width={60}
                height={60}
                alt={"Avatar"}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold">Hany</p>
                <p className="text-xs text-muted-foreground">@Hany</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            {(role === "Admin" ? AdminDropdown : GuestDropdown).map((item) => (
              <DropdownMenuItem
                key={item.label}
                onClick={() => handleNavigate(item.url)}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem onClick={() => console.log("logout")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
