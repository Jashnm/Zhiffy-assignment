import Link from "next/link";
import { useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import {
  Box,
  Button,
  Flex,
  Image,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import styles from "../../styles/Navbar.module.css";
import MenuItem from "./MenuItem";
import { ChevronDownIcon } from "@chakra-ui/icons";
import HeaderProfile from "./HeaderProfile";

const UpperNavbar = () => {
  const [open, setOpen] = useState(false);
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const burgerHandle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        px={["1rem", "1.5rem"]}
        py={["0.2rem", "0.4rem"]}
        background="gray.700"
        color="white"
        m="auto"
        w="100%"
        top="0"
        maxH="10rem"
        borderBottom="1px"
        borderBottomColor="gray.100"
        position="static"
      >
        <Box>
          {isLargerThan780 ? (
            <Button
              rightIcon={<ChevronDownIcon />}
              _hover={{ bgColor: "gray.600" }}
              _active={{ bgColor: "transparent" }}
              _focus={{ outline: "none" }}
              variant="ghost"
              onClick={onOpen}
            >
              All
            </Button>
          ) : (
            <Box
              as={!open ? MdMenu : MdClose}
              display={{ sm: "block", md: "none" }}
              size="32px"
              position={open ? "fixed" : "relative"}
              color={!open ? "#fff" : "#000"}
              zIndex="100000"
              onClick={onOpen}
            ></Box>
          )}
          <MenuItem
            btnRef={btnRef}
            isOpen={isOpen}
            onClose={onClose}
            toggleClass={open && styles.navOpen}
            clickToggle={burgerHandle}
          />
        </Box>
        <HeaderProfile />
      </Flex>
    </div>
  );
};

export default UpperNavbar;
