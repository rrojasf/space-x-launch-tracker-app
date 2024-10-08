import { Box, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface InfoBoxProps {
  label: string;
  text: string | ReactElement;
}

const InfoBox: React.FC<InfoBoxProps> = ({ label, text }) => {
  return (
    <Box>
      <Text as="b">{label}</Text>
      <Text>{text}</Text>
    </Box>
  );
};

export default InfoBox;
