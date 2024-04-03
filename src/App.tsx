import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Lists } from "./components/Lists";
import { Header } from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Stack direction="row" spacing={4} p={4}>
        <Lists />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
