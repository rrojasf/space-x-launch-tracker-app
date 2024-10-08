import React from "react";
import {
  Box,
  Container,
  Flex,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Flex direction="column" minHeight="100vh" bg={bgColor}>
      <Header />
      <Box flex={1}>
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch">
            {children}
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
};
