import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, PostImage, Meta } from '../../components/post'
  import P from '../../components/paragraph'
  
  const Post = () => (
    <Layout title="Hello World">
      <Container>
        <Title>
        Hello World<Badge>2025</Badge>
        </Title>
        <P>
        Hi there! I’m Yvonne :) This is my first post, and I’ll be sharing more about coding and other topics. I enjoy using Golang to build applications🛠️.
        </P>
        <PostImage src="/images/profile2.jpg" alt="profile" />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/yvonnewu1324">
             Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Post
  export { getServerSideProps } from '../../components/chakra'