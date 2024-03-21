import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='h-screen bg-gray-400 flex flex-col'>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
