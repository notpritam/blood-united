"use client";

import AboutUs from "@/components/shared/AboutUs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const wayToHelp = [
  {
    id: "",
    image:
      "https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-home-img01.jpg",
    title: "Donate Blood",
    subTitle: "Donate blood today, Help save lives.",
    link: "/donate",
    buttonText: "Donate Now",
  },
  {
    id: "",
    image:
      "https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-home-img02.jpg",
    title: "Volunteer Team",
    subTitle: "We are always looking for your help.",
    link: "Become a Volunteer",
    buttonText: "Become a Volunteer",
  },
  {
    id: "",
    image:
      "https://template79832.motopreview.com/mt-demo/79800/79832/mt-content/uploads/2019/04/mt-1802-home-img03.jpg",
    title: "Donate Money",
    subTitle: "Your financial gift can help people who need it most",
    link: "",
    buttonText: "Donate Now",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div>
        <section className="bg-cover bg-center bg-no-repeat flex p-16 pt-[12rem]  w-full py-16 ">
          <div className="flex flex-col justify-center pl-16 text-lext  flex-1 text-center">
            <h2 className="text-white text-left text-[5rem] font-semibold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text bg-300% animate-gradient">
              Be a Hero, Donate Blood Today
            </h2>
            <p className="text-white text-left text-[1.8rem] text-lg">
              Your blood donation can make a significant impact in saving lives.
              <br />
              Join us in this noble cause.
            </p>
            <button
              onClick={() => router.push("/register")}
              className="mt-6 max-w-[300px] bg-red-500  text-white py-2 px-6 text-[1.8rem] rounded-full rounded-tr-none hover:bg-red-700"
            >
              Donate Now
            </button>
          </div>
          <div className="flex-1">
            <div className="h-[700px] border-[3px] relative bg-red-600 rounded-full rounded-bl-none overflow-hidden w-[700px]">
              <Image
                className="h-[700px] w-[700px] absolute -top-8 left-8 shadow-lg backdrop-blur-lg object-coverj object-bottom"
                height={800}
                width={800}
                src="/assets/img/herooo.jpg"
                alt="Blood Donation Image"
              ></Image>
            </div>
          </div>
        </section>

        <div className="rounded-tr-[100px] mt-12 w-[80%] flex p-8 text-white  rounded-br-none  bg-red-500">
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
        <AboutUs />

        <div className="flex flex-col  max-w-[1440px] m-auto w-full items-center text-white ">
          <div className="flex flex-col items-center gap-4 mt-24 mb-8">
            <span className="uppercase text-[1.5rem] text-gray-300 tracking-widest">
              Get Involved
            </span>
            <span className="text-[3rem] font-medium bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text bg-300% animate-gradient ">
              Ways to Help
            </span>

            <div className="h-[4px] bg-red-400 w-[100px]"></div>
          </div>

          <div className="grid grid-cols-3 gap-8 p-8 w-full  relative">
            {wayToHelp.map((item) => (
              <div className="flex relative flex-col justify-end h-[300px] rounded-xl overflow-hidden hover:shadow-2xl duration-100 transition-all ease-in-out  gap-4">
                <img
                  className="absolute hover:scale-105 duration-200 transition-all ease-in-out object-cover rounded-xl overflow-hidden h-full w-full"
                  src={item.image}
                ></img>

                <div className="z-[2]  backdrop-opacity-10 flex flex-col items-start p-2 px-6">
                  <span className="text-[2rem]">{item.title}</span>
                  <span className="text-[]">{item.subTitle}</span>

                  <button className="p-2 px-4 mt-4 mb-2 bg-white rounded-tr-none text-black rounded-full">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <section className="  py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-800 text-[3.5rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text bg-300% animate-gradient font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 text-lg">
              Have questions or want to get involved? Reach out to us at
              info@blooddonation.org
            </p>
          </div>
        </section>

        <div className="flex flex-col max-w-[60vw] items-center  gap-8 m-auto text-center bg-gray-700 mt-[10rem] mb-[10rem] px-[4rem] py-[2rem]">
          <span className="text-[3rem] font-bold text-white">
            Become A Part Of Great Work Today
          </span>
          <span className="text-[1.25rem] text-gray-200">
            You can give blood at any of our blood donation venues all over the
            world. We have total sixty thousands donor centers and visit
            thousands of other venues on various occasions.
          </span>
          <button className="uppercase px-[4rem] w-[300px] rounded-2xl py-[1rem] text-white bg-red-600">
            Join with Us
          </button>
        </div>

        {/* Footer */}

        <div className="h-12"></div>
      </div>
    </main>
  );
}
