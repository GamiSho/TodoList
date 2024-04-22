import { Box, HStack, Input, Button } from "@chakra-ui/react";

type Prop = {
  text: string;
  handleSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AddTodo = (prop: Prop) => {
  return (
    <Box mb={8}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          prop.handleSubmit();
        }}
      >
        <HStack>
          <Input
            size="sm"
            type="text"
            value={prop.text}
            onChange={prop.handleChange}
          />
          <Button
            colorScheme="green"
            size="sm"
            onSubmit={prop.handleSubmit}
            type="submit"
          >
            追加
          </Button>
        </HStack>
      </form>
    </Box>
  );
};
