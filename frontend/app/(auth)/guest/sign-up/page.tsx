import React from "react";
import Image from "next/image";
import Garden2 from "@/assets/images/garden-2.png";
import SignUpFormGuest from "@/features/auth/components/sign-up-form-guest";

const SignUpPage = () => {
  return (
    <div className="flex  w-full flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 md:flex-row font-poppins pt-7 pb-5">
      {/* Gambar kiri dalam card */}
      <div className="hidden md:flex flex-1 items-center justify-center p-8">
        <div className="max-w-[500px] w-full">
          <Image
            src={Garden2}
            alt="Ilustrasi Belajar"
            className="w-full h-auto rounded-xl object-contain"
            priority
          />
        </div>
      </div>

      {/* Form registrasi dalam card */}
      <div className="flex flex-1 items-center justify-center px-4 md:px-[80px]">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-extrabold text-[#378308] md:text-[36px] leading-tight">
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
