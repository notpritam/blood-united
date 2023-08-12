import DonorCard from "@/components/shared/DonorCard";
import FindDonor from "@/components/shared/forms/FindDonor";

async function Page() {
  return (
    <div className="flex flex-col  justify-center items-center ">
      <div className="h-[200px] w-full flex items-center justify-center bg-blue-500 mb-12">
        <h1 className="text-[2rem] text-center text-thin text-white">
          Find Donor
        </h1>
      </div>
      <FindDonor />
    </div>
  );
}

export default Page;
