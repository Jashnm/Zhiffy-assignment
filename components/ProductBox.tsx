import { Box, Icon, Image } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Product } from "../types";
import { StarIcon } from "@chakra-ui/icons";

interface IProductProps {
  product: Product;
}

const ProductBox: React.FC<IProductProps> = ({
  product: { imageUrl, title, price, rating, reviewCount }
}) => {
  return (
    <Box
      maxW="300px"
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.100"
      w="100%"
      my="4"
      mr="3"
      _hover={{
        boxShadow: "xl",
        transition: "all 0.2s ease-in-out"
      }}
    >
      <Image src={imageUrl} width="300px" height="300px" />
      <Box p="5">
        <Box as="h3" mt="1" isTruncated cursor="pointer">
          {title}
        </Box>
        <Box color="gray.600" fontSize="sm" ml="2" mt="1" mb="2">
          ₹ {new Intl.NumberFormat("en-IN").format(+price)}
        </Box>
        <Box d="flex" alignItems="baseline">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <>
                {rating > i + 0.5 ? (
                  <Icon
                    as={BsStarFill}
                    fontSize="sm"
                    key={i}
                    color={i < rating ? "yellow.500" : "gray.300"}
                  />
                ) : (
                  <Icon
                    as={BsStarHalf}
                    fontSize="sm"
                    key={i}
                    color="yellow.500"
                  />
                )}
              </>
            ))}
          <Box as="span" pl="2" fontSize="" color="gray.500">
            {reviewCount}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductBox;
