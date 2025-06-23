import React from "react";
import Image from "next/image";
import Learning1 from "@/assets/images/learning-1.png";
import SignUpFormGuest from "@/features/auth/components/sign-up-form-guest"; // guest form

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-green-100 md:flex-row font-poppins">
      {/* Gambar kiri dalam card */}
      <div className="hidden md:flex h-full w-1/2 items-center justify-center">
        <div className="rounded-2xl p-8 max-w-[420px] w-full">
          <Image
            src={Learning1}
            alt="Ilustrasi Belajar"
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>

      {/* Form registrasi dalam card */}
      <div className="flex h-full w-full items-center justify-center px-4 md:w-1/2 md:px-[100px]">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-extrabold text-[#378308] md:text-[36px]">
              Kebun Jubung System
            </h3>
            <p className="text-lg text-gray-700 mt-2">Buat Akun Sebagai Tamu</p>
          </div>

          <SignUpFormGuest />

          <p className="text-center text-sm text-gray-600 mt-6">
            Sudah memiliki akun?{" "}
            <a
              href="/guest/sign-in"
              className="text-[#378308] font-medium underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
