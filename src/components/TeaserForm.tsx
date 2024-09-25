"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useBreakpoint,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

export default function TeaserForm() {
  const { register, handleSubmit, reset } = useForm<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>();

  const toast = useToast();
  const breakpoint = useBreakpoint();

  // const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "pending">("idle");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    setSubmitState("pending");
    const recaptchaValue = recaptchaRef.current
      ? await recaptchaRef.current.executeAsync()
      : null;
    if (!recaptchaValue) {
      toast({
        title: "Error Recaptcha",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: breakpoint === "base" ? "bottom" : "bottom-right",
      });
      setSubmitState("idle");
      return;
    }

    const newData = { ...data, recaptcha: recaptchaValue };

    const response = await fetch("/api/teaser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (response.status === 400) {
      const errorMessage = await response.text();
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: breakpoint === "base" ? "bottom" : "bottom-right",
      });
      setSubmitState("idle");
      return;
    }

    if (response.status === 500) {
      toast({
        title: "Error",
        description: "Error sending email",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: breakpoint === "base" ? "bottom" : "bottom-right",
      });
      setSubmitState("idle");
      return;
    }

    if (response.ok) {
      toast({
        title: "Email Sent",
        description: "We will contact you shortly. Have a good day!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: breakpoint === "base" ? "top" : "bottom-right",
      });
      reset();
      grecaptcha.reset();
    }
    setSubmitState("idle");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mx-auto">
      <Box className="flex flex-col gap-6">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            variant={"flushed"}
            type="string"
            // placeholder="Name"
            required
            {...register("name", { required: true, maxLength: 30 })}
          />
        </FormControl>
        <div className="flex flex-col xl:flex-row gap-2">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              variant={"flushed"}
              // placeholder="Email"
              required
              {...register("email", { required: true })}
            />
            {/* <FormHelperText>Please enter an active email.</FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              variant={"flushed"}
              type="tel"
              // placeholder="09xx-xxx-xxxx"
              required
              {...register("phone", { required: true })}
            />
          </FormControl>
        </div>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Input
            variant={"flushed"}
            className=" placeholder-white"
            placeholder="Write your message..."
            resize={"none"}
            {...register("message", { required: true, maxLength: 500 })}
          />
        </FormControl>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY!}
          ref={recaptchaRef}
          size="invisible"
          className=" hidden"
        />
        <Button type="submit" className="rounded-full bg-[#ddac00] text-white w-full xl:w-fit ml-auto">
          {submitState === "pending" ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </form>
  );
}
