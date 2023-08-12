"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { userAgent } from "next/server";
import Link from "next/link";

import { currentUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Header from "@/components/shared/Header";
import AboutUs from "@/components/shared/AboutUs";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div>
        <section className="bg-blue-500 bg-cover bg-center bg-no-repeat flex justify-center items-center w-full py-16 h-[500px] ">
          <div className="flex flex-col items-center w-[600px] text-center">
            <h2 className="text-white text-3xl font-semibold mb-4">
              Be a Hero, Donate Blood Today
            </h2>
            <p className="text-white text-lg">
              Your blood donation can make a significant impact in saving lives.
              Join us in this noble cause.
            </p>
            <button
              onClick={() => router.push("/register")}
              className="mt-6 max-w-[300px] bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-700"
            >
              Donate Now
            </button>
          </div>
        </section>

        {/* About Section */}
        <AboutUs></AboutUs>

        {/* Contact Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-800 text-3xl font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">
              Have questions or want to get involved? Reach out to us at
              info@blooddonation.org
            </p>
          </div>
        </section>

        {/* Footer */}

        <div className="h-12"></div>
      </div>
    </main>
  );
}
