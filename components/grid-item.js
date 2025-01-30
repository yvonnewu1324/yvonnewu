import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay, Heading, useColorModeValue} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontWeight="bold">{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)


// export const PostGridItem = ({ children, category = 'posts', id, title, thumbnail}) => (
//     <Box w="100%" bg="gray">
//         <LinkBox as={NextLink} cursor="pointer" href={`/${category}/${id}`} scroll={false}>
//         <Box 
//             w="98%" 
//             display="flex" 
//             justifyContent="center" 
//             alignItems="center"
//       >
//             <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur"/>
//             </Box>
//             <Box ml={4}> {/* Added margin-left */}
//             <LinkOverlay as="div" href={`/${category}/${id}`}>
//             <Heading as="h2" mt={2} fontSize={20}>
//               {title}
//             </Heading>
//             </LinkOverlay>
//             <Text fontSize={14}>
//                 {children}
//             </Text>
//             </Box>
//         </LinkBox>
//     </Box>
// )


export const PostGridItem = ({ children, category = 'posts', id, title, thumbnail }) => {
    const bgColor=useColorModeValue("whiteAlpha.500", "whiteAlpha.200") // Light and dark mode colors
    return (
    <LinkBox
       w="100%"
       bg={bgColor}
       borderRadius="md"
       p={4} 
       as={NextLink} 
       cursor="pointer" 
       href={`/${category}/${id}`} 
       scroll={false} 
       display="flex" 
       alignItems="center"
     >
       <Box 
         w="50%" // Adjust width as needed
         display="flex" 
         justifyContent="center" 
         alignItems="center"
       >
         <Image
           src={thumbnail}
           alt={title}
           className="grid-item-thumbnail"
           placeholder="blur"
           borderRadius="md" 
         />
       </Box>
 
       <Box w="50%" ml={4} >
         <LinkOverlay as="div" href={`/${category}/${id}`}>
           <Heading as="h2" fontSize={20}>
             {title}
           </Heading>
         </LinkOverlay>
         <Text fontSize={14}>
           {children}
         </Text>
       </Box>
     </LinkBox>
 )};



export const GridItemStyle = () => (
    <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)