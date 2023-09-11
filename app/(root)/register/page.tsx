import RegisterDonor from "@/components/shared/forms/RegisterDonor";
import React from "react";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();
  const userData = {
    id: user?.id || "",
    phoneNumber: " ",
    name: user?.firstName || " ",
  };
  return (
    <main className="flex relative m-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black justify-center w-full flex-col">
      <div className="h-[70vh] w-full flex items-center justify-between text-black p-12 bg-no-repeat bg-cover bg-center bg-[url('https://templates.bwlthemes.com/blood_donation/v_2/images/appointment_female_bg.jpg')]">
        <h1 className="text-[2rem] text-center text-thin text-white">
          Add Donor
        </h1>

        <div className="w-[600px]  bg-gradient-to-r from-gray-700 via-gray-900 to-black translate-y-[15rem]   border">
          <div className=" bg-gray-500 flex items-center justify-center p-4">
            <span className="text-[2rem] text-gray-300">Register as Donor</span>
          </div>
          <div className="p-8 text-white">
            <RegisterDonor user={userData} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] m-auto">
        <div className="w-full pt-12 flex flex-col gap-2 text-white p-8 pl-0">
          <span className="text-[1.5rem]">Good to Know</span>
          <div className="h-[3px] bg-red-500 w-[100px]"></div>
          <span className="text-[3rem]">Helpful Information</span>
        </div>
        <div className="flex flex-col text-white gap-3 text-[1.15rem]">
          <span>Maintain a healthy iron level by eating iron rich foods.</span>
          <span>Drink an extra 16 oz. of water prior to your donation.</span>

          <span>Avoid alcohol consumption before your blood donation.</span>

          <span>Remember to bring the donor card or national ID/Passport.</span>

          <span>
            Finally, Try to get a good night sound sleep after donation.
          </span>
        </div>

        <div className="flex justify-center gap-8  mt-[5rem] mb-[5rem] p-12 items-center">
          <div className=" flex gap-2 items-center hover:shadow-2xl duration-200 transition-all ease-in-out  justify-center rounded-lg flex-col p-4 w-[250px] h-[200px] group bg-white">
            <img
              className="h-[4rem] w-[4rem]  group-hover:fill-red-600 group-hover:-translate-y-2 duration-200 ease-in-out transition-all"
              src="/assets/img/heart.svg"
            ></img>
            <span className="text-[2rem] font-bold  text-red-600">2578</span>
            <span className="text-[1.1rem]">Success Smile</span>
          </div>

          <div className=" flex gap-2 items-center hover:shadow-2xl duration-200 transition-all ease-in-out  justify-center rounded-lg flex-col p-4 w-[250px] h-[200px] group bg-white">
            <img
              className="h-[4rem] w-[4rem]  group-hover:fill-red-600 group-hover:-translate-y-2 duration-200 ease-in-out transition-all"
              src="/assets/img/doctor.svg"
            ></img>
            <span className="text-[2rem] font-bold  text-red-600">3234</span>
            <span className="text-[1.1rem]">Happy Donors</span>
          </div>

          <div className=" flex gap-2 items-center hover:shadow-2xl duration-200 transition-all ease-in-out  justify-center rounded-lg flex-col p-4 w-[250px] h-[200px] group bg-white">
            <img
              className="h-[4rem] w-[4rem]  group-hover:fill-red-600 group-hover:-translate-y-2 duration-200 ease-in-out transition-all"
              src="/assets/img/happy.svg"
            ></img>
            <span className="text-[2rem] font-bold  text-red-600">2000</span>
            <span className="text-[1.1rem]">Happy Recipents</span>
          </div>

          <div className=" flex gap-2 items-center hover:shadow-2xl duration-200 transition-all ease-in-out  justify-center rounded-lg flex-col p-4 w-[250px] h-[200px] group bg-white">
            <img
              className="h-[4rem] w-[4rem]  group-hover:fill-red-600 group-hover:-translate-y-2 duration-200 ease-in-out transition-all"
              src="/assets/img/hospital-solid.svg"
            ></img>
            <span className="text-[2rem] font-bold  text-red-600">178</span>
            <span className="text-[1.1rem]">Total Awards</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
