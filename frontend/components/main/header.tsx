"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNavigation } from "@/lib/data/navigation";
import NavbarProfile from "../navbar/navbar-profile";

interface HeaderProps {
  label?: string;
  role?: string;
}

export default function Header({ label, role }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-auto w-full items-center justify-between border-b bg-white px-6 py-1 shadow-sm">
      {/* Kiri: Logo & Judul */}
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Logo Kebun Jubung"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h1 className="text-lg font-bold text-black">
            {label ?? "Kebun Jubung"}
          </h1>
        </div>
      </Link>

      {/* Tengah: Navigasi */}
      
        <nav className="hidden md:flex gap-12 text-sm font-medium text-black">
        {mainNavigation.map((item) => (
            <Link
            key={item.label}
            href={item.href}
            className="px-4 py-2 transition hover:text-green-700 hover:bg-green-100 rounded-full"
            >
            {item.label}
            </Link>
        ))}
        </nav>

      {/* Kanan: Notifikasi dan Profil */}
      <div className="flex items-center gap-4">
        <NavbarProfile role={role} />
      </div>
    </header>
  );
}
