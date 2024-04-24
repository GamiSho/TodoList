import { Box, HStack, Input, Button } from "@chakra-ui/react";

type Prop = {
  text: string;
  filter: Filter;
  handleSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AddTodo = (prop: Prop) => {
  return (
    <>
      {prop.filter !== "removed" && prop.filter !== "checked" && (
        <Box mb={8}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              prop.handleSubmit();
            }}
          >
            <HStack>
              <Input
                size="md"
                type="text"
                value={prop.text}
                onChange={prop.handleChange}
              />
              <Button
                colorScheme="green"
                size="md"
                onSubmit={prop.handleSubmit}
                type="submit"
              >
                追加
              </Button>
            </HStack>
          </form>
        </Box>
      )}
    </>
  );
};
