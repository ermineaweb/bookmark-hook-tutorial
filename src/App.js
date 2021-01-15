import React from "react";
import Users from "./Users";
import users from "./users";
import "./style.css";

function App() {
  return (
    <div className={"app"}>
      <Users users={users} />
      <a href="https://github.com/ermineaweb/bookmark-hook-tutorial">Sources</a>
      <a href="https://romainamichaud.com">My website</a>
    </div>
  );
}

export default App;
