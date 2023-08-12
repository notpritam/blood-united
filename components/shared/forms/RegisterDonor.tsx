"use client";
import { donorSchema } from "@/lib/validations/donor";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDonor } from "@/lib/actions/donor.action";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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

interface Props {
  user: {
    id: string;
    name: string;
    phoneNumber: string;
  };
}

const RegisterDonor = ({ user }: Props) => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(donorSchema),
    defaultValues: {
      city: "",
      name: user?.name || "",
      phoneNumber: "",
      bloodType: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof donorSchema>) => {
    await createDonor({
      name: values.name,
      bloodType: values.bloodType.toLowerCase(),
      city: values.city.toLowerCase(),
      phoneNumber: values.phoneNumber,
      userId: user.id,
    });

    // router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10  justify-start"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col  gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Name
              </FormLabel>
              <FormControl>
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
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col  gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Phone Number
              </FormLabel>
              <FormControl>
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
  );
};

export default RegisterDonor;
