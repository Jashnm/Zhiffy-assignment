import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import InputField from "../components/InputField";
import * as Joi from "joi";
import { useForm } from "react-hook-form";

import { joiResolver } from "@hookform/resolvers/joi";
import SideWrapperAuth from "../components/SideWrapperAuth";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  primary_img: Joi.object()
});

interface FormInputs {
  email: string;
  name: string;
  password: string;
  primary_img: File;
}

const register = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm<FormInputs>({
    mode: "onBlur",
    resolver: joiResolver(schema)
  });

  const onSubmit = async (values: FormInputs) => {
    console.log(values);
    const { name, email, password, primary_img } = values;
    const data = new FormData();

    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("primary_img", primary_img[0]);
    try {
      console.log(primary_img[0]);

      //   fetch("http://localhost:5000/register", config).then((res) => res.json());
      const res = await axios("http://localhost:5000/register", {
        method: "post",
        data: data
      });
      console.log(res.data);
      if (res.data.success) {
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex w="100vw" direction={["column", "column", "row"]}>
        <SideWrapperAuth />

        <Flex
          w={["100%", "100%", "60%"]}
          h="100vh"
          ml={["0", "0", "6"]}
          justify={["center", "center", "left"]}
          align="center"
        >
          <Box w="80%" maxW="420px">
            <Text
              fontSize="2xl"
              textTransform="uppercase"
              fontWeight="semibold"
              mx="4"
            >
              Sign Up
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                type="email"
                error={errors?.email?.message}
                fName="email"
                register={register}
              />
              <InputField
                type="text"
                error={errors?.name?.message}
                fName="name"
                register={register}
              />
              <InputField
                type="password"
                error={errors?.password?.message}
                fName="password"
                register={register}
              />
              <InputField type="file" fName="primary_img" register={register} />

              <Button
                type="submit"
                p="4"
                mt="4"
                colorScheme="main"
                mx="4"
                w="60%"
              >
                Sign Up
              </Button>
            </form>
            <Box fontSize="sm" mt="2" mx="4" fontWeight="semibold">
              Already a user?{" "}
              <Link href="/login">
                <Text as="a" color="main.600" cursor="pointer">
                  Log In
                </Text>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default register;
