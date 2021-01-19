import {
  ScaleFade,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";
import { productsList } from "../pages/products";
import CarouselItem from "./CarouselItem";
import ProductBox from "./ProductBox";
import ProductCarousel from "./ProductCarousel";

export const products = [
  {
    name: "michaelscarn",
    createdAt: "2020-12-17T03:24:00",
    img: "https://picsum.photos/300",
    title: "Threat Level Midnight",
    price: 5555550
  },
  {
    name: "sanam7",
    createdAt: "2021-01-10T03:24:00",
    img: "https://picsum.photos/300",
    title: "Some music",
    price: 3100
  },
  {
    name: "yolopo",
    createdAt: "2020-01-01T03:24:00",
    img: "https://picsum.photos/300",
    title: "Something to sell",
    price: 4550
  },
  {
    name: "dwight",
    createdAt: "2020-12-24T03:24:00",
    img: "https://picsum.photos/300",
    title: "Beets",
    price: 6000
  },
  {
    name: "narddog",
    createdAt: "2020-11-29T03:24:00",
    img: "https://picsum.photos/300",
    title: "boat",
    price: 350000
  },
  {
    name: "jakeparelta",
    createdAt: "2020-12-30T03:24:00",
    img: "https://picsum.photos/300",
    title: "watch",
    price: 10800
  },
  {
    name: "eleanor_shell",
    createdAt: "2020-01-14T03:24:00",
    img: "https://picsum.photos/300",
    title: "habits",
    price: 9999
  },
  {
    name: "janetdd",
    createdAt: "2020-12-27T03:24:00",
    img: "https://picsum.photos/300",
    title: "magic",
    price: 75000
  },
  {
    name: "Pam",
    createdAt: "2020-01-04T03:24:00",
    img: "https://picsum.photos/300",
    title: "Art",
    price: 8100
  },
  {
    name: "Amy",
    createdAt: "2020-01-10T03:24:00",
    img: "https://picsum.photos/300",
    title: "Books",
    price: 3800
  }
];

const CustomTab = ({ name }) => {
  return (
    <Tab _selected={{ color: "white", bg: "main.500" }} boxShadow="md">
      {name}
    </Tab>
  );
};

const MainTab = () => {
  return (
    <>
      <Tabs
        isLazy
        variant="unstyled"
        w="100%"
        boxShadow="md"
        rounded="sm"
        py="3"
        px="4"
        my="5"
      >
        <TabList>
          <CustomTab name="Just In Store" />
          <CustomTab name="For You" />
          <CustomTab name="Most Visited" />
          <CustomTab name="What's Hot" />
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProductCarousel>
              {products.map((product, i) => (
                <CarouselItem product={product} key={i} />
              ))}
            </ProductCarousel>
          </TabPanel>
          <TabPanel>
            <ProductCarousel>
              {products.map((product, i) => (
                <CarouselItem product={product} key={i} />
              ))}
            </ProductCarousel>
          </TabPanel>
          <TabPanel>
            <ProductCarousel>
              {products.map((product, i) => (
                <CarouselItem product={product} key={i} />
              ))}
            </ProductCarousel>
          </TabPanel>
          <TabPanel>
            <ProductCarousel>
              {products.map((product, i) => (
                <CarouselItem product={product} key={i} />
              ))}
            </ProductCarousel>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default MainTab;
