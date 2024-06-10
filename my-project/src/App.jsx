import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import EmployeeTable from "./Component/EmployeeTable";
import CreateInput from "./Component/Createinput";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <CreateInput />
      <EmployeeTable />
    </div>
  );
}

export default App;
