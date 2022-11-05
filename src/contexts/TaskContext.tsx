import { createContext, FC, useContext, useReducer } from 'react';
import { taskReducer } from '../utils';
import { ITaskContextProvider, TaskContextType } from '../type';

const initialState = {
  tasks: [],
  dispatch: () => {},
  olderTasks: [],
};
export const TaskContext = createContext<TaskContextType>(initialState);

export const useTasks = () => useContext(TaskContext);

const TaskContextProvider: FC<ITaskContextProvider> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [
    {
      title: 'Visit David',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isChecked: true,
      color: '#FF0000',
    },
    {
      title: 'Visit  Turpal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isChecked: true,
      color: '#366EFF',
    },
    {
      title: 'Visit  Hulk',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isChecked: true,
      color: '#FFEB33',
    },
  ]);

  const olderTasks = [
    {
      title: 'Tomorrow Tasks',
      tasks: [
        {
          title: 'Visit David',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FF0000',
        },
        {
          title: 'Visit  Turpal',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#366EFF',
        },
        {
          title: 'Visit  Hulk',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FFEB33',
        },
      ],
    },
    {
      title: '07/08/22 Tasks',
      tasks: [
        {
          title: 'Visit David',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FF0000',
        },
        {
          title: 'Visit  Turpal',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#366EFF',
        },
        {
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
          title: 'Visit David',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FF0000',
        },
        {
          title: 'Visit  Turpal',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#366EFF',
        },
        {
          title: 'Visit  Hulk',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isChecked: true,
          color: '#FFEB33',
        },
      ],
    },
  ];

  return (
    <TaskContext.Provider value={{ tasks, olderTasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
