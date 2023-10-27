import { ChangeEvent } from "react";
import { optionType } from "../types";
import Suggestions from "./Suggestions";
import Header from "./Header";
import { Input, Box, Button } from '@chakra-ui/react'

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
    <Box display="flex" flexDirection="column" alignItems="center" gap="2" bg="gray" p="5" borderRadius="15">
        <Header />
        <Box>
          <Input placeholder="Cidade" bg="white" type="text" borderRadius={0} value={term} onChange={onInputChange} />
          <Suggestions options={options} onSelect={onOptionSelect} />
        </Box>

        <Button colorScheme="messenger" p="" onClick={onSubmit}>Buscar</Button>
    </Box>
);

export default Search;
