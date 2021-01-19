import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { LOGIN } from "../constants";
import { useAuthDispatch, useAuthState } from "../context/userContext";

const profile = () => {
  const dispatch = useAuthDispatch();
  const { email, user, loggedIn } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (loggedIn) {
      const getUser = async () => {
        try {
          const res = await axios.post("http://localhost:5000/session", {
            email
          });
          dispatch({ type: LOGIN, payload: { ...res.data } });
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    } else {
      router.push("/login");
    }
  }, []);

  if (!loggedIn) {
    return <div>Redirecting to Log In</div>;
  }
  return (
    <div>
      <Container maxW="1020px" mt="8">
        <Heading textAlign={["center", "unset"]}>{user.name}'s Profile</Heading>
        <Flex mt="6" wrap="wrap" mx={["1", "0"]}>
          <Box
            maxW={["380px", "300px"]}
            w="100%"
            textAlign={["center", "unset"]}
            mx="1"
            mt="2"
            borderRight={["0px", "0px", "1px"]}
            borderRightColor={["", "", "gray.100"]}
            px="2"
          >
            <Avatar
              size="2xl"
              src={`http://localhost:5000/${user.img}`}
              name={user.name}
            />
          </Box>
          <Box px="2" ml={["0", "2"]} mt={["5", "2"]}>
            <VStack
              spacing={4}
              align="stretch"
              fontSize="xl"
              fontWeight="semibold"
            >
              <Box mt="1">
                Name:{" "}
                <Text fontSize="lg" fontWeight="normal">
                  {user.name}
                </Text>
              </Box>
              <Box mt="1">
                Email:{" "}
                <Text fontSize="lg" fontWeight="normal">
                  {user.email}
                </Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default profile;
