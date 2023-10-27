import { ChangeEvent } from "react";
import { optionType } from "../types";
import Suggestions from "./Suggestions";
import Header from "./Header";
import { Input, Flex, Box, Button } from '@chakra-ui/react'

type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
    <Flex direction="column" gap="2" bg="gray" p="5" borderRadius="15">
        <Header />
        <Box gap="2">
        <Input placeholder="Cidade" mb="2" bg="white" type="text" value={term} onChange={onInputChange} />
        <Suggestions options={options} onSelect={onOptionSelect} />

        <Button colorScheme="messenger" p="" onClick={onSubmit}>Buscar</Button>
        </Box>
    </Flex>
);

export default Search;
