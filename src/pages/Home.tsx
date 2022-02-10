import React, { useState } from "react";
import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home2() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) {
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    setTasks((state) => [...state, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleRemoveTask(id: number) {
    setTasks((state) => state.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
