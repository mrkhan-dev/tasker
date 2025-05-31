import NavBar from "./components/header/Header";
import Hero from "./components/hero.jsx/Hero";
import TaskBoard from "./components/task/TaskBoard";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBoard />
      </div>
    </>
  );
}

export default App;
