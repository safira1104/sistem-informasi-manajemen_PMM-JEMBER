"use client";

import React from "react";

export default function SignInPage() {
  return (
    // ✅ DIUBAH: Pastikan latar belakang full screen dan hijau muda
    <div className="w-screen h-screen bg-green-100 flex items-center justify-center">
      {/* ✅ DITAMBAHKAN: Wrapper putih untuk form, dengan bayangan dan padding */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        {/* ✅ DITAMBAHKAN: Judul dan subjudul */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-green-700 leading-tight">
            Kebun Jubung System
          </h1>
          <p className="text-gray-600 mt-1">Masuk sebagai Tamu</p>
        </div>

        {/* ✅ DITAMBAHKAN: Form login */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Nama</label>
            <input
              type="text"
              placeholder="Nama"
              className="w-full mt-1 px-4 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-1 px-4 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="text-right">
            {/* ✅ DIUBAH: Warna link jadi hijau */}
            <a href="#" className="text-sm text-green-700 hover:underline">
              Forgot Password
            </a>
          </div>

          {/* ✅ DIUBAH: Tombol login jadi hijau dan proporsional */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* ✅ DITAMBAHKAN: Link ke Buat Akun */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun?{" "}
          <a href="/guest/sign-up" className="text-green-700 font-semibold hover:underline">
            Buat Akun
          </a>
        </p>
      </div>
    </div>
  );
}
