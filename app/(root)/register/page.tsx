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
      <div className="w-[600px]">
        <RegisterDonor user={userData} />
      </div>
    </main>
  );
}

export default Page;
