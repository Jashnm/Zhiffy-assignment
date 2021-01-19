import { Avatar, Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";

dayjs.extend(relativeTime);

interface ICarouselItem {
  product: {
    name: string;
    createdAt: string;
    img: string;
    title: string;
    price: number;
  };
}

const MotionFlex = motion.custom(Flex);

const CarouselItem: React.FC<ICarouselItem> = ({
  product: { name, img, createdAt, title, price }
}) => {
  const [like, setLike] = useState(false);
  return (
    <Box my="2rem">
      <MotionFlex
        whileHover={{ scale: 1.05 }}
        justify="center"
        align="center"
        maxW="260px"
        w="100%"
        p="2"
        direction="column"
        borderWidth="1px"
        boxShadow="sm"
        rounded="sm"
        isTruncated
        _hover={{ boxShadow: "2xl", borderWidth: "0" }}
      >
        <Flex justify="space-between" w="100%">
          <Avatar name={name} src="" size="sm" />
          <Box>
            <Text fontWeight="semibold">
              <Link href={`/${name}`}>
                <a>{name}</a>
              </Link>
            </Text>
            <Text fontSize="xs">{dayjs(createdAt).fromNow()}</Text>
          </Box>
          <IconButton
            onClick={() => setLike(!like)}
            aria-label="like"
            fontSize="22px"
            colorScheme="red"
            icon={like ? <IoHeart /> : <IoHeartOutline />}
            variant="ghost"
            p="0"
          />
        </Flex>

        <Box w="100%" p="1">
          <Link href={`/product/${title}`}>
            <a>
              <Image src={img} w="100%" />
            </a>
          </Link>
        </Box>
        <Text fontSize="xl" fontWeight="semibold">
          <Link href={`/product/${title}`}>
            <a>{title}</a>
          </Link>
        </Text>
        <Text>₹ {price}</Text>
      </MotionFlex>
    </Box>
  );
};

export default CarouselItem;
