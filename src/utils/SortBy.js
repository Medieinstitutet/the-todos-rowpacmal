const SortBy = {
  done: (list, state, setState) =>
    [...list].sort((a, b) => {
      switch (state) {
        case 'ascending':
          setState('descending');
          return b.done - a.done;

        case 'descending':
        default:
          setState('ascending');
          return a.done - b.done;
      }
    }),

  name: (list, state, setState) =>
    [...list].sort((a, b) => {
      switch (state) {
        case 'ascending':
          setState('descending');
          return b.task.localeCompare(a.task);

        case 'descending':
        default:
          setState('ascending');
          return a.task.localeCompare(b.task);
      }
    }),
};

export default SortBy;
