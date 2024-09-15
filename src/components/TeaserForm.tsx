"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useBreakpoint,
  useToast,
} from "@chakra-ui/react";
import _ from "lodash";
import { useState } from "react";
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

  const [submitState, setSubmitState] = useState<"idle" | "pending">("idle");

  const onSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    setSubmitState("pending");
    const response = await fetch("/api/teaser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 400) {
      toast({
        title: "Error",
        description: "Invalid email",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: breakpoint === "base" ? "bottom" : "bottom-right",
      });
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
    }
    setSubmitState("idle");
  };

  return (
    <form onSubmit={handleSubmit(_.debounce(onSubmit, 2000))} className="w-full">
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
            minHeight={150}
            {...register("message", { required: true, maxLength: 500 })}
          />
        </FormControl>
        <Button type="submit" colorScheme="yellow">
          {submitState === "pending" ? "Sending..." : "Send"}
        </Button>
      </Box>
    </form>
  );
}
