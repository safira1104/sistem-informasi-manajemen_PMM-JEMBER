import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#C7F6C7] font-poppins px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-extrabold text-green-800 md:text-[36px]">
            Kebun Jubung System
          </h3>
          <p className="text-green-700 mt-1 text-md">Admin Login</p>
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

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-600" />
              <label className="text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-green-700 font-semibold hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Belum memiliki akun?{" "}
          <a href="/admin/sign-up" className="text-green-700 font-semibold underline">
            Buat Akun
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
