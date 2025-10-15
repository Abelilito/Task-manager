import "./App.css";
import { LegalNotice } from "./components/LegalNotice/LegalNotice";
import { TaskManager } from "./components/TaskManager/TaskManager";

function App() {
  return (
    <>
      <TaskManager />
      <LegalNotice />
    </>
  );
}

export default App;
