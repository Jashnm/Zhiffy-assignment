import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Hero from "../components/Hero";
import MainTab from "../components/MainTab";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zhiffy Assignment by Jashn Maloo</title>
      </Head>
      <Container maxW={["100vw", "92vw", "80vw"]} w="100%" centerContent>
        <Hero />
        <MainTab />
      </Container>
    </div>
  );
}
