import { useState, useEffect } from "react";
import localforage from "localforage";
import { isTodos } from "./lib/isTodo";
import { Container, Box, Button, HStack } from "@chakra-ui/react";
import { SelectTodoType } from "./components/SelectTodoType";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { EmptyButton } from "./components/EmptyButton";

export const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const handleSubmit = () => {
    if (!text) return;

    const newTodo: Todo = {
      id: new Date().getTime(),
      value: text,
      checked: false,
      removed: false,
    };

    setTodos((todos) => [newTodo, ...todos]);
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSort = (filter: Filter) => {
    setFilter(filter);
  };

  const handleEmpty = () => {
    setTodos((todos) => todos.filter((todo) => !todo.removed));
  };

  const filterTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return !todo.removed;
      case "checked":
        return todo.checked && !todo.removed;
      case "unchecked":
        return !todo.checked && !todo.removed;
      case "removed":
        return todo.removed;
      default:
        return todo;
    }
  });

  useEffect(() => {
    localforage
      .getItem("todo-20200101")
      .then((values) => isTodos(values) && setTodos(values));
  }, []);

  useEffect(() => {
    localforage.setItem("todo-20200101", todos);
  }, [todos]);

  return (
    <Container maxW="md" mt={8}>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" p={2}>
        <HStack mb={2}>
          <SelectTodoType handleSort={handleSort} />
          <EmptyButton
            todos={todos}
            filter={filter}
            handleEmpty={handleEmpty}
          />
        </HStack>
        <AddTodo
          text={text}
          filter={filter}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TodoList filterTodos={filterTodos} setTodos={setTodos} />
      </Box>
    </Container>
  );
};
