import React from "react";
import Image from "next/image";
import Garden4 from "@/assets/images/garden-4.png";
import SignInFormAdmin from "@/features/auth/components/sign-in-form-admin";

const SignInPage = () => {
  return (
    <div className="font-poppins flex min-h-[calc(100vh-80px)] w-full flex-col-reverse md:flex-row bg-gradient-to-br from-green-100 via-white to-green-200">
      {/* Left Side - Image */}
      <div className="hidden md:flex flex-1 items-center justify-center p-8">
        <div className="max-w-[500px] w-full">
          <Image
            src={Garden4}
            alt="Learning Illustration"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 items-center justify-center px-4 md:px-[80px]">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
          <h3 className="text-center text-2xl font-extrabold text-green-800 md:text-4xl">
            Kebun Jubung System
          </h3>
          <h5 className="text-xl font-semibold text-gray-700 text-center mt-2">
            Admin Login
          </h5>
          <div className="mt-6">
            <SignInFormAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
