import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#C7F6C7] font-poppins px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-extrabold text-green-800 md:text-[36px]">
            Kebun Jubung System
          </h3>
          <p className="text-green-700 mt-1 text-md">Buat Akun Sebagai Tamu</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Nama</label>
            <input
              type="text"
              placeholder="Nama"
              className="w-full border border-green-500 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-green-500 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-green-500 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Verifikasi Password</label>
            <input
              type="password"
              placeholder="Verifikasi Password"
              className="w-full border border-green-500 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
          >
            Daftar Sebagai Guest
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Sudah memiliki akun?{" "}
          <a href="/guest/sign-in" className="text-green-700 font-semibold underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;