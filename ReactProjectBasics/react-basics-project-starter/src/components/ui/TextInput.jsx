import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant={"filled"}
      focusBorderColor="green.400" 
      _focus={{ background: "white" }}
      fontSize={"sm"}
      color="green.400"
      fontStyle={"italic"}
      placeholder="Search now"
      _placeholder={{ color: "gray.600" }} 
      _hover={{ background: "#dbecc9" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
