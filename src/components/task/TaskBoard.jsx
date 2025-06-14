import {useState} from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
    setTaskToUpdate(null);
  }

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          onSave={handleAddTask}
          closeModal={closeModal}
        />
      )}
      <div className="container">
        {/*Search Box */}
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/*Task Actions */}
          <TaskActions onAddClick={() => setShowModal(true)} />
          {/*Task List */}
          <TaskList
            onDelete={handleDeleteTask}
            tasks={tasks}
            onEdit={handleEditTask}
          />
        </div>
      </div>
    </section>
  );
}
