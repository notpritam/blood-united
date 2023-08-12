"use server";
import Donor from "../models/Donor.model";
import { connectToDB } from "../mongoose";

interface Params {
  bloodType: string;
  city: string;
  phoneNumber: string;
  userId: string;
  name: string;
}

export async function createDonor({
  bloodType,
  city,
  phoneNumber,
  userId,
  name,
}: Params): Promise<void> {
  connectToDB();

  const newDonorData = {
    name: name,
    phoneNumber: phoneNumber,
    bloodType: bloodType,
    city: city,
  };

  try {
    await Donor.create(newDonorData);
  } catch (error: any) {
    throw new Error(`Failed to upadte user ${error.message}`);
  }
}

export async function getDonors(city: string, bloodType: string) {
  connectToDB();

  try {
    const donors = await Donor.find({
      city: city,
      bloodType: bloodType,
    }).select("name phoneNumber bloodType createdAt");

    console.log(donors, "this is file");

    return donors;
  } catch (error) {
    throw error;
  }
}
