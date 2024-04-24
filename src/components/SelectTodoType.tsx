import { Select } from "@chakra-ui/react";

type Prop = {
  handleSort: (filter: Filter) => void;
};

export const SelectTodoType = (prop: Prop) => {
  return (
    <Select
      defaultValue="all"
      onChange={(e) => prop.handleSort(e.target.value as Filter)}
    >
      <option value="all">すべてのタスク</option>
      <option value="checked">完了したタスク</option>
      <option value="unchecked">現在のタスク</option>
      <option value="removed">ゴミ箱</option>
    </Select>
  );
};
