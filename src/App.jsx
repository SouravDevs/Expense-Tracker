import { Outlet } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </>
  );
}

export default App;
