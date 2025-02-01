"use client";

import { X, Telegram, Instagram } from "@mui/icons-material";
import {
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Form,
  FormItem,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { send } from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function ContactMe() {
  return (
    <div
      id="contact"
      className="bg-slate-900 py-24 lg:px-[50px] md:py-20 w-full flex flex-col justify-center items-center lg:flex-row lg:items-start"
    >
      <div className="mx-auto max-w-5xl lg:max-w-2xl lg:w-1/2 px-6">
        <div className="text-black text-center lg:text-start">
          <h2 className="font-bold text-4xl text-amber-400">Get in Touch</h2>
          <p className="text-gray-500 mt-3">
            Hey there! If you're into disrupting industries, exploring the next
            frontier, or just want to bounce around some big ideas, I'm your
            guy. Feel free to reach out
            <span className="text-amber-400">
              <a href="mailto:kevindan641@gmail.com"> via email </a>
            </span>
            or ping me on my socials. Let's innovate, collaborate, and make some
            magic happen!
          </p>
          <div className="flex gap-3 items-center justify-center mt-6 text-gray-500 lg:justify-start">
            <a href="https://twitter.com/home">
              <X />
            </a>
            <a href="https://www.instagram.com/kevin_mbawalla/">
              <Instagram />
            </a>
            <a href="https://t.me/share/url?url={@kevinmbawalla}">
              <Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="py-16 w-full lg:max-w-2xl lg:py-8">
        <ContactForm />
      </div>
    </div>
  );
}

const formSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required." })
    .min(2, { message: "Must be 2 or more characters." }),
  lastName: z.string(),
  email: z
    .string({ required_error: "Email is required... Don't be anonymous." })
    .email({ message: "Invalid email address." }),
  message: z
    .string({ required_error: "Please say something." })
    .min(10, { message: "Must be at least 10 characters." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const template_params = {
      from_name: values.firstName + " " + values.lastName,
      from_email: values.email,
      message: values.message,
    };
    send(
      "service_viym6dy",
      "template_j03wqp9",
      template_params,
      "Je9PKxfPjX4fwAsIV"
    ).then(
      (result) => {
        console.log(result.status);
      },
      (error) => {
        console.log(error.text);
      }
    );
    toast({
      title: "Confirmation Message",
      description: "Your message has been sent.",
      className: "bg-green-700 text-white border-green-700",
    });
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        className="space-y-8 flex-shrink-0 max-w-2xl lg:max-w-none lg:w-full mx-auto px-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-between gap-6 proMax:gap-6 proMax:flex-row">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  This field is for your first name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormDescription className="sr-only">
                  This field is for your last name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="text-black" />
              </FormControl>
              <FormDescription className="sr-only">
                This field is for you to enter your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Say something"
                  rows={4}
                  className="resize-none text-black"
                />
              </FormControl>
              <FormDescription className="sr-only">
                This field is for you to enter a message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-black bg-amber-400 sm:bg-amber-500 hover:bg-amber-400 active:scale-95 transition-transform duration-75 w-full"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}
