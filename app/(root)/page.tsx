"use client";

import AboutUs from "@/components/shared/AboutUs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div>
        <section className="bg-cover bg-center bg-no-repeat flex  w-full py-16 h-[500px] ">
          <div className="flex flex-col items-center flex-1 text-center">
            <h2 className="text-white text-[4rem] font-semibold mb-4">
              Be a Hero, Donate Blood Today
            </h2>
            <p className="text-white text-[1.2rem] text-lg">
              Your blood donation can make a significant impact in saving lives.
              Join us in this noble cause.
            </p>
            <button
              onClick={() => router.push("/register")}
              className="mt-6 max-w-[300px] bg-red-500 text-[1.2rem] text-white py-2 px-6 rounded-full rounded-tr-none hover:bg-red-700"
            >
              Donate Now
            </button>
          </div>
          <div>Test</div>
        </section>

        {/* About Section */}
        <AboutUs />

        {/* Contact Section */}
        <section className=" py-16">
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
