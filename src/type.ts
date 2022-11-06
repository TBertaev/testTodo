import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

export interface ITask {
  id: number;
  title: string;
  text: string;
  isChecked: boolean;
  color: string;
}

export interface IOlderTask {
  title: string;
  tasks: ITask[];
}

export interface ITaskContextProvider {
  children: ReactNode;
}

export interface ITodoOlderTasks extends IOlderTask {
  type: 'tomorrow' | 'other';
}
export interface IInterfaceContextProvider {
  children: ReactNode;
}

export type TaskContextType = {
  tasks: ITask[];
  otherTasks: IOlderTask[];
  changeTodoDone: (id: number) => void;
};

export type InterfaceContextType = {
  showNews: boolean;
  setShowNews: Dispatch<SetStateAction<boolean>>;
  showTodayTasks: boolean;
  setShowTodayTasks: Dispatch<SetStateAction<boolean>>;
};

export interface ITodoItem extends ITask {
  changeTodoDone: (id: number) => void;
}
// Render Utils types
export interface IFor {
  each: any;
  render: (item: any) => ReactElement;
}

export interface IIf {
  isTrue: boolean;
  children: ReactNode;
}
