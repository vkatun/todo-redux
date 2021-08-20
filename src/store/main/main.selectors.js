import { createSelector } from 'reselect';

export const getTasks = store => store.main.tasks;
export const getShowTasks = store => store.main.shownTasks;

export const getShownTasks = createSelector(
  getTasks,
  getShowTasks,
  (tasks, string) => {
    switch (string) {
      case 'showAll':
        return tasks;
      case 'onlyCompleted':
        return tasks.filter(task => task.isChecked);
      case 'onlyUncompleted':
        return tasks.filter(task => !task.isChecked);
      default:
        return tasks;
    }
  },
);
