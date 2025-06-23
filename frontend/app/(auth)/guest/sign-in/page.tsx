import React from "react";
import Image from "next/image";
import Garden3 from "@/assets/images/garden-3.png";
import SignInFormGuest from "@/features/auth/components/sign-in-form-guest";

const SignInPage = () => {
  return (
    <div className="font-poppins flex w-full flex-col-reverse items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 md:flex-row">
      {/* Gambar kiri seperti card */}
      <div className="hidden md:flex flex-1 items-center justify-center p-4">
        <div className="max-w-[400px] w-full">
          <Image
            src={Garden3}
            alt="Ilustrasi Belajar"
            className="w-full h-auto rounded-2xl object-contain"
            priority
          />
        </div>
      </div>

      {/* Form login dalam card */}
      <div className="flex flex-1 items-center justify-center px-4 md:px-[80px]">
        <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-extrabold text-[#378308] md:text-[36px] leading-tight">
              Kebun Jubung System
            </h3>
            <p className="text-lg text-gray-700 mt-2">Masuk sebagai Tamu</p>
          </div>

          <SignInFormGuest />

          <p className="text-center text-sm text-gray-600 mt-6">
            Belum memiliki akun?{" "}
            <a
              href="/guest/sign-up"
              className="text-[#378308] font-medium underline"
            >
              Buat Akun
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
