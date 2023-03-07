//import React from 'react';
import TodoList from "./components/TodoList";
import { Grommet } from "grommet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoAdd from "./components/TodoAdd";
import SinAccountProofList from "./components/SinAccountProofList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  },
  {
    path: "/todoadd",
    element: <TodoAdd />,
  },
  {
    path: "/sinaccountproofs",
    element: <SinAccountProofList />,
  },
]);

function App() {
  return (
    <Grommet full>
      <RouterProvider router={router} />
    </Grommet>
  );
}

export default App;
