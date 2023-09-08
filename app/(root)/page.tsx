"use client";

import AboutUs from "@/components/shared/AboutUs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div>
        <section className="bg-cover bg-center bg-no-repeat flex p-16 pt-[12rem]  w-full py-16 ">
          <div className="flex flex-col justify-center pl-16 text-lext  flex-1 text-center">
            <h2 className="text-white text-left text-[5rem] font-semibold mb-4">
              Be a Hero, Donate Blood Today
            </h2>
            <p className="text-white text-left text-[1.5rem] text-lg">
              Your blood donation can make a significant impact in saving lives.
              <br />
              Join us in this noble cause.
            </p>
            <button
              onClick={() => router.push("/register")}
              className="mt-6 max-w-[300px] bg-red-500 text-[1.2rem] text-white py-2 px-6 rounded-full rounded-tr-none hover:bg-red-700"
            >
              Donate Now
            </button>
          </div>
          <div className="flex-1">
            <div className="h-[700px] relative bg-red-600 rounded-full rounded-bl-none overflow-hidden w-[700px]">
              <Image
                className="h-[700px] w-[700px] absolute -top-8 left-8 object-coverj object-bottom"
                height={800}
                width={500}
                src="/assets/img/hero.png"
                alt="Blood Donation Image"
              ></Image>
            </div>
          </div>
        </section>

        <div className="rounded-tr-[100px] w-[80%] flex p-8 text-white  rounded-br-none  bg-red-500">
          <div className="flex-1 text-[3rem] pl-16">
            <h2>We are helping people from 10 years</h2>
            <span className="text-[2rem] text-gray-200">
              Helping everyone to donate and also to find donor
            </span>
          </div>
          <div className="pr-8 flex  items-center justify-center ">
            <button
              onClick={() => router.push("/register")}
              className="mt-6 flex items-center gap-2 max-w-[300px] sha bg-white text-[1.2rem] text-black py-2 px-2 pl-4 rounded-full rounded-tr-none hover:bg-red-700"
            >
              Donate Now
              <div className="h-full bg-green-500 p-2 rounded-tr-none rounded-full">
                {"=>"}
              </div>
            </button>
          </div>
        </div>
        {/* About Section */}
        <section className=" text-white mt-[10rem]">
          <div className="container flex">
            <div className="flex flex-1">
              <div className="flex flex-1 flex-col">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src="/assets/img/second.jpg"
                    height={300}
                    width={300}
                    alt="Image"
                    className="w-full object-cover h-full"
                  />
                </div>

                <div className="w-full h-full overflow-hidden">
                  <Image
                    height={300}
                    width={300}
                    src="/assets/img/blood.avif"
                    alt="Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="h-[600px] bg-red-400 flex-1 w-full">
                <img
                  src="https://images.unsplash.com/photo-1582719202047-76d3432ee323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full flex-1 flex p-4 pt-[8rem]">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Why Donate Blood
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Be the Lifeline: Donate Blood, Save Lives.
                </h2>
                <p className="mb-8 text-base text-body-color">
                  Be a lifeline. Donate blood. Save lives. Your simple act of
                  generosity can bring light to someone's darkest moments. Join
                  the movement today!
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

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
