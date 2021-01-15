import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Joi from "joi";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import SideWrapperAuth from "../components/SideWrapperAuth";
import { LOGIN } from "../constants";
import { useAuthDispatch, useAuthState } from "../context/userContext";

const schema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
});

const login = () => {
  const router = useRouter();
  const [credError, setCredError] = useState();
  const { email, loggedIn } = useAuthState();
  const dispatch = useAuthDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: joiResolver(schema)
  });

  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      if (res.data.success) {
        dispatch({
          type: LOGIN,
          payload: { email, loggedIn: res.data.success }
        });
        router.push("/products");
      } else {
        setCredError(res.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
              Log In
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                type="email"
                error={errors?.email?.message}
                fName="email"
                register={register}
              />
              <InputField
                type="password"
                error={errors?.password?.message}
                fName="password"
                register={register}
              />

              {credError && (
                <Text mx="4" color="red.600">
                  {credError}
                </Text>
              )}
              <Button
                type="submit"
                p="4"
                mt="4"
                colorScheme="main"
                mx="4"
                w="60%"
              >
                Log In
              </Button>
            </form>
            <Box fontSize="sm" mt="2" mx="4" fontWeight="semibold">
              New here?{" "}
              <Link href="/register">
                <Text as="a" color="main.600" cursor="pointer">
                  Sign Up
                </Text>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default login;
