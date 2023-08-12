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
    <main className="flex m-auto justify-center items-center w-full flex-col">
      <div className="h-[200px] w-full flex items-center justify-center bg-blue-500 mb-12">
        <h1 className="text-[2rem] text-center text-thin text-white">
          Add Donor
        </h1>
      </div>
      <div className="w-[600px] mb-24">
        <RegisterDonor user={userData} />
      </div>
    </main>
  );
}

export default Page;
