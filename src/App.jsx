import "./App.css";
import BottomTabs from "./components/BottomTabs";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
      <BottomTabs />
    </div>
  );
}

export default App;
