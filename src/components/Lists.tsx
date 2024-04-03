import { useState } from "react";
import {
  Button,
  Heading,
  Input,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { useAnime } from "../contexts/animeContext";

export type Anime = string[];

export function Lists() {
  const [value, setValue] = useState("");
  const { animes, addAnime } = useAnime();

  return (
    <Stack gap={8}>
      <Heading>ANIMES FAVORITOS</Heading>
      <UnorderedList>
        {animes.map((anime) => (
          <ListItem>{anime}</ListItem>
        ))}
      </UnorderedList>
      <Stack>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button colorScheme="blue" onClick={() => addAnime(value)}>
          Adicionar
        </Button>
      </Stack>
    </Stack>
  );
}
