export type RootStackParamList = {
  Home: undefined;
  Schedule: undefined;
  TaskDetails: {
    taskId: string;
    taskIndex: number;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
