"use client";
import { donorSchema, findDonorSchema } from "@/lib/validations/donor";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDonor, getDonors } from "@/lib/actions/donor.action";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DonorCard from "../DonorCard";
import { timeStamp } from "console";

interface Props {
  user: {
    id: string;
    name: string;
    phoneNumber: string;
  };
}

interface Donor {
  _id: string;
  name: string;
  phoneNumber: string;
  city: string;
  bloodType: string;
  createdAt: Date;
}

const FindDonors = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const form = useForm({
    resolver: zodResolver(findDonorSchema),
    defaultValues: {
      city: "",
      bloodType: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof findDonorSchema>) => {
    const donorList = await getDonors(values.city, values.bloodType);

    setDonors(donorList);
  };

  const getDate = (timestamp: any) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options as any);

    return formattedDate;
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center items-center w-full p-4 md:p-8 lg:p-12">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-10 w-full flex-col lg:flex-row items-center justify-center"
          >
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex flex-col  gap-3">
                  <FormLabel className="text-base-semibold text-light-2">
                    City
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      type="text"
                      className="account-form_input no-focus "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bloodType"
              render={({ field }) => (
                <FormItem className="flex flex-col  gap-3">
                  <FormLabel className="text-base-semibold text-light-2">
                    Blood Type
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      type="text"
                      className="account-form_input no-focus "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-black" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>

      <div className="grid grid-cols-1 gap-6 md:p-12 md:grid-cols-3 lg:grid-cols-4">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              Featured
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {donor.name}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {donor.bloodType}
              </p>

              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-black"
              >
                Contact at :- {donor.phoneNumber}
              </button>
            </div>
            <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              Joined on :- {getDate(donor.createdAt.toString())}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindDonors;
