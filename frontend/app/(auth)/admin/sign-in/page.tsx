import React from "react";
import Image from "next/image";
import Learning5 from "@/assets/images/learning-5.png";
import SignInFormAdmin from "@/features/auth/components/sign-in-form-admin";

const SignInPage = () => {
  return (
    <div className="font-poppins flex h-screen w-screen flex-col-reverse md:flex-row bg-gradient-to-br from-green-100 via-white to-green-200">
      {/* Left Side - Image */}
      <div className="hidden md:flex h-full w-1/2 items-center justify-center">
        <Image
          src={Learning5}
          alt="Learning Illustration"
          className="w-[80%] h-auto object-contain"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex h-full w-full md:w-1/2 flex-col items-center justify-center gap-6 px-6 md:px-[80px]">
        <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-3xl shadow-2xl">
          <h3 className="text-center text-2xl font-extrabold text-green-800 md:text-4xl">
            Kebun Jubung System
          </h3>
          <h5 className="text-xl font-semibold text-gray-700 text-center">
            Admin Login
          </h5>
          <SignInFormAdmin />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
