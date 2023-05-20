import React from 'react';
import { TaskProvider } from './task';

const AppProvider = ({ children }: any) => {
  return <TaskProvider>{children}</TaskProvider>;
};

export default AppProvider;
