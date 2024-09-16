"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useBreakpoint,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
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

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<"idle" | "pending">("idle");

  const recaptchaOnChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const onSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    setSubmitState("pending");
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Box className="flex flex-col gap-2">
        <div className="flex flex-col xl:flex-row gap-2">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="string"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 30 })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {/* <FormHelperText>Please enter an active email.</FormHelperText> */}
          </FormControl>
        </div>
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            placeholder="09xx-xxx-xxxx"
            {...register("phone", { required: true })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="Inquire current listings."
            {...register("message", { required: true, maxLength: 500 })}
          />
        </FormControl>
        {/* <div
          className="g-recaptcha"
          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
          data-callback="onSubmit"
          data-size="invisible"
        ></div> */}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY!}
          onChange={recaptchaOnChange}
          // size="invisible"
        />
        <Button type="submit" colorScheme="yellow">
          {submitState === "pending" ? "Sending..." : "Send"}
        </Button>
      </Box>
    </form>
  );
}
