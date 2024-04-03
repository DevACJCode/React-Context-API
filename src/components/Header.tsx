import { Center, Text } from "@chakra-ui/react";
import { useAnime } from "../contexts/animeContext";

export function Header() {
  const { animes } = useAnime();

  return (
    <Center bg="gray.900" height="80px">
      <Text>Quantidade de animes: {animes.length} </Text>
    </Center>
  );
}
