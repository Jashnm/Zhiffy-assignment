import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex direction={["column", "column", "row"]} my="8" w="100%">
      <Box w="100%">
        <Heading
          letterSpacing="0.01em"
          fontSize="calc(2.4rem + 0.6vw)"
          lineHeight={["1.5", "1.6"]}
        >
          Sell, Buy & Exchange Pre Used.
          <br />
          Without fear. Guaranteed.
        </Heading>
        <Text
          letterSpacing="0.04em"
          mt="4"
          fontSize="xl"
          fontWeight="semibold"
          lineHeight="1.6"
        >
          Verified Profiles. Free Delivery. Online transactions only.
        </Text>
      </Box>
      <Box
        maxw="600px"
        w="100%"
        h={["320px", "360px", "360px"]}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="contain"
        bgImage="url('./images/vector-creator-exchange.png')"
      />
    </Flex>
  );
};

export default Hero;
