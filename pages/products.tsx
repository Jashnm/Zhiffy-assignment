import { Flex, Container, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import ProductBox from "../components/ProductBox";
import { useAuthState } from "../context/userContext";

export const productsList = [
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1935/4371/products/050234107518_CPC_1100_GPS_1_570x380.jpg?v=1529944003",
    title: "CELESTRON CPC 1100",
    price: "395868",
    rating: 4.4,
    reviewCount: 78
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1935/4371/products/12019_CGEM_II_EdgeHD_1100_01.jpg?v=1529944301",
    title: "CGEM II 1100 EDGEHD",
    price: "332856",
    rating: 4.3,
    reviewCount: 105
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1935/4371/products/11089_CGE_Pro_1400_Fastar_1.jpg?v=1529944356",
    title: "CELESTRON 14 SCHMIDT-CASSEGRAIN CGE PRO",
    price: "1227599",
    rating: 4.6,
    reviewCount: 33
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0080/7095/5123/products/RS1715_S11820_Flextube300SynScan_LeftFront-scr_1024x.jpg?v=1603927415",
    title: "Sky-Watcher Flextube 300 SynScan Dobsonian",
    price: "154596",
    rating: 4.4,
    reviewCount: 60
  },
  {
    imageUrl:
      "https://nimax-img.de/Produktbilder/big/49860_2/Orion-Maksutov-telescope-MC-150-1800-StarSeeker-IV-AZ-SynScan-WiFi.jpg",
    title: "Orion Starseeker IV 150",
    price: "40556",
    rating: 4,
    reviewCount: 136
  }
];

const products: React.FC = () => {
  const router = useRouter();
  const { loggedIn } = useAuthState();

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    }
  }, []);
  if (!loggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container maxW="1020px" mt="10">
        <Text fontSize="3xl" fontWeight="semibold">
          All Products
        </Text>
        <Flex flexWrap="wrap" justify={["center", "center", "normal"]} mt="2">
          {productsList.map((product) => (
            <ProductBox product={product} />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default products;
