import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue, Image
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { MdOutlineEmail } from "react-icons/md";

const Home = () => (
  <Layout>
    <Container>
        <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
                        Hiii, I&apos;m a driven developer 👩🏻‍💻 passionate  about new tech and creative problem-solving.
        </Box>

        <Box display={{md:"flex"}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Yu-Jie(Yvonne) Wu🦄
                </Heading>
                <p>
                    Developer / MSCS Student / Gopher / Meme Lover
                </p>
            </Box>
            
            <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                <Image
                borderColor="whiteAlapha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/usagi.gif"
                alt="Meme"
                />
            </Box>
            <Box flexShrink={0} mt={{base:4, md: 0}} ml={{md: 6}} align="center">
                <Image borderColor="whiteAlapha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile.jpg" alt="Profile Image"/>
            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
            About
            </Heading>
            <Paragraph>
                I am a Computer Science master student at University of California, Davis.
            </Paragraph>
            <Heading as="h3" variant="section-title">
            Research
            </Heading>
            <Paragraph>
            Working with Prof. Anshuman Chhabra and Prof. Magdalena Wojcieszak on Generative AI to analyze polarization in political unstructured natural language.
            </Paragraph>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2020</BioYear>Software intern @ Startup WeGrains 
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>Backend intern @ Startup Aptan 
            </BioSection>
            <BioSection>
                <BioYear>2021-2023</BioYear>Software Engineering Intern @ LINE TAIWAN LIMITED
            </BioSection>
            <BioSection>
                <BioYear>2023</BioYear>Received Bachelor&apos;s degree in Management Information Systems from National Chengchi University
            </BioSection>
            <BioSection>
                <BioYear>2023 to present</BioYear> Pursuing a Computer Science Master&apos;s degree at UC Davis
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I ♥
            </Heading>
            <Paragraph>
            Music🎧, 3D modeling, Keyboards⌨️, Skateboarding🛹, Web Development, Cloud Computing, Boba🧋
            </Paragraph>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            Contact
            </Heading>
            <List>
            <ListItem>
                <Link href="https://github.com/yvonnewu1324" target="_blank">
                <Button
                    variant="ghost"
                    colorScheme="blue"
                    leftIcon={<IoLogoGithub />}
                >
                    @yvonnewu1324
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://linkedin.com/in/yu-jie-wu-a07823172" target="_blank">
                <Button
                    variant="ghost"
                    colorScheme="blue"
                    leftIcon={<IoLogoLinkedin />}
                >
                    @yu-jie-wu
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="mailto:yvonnewu1324@gmail.com" target="_blank">
                <Button
                    variant="ghost"
                    colorScheme="blue"
                    leftIcon={< MdOutlineEmail />}
                >
                    yvonnewu1324@gmail.com
                </Button>
                </Link>
            </ListItem>
            
            </List>
        </Section>


    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'