import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from '../components/layouts/article';
import Section from "../components/section";
import { PostGridItem } from "../components/grid-item";


import thumbFirst from "../public/images/posts/helloworld.png";
const Posts = () => {
    return (
        <Layout title="Posts📝">
        <Container>
            <Heading as="h1" mb={4}>
                Posts📝
            </Heading>
            <SimpleGrid columns={[1]} gap={6}>
            <Section>
                <PostGridItem  id="first"  title="Hello World!" thumbnail={thumbFirst}>
                    My Fisrt post!
                </PostGridItem>
            </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Posts