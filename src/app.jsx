// import { useState } from "preact/hooks";

import { UserFrom } from "./Components/UserForm";
import { UserTable } from "./Components/UserTable";

import "./app.css";

export function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex flex-col">
        <UserFrom />
        <UserTable />
      </div>
    </>
  );
}
