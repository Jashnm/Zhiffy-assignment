import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
  Box
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import styles from "../../styles/Navbar.module.css";

const Links = [
  { link: "/mobiles", name: "Mobiles" },
  { link: "/laptops", name: "Laptops" },
  { link: "/video-games", name: "Video Games" },
  { link: "/watches", name: "Watches" },
  { link: "/tablets", name: "Tablets" }
];

interface IMenuItemProps {
  toggleClass: any;
  clickToggle: any;
  isOpen: boolean;

  btnRef: any;
  onClose: any;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  toggleClass,
  clickToggle,
  isOpen,
  onClose,
  btnRef
}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = useRef()
  return (
    <>
      <Flex
        className={`${styles.navLinks} ${toggleClass}`}
        alignItems="baseline"
        display="inline-flex"
      >
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Categories</DrawerHeader>

              <DrawerBody>
                <VStack spacing={4} align="stretch">
                  {Links.map(({ link, name }) => (
                    <Box h="40px" key={name}>
                      <Link href={link}>
                        <a style={{ textDecoration: "none" }}>{name}</a>
                      </Link>
                    </Box>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        {Links.map(({ link, name }) => (
          <Text
            key={name}
            color={["gray.800", "gray.800", "gray.50"]}
            p="4"
            onClick={clickToggle}
          >
            <Link key={name} href={link}>
              <a style={{ textDecoration: "none" }}>{name}</a>
            </Link>
          </Text>
        ))}
      </Flex>
    </>
  );
};

export default MenuItem;
