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

    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10  justify-start text-black"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col  gap-3">
              <FormLabel className="text-base-semibold text-light-2 text-white">
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
              <FormLabel className="text-base-semibold text-light-2 text-white">
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
              <FormLabel className="text-base-semibold text-light-2 text-white">
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
              <FormLabel className="text-base-semibold text-white">
                Blood Type
              </FormLabel>
              <FormControl className="">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="text-black">
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Blood Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                  </SelectContent>
                </Select>
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
