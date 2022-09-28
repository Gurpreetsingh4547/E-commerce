/**
 * History back function without reload
 */

export const HistoryBack = (event) => {
  event.preventDefault();
  window.history.back();
};
