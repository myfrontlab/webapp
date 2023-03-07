import { useContext } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react-lite";
import { DataTable, Text, Menu } from "grommet";
import Top from "./Top";

const TodoList = () => {
  const todoStore = useContext(TodoStore);
  const { todos, toggleTodo, removeTodo } = todoStore;
  return (
    <>
      <Top />
      <div className="row py-5">
        <DataTable
          columns={[
            {
              property: "id",
              header: <Text>id</Text>,
              primary: true,
            },
            {
              property: "title",
              header: <Text>title</Text>,
              primary: true,
            },
            {
              property: "completed",
              header: "completed",
              render: (datum) => (
                <td>{datum.completed ? "Completed" : "Todo"}</td>
              ),
            },
            {
              property: "actions",
              header: "actions",
              render: (datum) => (
                <Menu
                  label="Menu"
                  items={[
                    {
                      label: "Toggle",
                      onClick: () => {
                        toggleTodo(datum.id!);
                      },
                    },
                    {
                      label: "Remove",
                      onClick: () => {
                        removeTodo(datum.id!);
                      },
                    },
                  ]}
                />
              ),
            },
          ]}
          data={todos}
        />
      </div>
    </>
  );
};

export default observer(TodoList);
