import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";

interface IInputProps {
  type: string;
  fName: string;
  error?: string | undefined | null;
  register: any;
}

const InputField: React.FC<IInputProps> = ({
  type,
  fName,
  error,
  register
}) => {
  return (
    <div>
      <FormControl isInvalid={!!error} isRequired p="4">
        {type === "file" && (
          <FormLabel textTransform="capitalize">Profile Image</FormLabel>
        )}
        <Input
          type={type}
          name={fName}
          placeholder={fName}
          ref={register}
          id={fName}
          _placeholder={{ textTransform: "capitalize" }}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </div>
  );
};

export default InputField;
