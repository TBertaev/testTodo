import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

export interface ITask {
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
  olderTasks: IOlderTask[];
  dispatch: Dispatch<any>;
};

export type InterfaceContextType = {
  showNews: boolean;
  setShowNews: Dispatch<SetStateAction<boolean>>;
  showTodayTasks: boolean;
  setShowTodayTasks: Dispatch<SetStateAction<boolean>>;
};

// Render Utils types
export interface IFor {
  each: any;
  render: (item: any) => ReactElement;
}

export interface IIf {
  isTrue: boolean;
  children: ReactNode;
}
