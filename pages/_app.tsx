import type { AppProps /*, AppContext */ } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Header/Navbar";
import { useRouter } from "next/dist/client/router";
import { AuthProvider } from "../context/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  const theme = extendTheme({
    colors: {
      main: {
        100: "#d8e1fa",
        200: "#b0c4f6",
        300: "#89a6f1",
        400: "#6189ed",
        500: "#3a6be8",
        600: "#2e56ba",
        700: "#23408b",
        800: "#172b5d",
        900: "#0c152e"
      }
    },
    fonts: {
      body: "'Poppins', sans-serif"
    }
  });

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        {!authRoute && <Navbar />}
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
