import Image from "next/image";
import React from "react";
import analitics from "../../../public/analitics.jpeg";
import { Flex } from "antd";

const Analitics = () => {
  return (
    <Flex justify="center" align="center">
      <Image src={analitics.src} width={1500} height={1000} alt="Аналитика" />
    </Flex>
  );
};

export default Analitics;
