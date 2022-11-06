import { createContext, FC, useContext, useState } from 'react';
import { IOlderTask, ITask, ITaskContextProvider, TaskContextType } from '../type';

const initialState = {
  tasks: [],
  changeTodoDone: () => {},
  otherTasks: [],
};
export const TaskContext = createContext<TaskContextType>(initialState);

export const useTasks = () => useContext(TaskContext);

const TaskContextProvider: FC<ITaskContextProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: 'Visit David',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isChecked: false,
      color: '#FF0000',
    },
    {
      id: 2,
      title: 'Visit  Turpal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isChecked: false,
      color: '#366EFF',
    },
    {
      id: 3,
      title: 'Visit  Hulk',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isChecked: false,
      color: '#FFEB33',
    },
  ]);

  const [otherTasks, setOlderTasks] = useState<IOlderTask[]>([
    {
      title: 'Tomorrow Tasks',
      tasks: [
        {
          id: 1,
          title: 'Visit David',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: false,
          color: '#FF0000',
        },
        {
          id: 2,
          title: 'Visit  Turpal',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: false,
          color: '#366EFF',
        },
        {
          id: 3,
          title: 'Visit  Hulk',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: false,
          color: '#FFEB33',
        },
      ],
    },
    {
      title: '07/08/22 Tasks',
      tasks: [
        {
          id: 1,
          title: 'Visit David',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FF0000',
        },
        {
          id: 2,
          title: 'Visit  Turpal',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#366EFF',
        },
        {
          id: 3,
          title: 'Visit  Hulk',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FFEB33',
        },
      ],
    },
    {
      title: '07/08/22  Tasks',
      tasks: [
        {
          id: 1,
          title: 'Visit David',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FF0000',
        },
        {
          id: 2,
          title: 'Visit  Turpal',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#366EFF',
        },
        {
          id: 3,
          title: 'Visit  Hulk',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FFEB33',
        },
      ],
    },
  ]);

  const changeTodoDone = (id: number) => {
    const changedTasks = tasks.map((task: ITask) => {
      if (task.id === id) task.isChecked = !task.isChecked;
      return task;
    });
    setTasks(changedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, otherTasks, changeTodoDone }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
