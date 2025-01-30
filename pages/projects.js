import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbChoreBot from "../public/images/projects/chorebot.jpg";
import thumbTicTacToe from "../public/images/projects/tictactoe.png";
const Projects = () => (
  <Layout title="Projects💻">
    <Container>
      <Heading as="h1" mb={4}>
        Projects💻
      </Heading>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ChoreBot"
            thumbnail={thumbChoreBot}
            href="https://github.com/yvonnewu1324/ChoresBot"
            
          >
              A Golang LINE Bot that assigns chores and sends notifications to group. Developed based on golang line bot sdk.</GridItem>     
              <GridItem
              title={
                <>
                  Tic-tac-toe and <br /> RISC-V console
                </>
              }
            thumbnail={thumbTicTacToe}
            href="https://github.com/yvonnewu1324/riscv-console/tree/main/phase_final"
            
          >
                A Tic-tac-toe game build with C, running on RISC-V simulator console.</GridItem>     
        </SimpleGrid>
       
         
         
     
      </Section>

     
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'