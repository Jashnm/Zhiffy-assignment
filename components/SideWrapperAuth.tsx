import { Box, Flex, Text } from "@chakra-ui/react";

const SideWrapperAuth = () => {
  return (
    <>
      <Flex
        bgColor="main.500"
        width={["100%", "100%", "40%"]}
        h="100%"
        justify="center"
        align="center"
        direction="column"
        height="100vh"
      >
        <Text
          fontSize="5xl"
          letterSpacing="0.04em"
          fontWeight="bold"
          color="white"
          mb="10vh"
          textAlign="center"
        >
          Let's Zhiffy It
        </Text>
        <Box
          bgImage="url('./images/unsplash-1.jpg')"
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          w="80%"
          maxW="360px"
          h="360px"
          borderRadius="md"
        />
      </Flex>
    </>
  );
};

export default SideWrapperAuth;
