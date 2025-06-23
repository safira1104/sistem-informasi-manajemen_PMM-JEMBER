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
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b bg-white px-6 py-3 shadow-sm">
      {/* Kiri: Logo & Judul */}
      <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition">
        <Image
          src="/logo.png"
          alt="Logo Kebun Jubung"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h1 className="text-lg font-bold text-green-800">
            {label ?? "Kebun Jubung"}
          </h1>
          <p className="text-xs text-gray-500">
            Wisata Alam & Edukasi Berbasis Komunitas
          </p>
        </div>
      </Link>

      {/* Tengah: Navigasi */}
      
        <nav className="hidden md:flex gap-12 text-sm font-medium text-gray-700">
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
