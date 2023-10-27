import { optionType } from "../types/index";
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'

type componentProps = {
  options: [];
  onSelect: (option: optionType) => void;
};

const Suggestions = ({ options, onSelect }: componentProps): JSX.Element => {
  return (
    <UnorderedList listStyleType="none" bg="white" margin="0">
      {options.map((option: optionType, index: number) => (
        <ListItem px="2" key={option.name + "-" + index}>
          <button onClick={() => onSelect(option)}>{option.name}</button>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Suggestions;
