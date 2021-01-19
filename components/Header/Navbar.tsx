import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  List,
  ListItem
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { IoWalletOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { LOGOUT } from "../../constants";
import { useAuthDispatch, useAuthState } from "../../context/userContext";
import UpperNavbar from "./UpperNavbar";

const Navbar = () => {
  const { loggedIn } = useAuthState();
  const dispatch = useAuthDispatch();
  const router = useRouter();

  return (
    <>
      <UpperNavbar />
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        px={["1rem", "2rem"]}
        py={["0.1rem", "0.2rem"]}
        background="white"
        color="white"
        m="auto"
        w="100%"
        top="0"
        maxH="10rem"
        borderBottom="1px"
        borderBottomColor="gray.100"
        boxShadow="md"
      >
        <Link href="/">
          <a>
            <Image
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQH2e5xUqEo6xA/company-logo_200_200/0/1596812959135?e=2159024400&v=beta&t=dexs4LgyduAYIHP4DwJphtQeo9l1Xc1Ib0GMg91Z_D8"
              alt=""
              id="logo"
              boxSize="calc(4.6rem + 1.8vw)"
            />
          </a>
        </Link>

        <List
          maxW="260px"
          w="100%"
          spacing={5}
          listStyleType="none"
          display="flex"
          color="main.500"
          justifyContent="space-evenly"
          alignItems="center"
          fontWeight="semibold"
        >
          {loggedIn && (
            <>
              <ListItem>
                <Link href="/">
                  <a>
                    <Button variant="ghost" leftIcon={<IoWalletOutline />}>
                      Balance
                    </Button>
                  </a>
                </Link>
              </ListItem>
              <ListItem mt="0 !important">
                <Link href="/">
                  <a>
                    <IconButton
                      fontSize="1.8rem"
                      variant="ghost"
                      mr="2"
                      fontWeight="semibold"
                      aria-label="shopping-cart"
                      icon={<GiShoppingCart />}
                    />
                  </a>
                </Link>
              </ListItem>
              <ListItem mt="0 !important">
                <Button
                  colorScheme="main"
                  onClick={() => {
                    dispatch({ type: LOGOUT });
                    router.push("/login");
                  }}
                >
                  Sell
                </Button>
              </ListItem>
            </>
          )}
        </List>
      </Flex>
    </>
  );
};

export default Navbar;
