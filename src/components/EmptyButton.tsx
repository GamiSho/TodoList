import { Button } from "@chakra-ui/react";

type Prop = {
  handleEmpty: () => void;
  todos: Todo[];
  filter: Filter;
};

export const EmptyButton = (prop: Prop) => {
  return (
    <>
      {prop.filter === "removed" && (
        <Button
          size="md"
          colorScheme="red"
          onClick={prop.handleEmpty}
          disabled={prop.todos.filter((todo) => todo.removed).length === 0}
        >
          空にする
        </Button>
      )}
    </>
  );
};
