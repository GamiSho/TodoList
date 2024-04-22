import {
  HStack,
  Card,
  CardBody,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";

type Props = {
  filterTodos: Todo[];
  setTodos: (value: React.SetStateAction<Todo[]>) => void;
};

export const TodoList = (prop: Props) => {
  const handleTodo = <K extends keyof Todo, V extends Todo[K]>(
    id: number,
    key: K,
    value: V
  ) => {
    prop.setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, [key]: value };
        } else {
          return todo;
        }
      });

      return newTodos;
    });
  };

  return (
    <div>
      {prop.filterTodos.map((todo) => {
        return (
          <Card mb={2}>
            <CardBody key={todo.id}>
              <HStack spacing="4px">
                <Checkbox
                  colorScheme="green"
                  checked={todo.checked}
                  onChange={() => handleTodo(todo.id, "checked", !todo.checked)}
                />
                <Input
                  type="text"
                  size="sm"
                  disabled={todo.checked || todo.removed}
                  value={todo.value}
                  onChange={(e) => handleTodo(todo.id, "value", e.target.value)}
                />
                <Button
                  size="sm"
                  colorScheme={todo.removed ? "green" : "red"}
                  onClick={() => handleTodo(todo.id, "removed", !todo.removed)}
                >
                  {todo.removed ? "復元" : "削除"}
                </Button>
              </HStack>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};
