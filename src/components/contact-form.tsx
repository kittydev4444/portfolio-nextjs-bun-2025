"use client";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    reset();
    alert("Meow! Your message has been received!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="gradient-border overflow-hidden rounded-lg bg-white p-6 shadow-xl dark:bg-kitty-dark md:p-8"
    >
      <h3 className="mb-6 flex items-center gap-2 font-bubblegum text-2xl font-bold">
        <Icon icon="noto:cat-face" className="h-8 w-8" />
        <span className="neon-text">Send Me a Meowssage!</span>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Your Name"
          variant="bordered"
          {...register("name")}
          isInvalid={!!errors.name}
          errorMessage={errors.name?.message}
          classNames={{
            label: "font-bubblegum",
            input: "font-nunito",
          }}
          startContent={
            <Icon icon="lucide:user" className="text-kitty-pink-hot" />
          }
        />

        <Input
          label="Your Email"
          variant="bordered"
          type="email"
          {...register("email")}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          classNames={{
            label: "font-bubblegum",
            input: "font-nunito",
          }}
          startContent={<Icon icon="lucide:mail" className="text-kitty-blue" />}
        />

        <Input
          label="Subject"
          variant="bordered"
          {...register("subject")}
          isInvalid={!!errors.subject}
          errorMessage={errors.subject?.message}
          classNames={{
            label: "font-bubblegum",
            input: "font-nunito",
          }}
          startContent={<Icon icon="lucide:tag" className="text-kitty-green" />}
        />

        <Textarea
          label="Your Meowssage"
          variant="bordered"
          minRows={4}
          {...register("message")}
          isInvalid={!!errors.message}
          errorMessage={errors.message?.message}
          classNames={{
            label: "font-bubblegum",
            input: "font-nunito",
          }}
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-kitty-pink-hot to-kitty-blue font-bubblegum text-white shadow-lg"
          size="lg"
          isLoading={isSubmitting}
          endContent={!isSubmitting && <Icon icon="lucide:paw-print" />}
        >
          {isSubmitting ? "Sending..." : "Send Meowssage!"}
        </Button>
      </form>
    </motion.div>
  );
}
