import DonorCard from "@/components/shared/DonorCard";
import FindDonor from "@/components/shared/forms/FindDonor";

async function Page() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <FindDonor />
    </div>
  );
}

export default Page;
