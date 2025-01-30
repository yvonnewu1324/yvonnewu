import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 28px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 28px;
    padding: 10px;

  > img {
    transition: 200ms ease;
  }

  &:hover > img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const footPrintImg = `/images/skateboard${useColorModeValue("","-dark")}.png`
    return (
        <Link href="/" scroll={false}>
            <LogoBox >
                <Image src={footPrintImg} width={20} height={20} alt="logo" />
                <Text color={useColorModeValue("blue.500","whiteAlpha.900")} fontFamily="'Varela Round'"  fontWeight="bold" ml={1}>
                    Yvonne Wu🧋
                </Text>
            </LogoBox>
        </Link>
    )
}
export default Logo