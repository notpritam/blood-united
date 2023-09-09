import FindDonor from "@/components/shared/forms/FindDonor";

async function Page() {
  return (
    <div className="flex flex-col  justify-center items-center ">
      <div className="h-[60vh] bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full flex items-center justify-center">
        <h1 className="text-[5rem] text-center text-thin text-white">
          Find Donor
        </h1>
      </div>
      <FindDonor />
    </div>
  );
}

export default Page;
