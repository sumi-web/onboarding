import { Flex, FormErrorMessage, Input, Text } from "@chakra-ui/react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  labelText?: string;
  inputName: string;
  placeholder?: string;
  responsive?: string;
  type: string;
  error?: string;
}

const CustomInput = ({
  labelText,
  inputName,
  placeholder = "",
  type,
  error,
  responsive = "md",
  size,
  ...rest
}: InputProps) => {
  return (
    <Flex direction={"column"} gap="6px">
      <Text m={0} color={"gray.700"} fontWeight="medium" fontSize={"sm"}>
        {labelText}
      </Text>
      <Input
        m={0}
        _placeholder={{ color: "gray.300", fontSize: "sm" }}
        placeholder={placeholder}
        size={responsive}
        _focusVisible={{
          borderColor: "#664de5",
          boxShadow: `0 0 0 1px #664de5`,
        }}
        {...rest}
      />
      {error && (
        <Text fontSize={"xs"} color="red">
          {error}
        </Text>
      )}
    </Flex>
  );
};

export default CustomInput;
