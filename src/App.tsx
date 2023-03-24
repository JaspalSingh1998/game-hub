import { Button, Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Grid gridTemplateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' bg="orange">Aside</GridItem>
      </Show>
      <GridItem area='main' bg="red">main</GridItem>
    </Grid>
  )
}

export default App
