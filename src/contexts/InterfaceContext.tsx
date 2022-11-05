import { createContext, FC, useContext, useState } from 'react';
import { IInterfaceContextProvider, InterfaceContextType } from '../type';

const initialState = {
  showNews: true,
  showTodayTasks: true,
  setShowNews: () => {},
  setShowTodayTasks: () => {},
};

export const InterfaceContext = createContext<InterfaceContextType>(initialState);

export const useInterfaceContext = () => useContext(InterfaceContext);

const InterfaceContextProvider: FC<IInterfaceContextProvider> = ({ children }) => {
  const [showNews, setShowNews] = useState<boolean>(true);
  const [showTodayTasks, setShowTodayTasks] = useState<boolean>(true);

  return (
    <InterfaceContext.Provider
      value={{ showNews, setShowNews, showTodayTasks, setShowTodayTasks }}
    >
      {children}
    </InterfaceContext.Provider>
  );
};

export default InterfaceContextProvider;
