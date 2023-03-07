import { useContext, useState } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react-lite";
import Top from "./Top";
import { Button, FormField, Paragraph, TextInput } from "grommet";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const todoStore = useContext(TodoStore);
  const { addTodo, info } = todoStore;

  return (
    <>
      <Top />
      <Paragraph>Info total: {info.total}</Paragraph>
      <Paragraph>Info completed: {info.completed}</Paragraph>
      <Paragraph>Info notCompleted: {info.notCompleted}</Paragraph>
      <FormField label="Field label">
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="type here"
        />
      </FormField>
      <Button
        primary
        label="Create"
        onClick={(_) => {
          addTodo({
            title: title,
            completed: false,
          });
          setTitle("");
        }}
      />
    </>
  );
};

export default observer(AddTodo);
