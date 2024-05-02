"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const FormSchema = z.object({
  Region: z.string(),
  Language: z.string(),
  PreferredTime: z.string(),
  PreferredDays: z.string(),
  Subjects: z.string(),
  Mode: z.string(),
});

function onSubmit(data: z.infer<typeof FormSchema>) {
  console.log(
    <code className="text-white">{JSON.stringify(data, null, 2)}</code>,
  );
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  });
}

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Region: "",
      Language: "",
      PreferredTime: "",
      PreferredDays: "",
      Subjects: "",
      Mode: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="Region"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Region</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormDescription>Select your Preferred Region</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormDescription>Select your Preferred Languages</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="PreferredTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PreferredTime</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormDescription>Select your Preferred Time</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="PreferredDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PreferredDays</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormDescription>Select your Preferred Days</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Subjects"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subjects</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormDescription>Select the subjects</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="Mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormDescription>Select Mode of Mentorship</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="Mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mode</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a mode to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">Online</SelectItem>
                  <SelectItem value="m@google.com">One on One</SelectItem>
                  <SelectItem value="m@support.com">Doubt Solving</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
