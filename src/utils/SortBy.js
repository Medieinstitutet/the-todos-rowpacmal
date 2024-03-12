const SortBy = {
  done: {
    switch: (list, state, setState) =>
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

    noSwitch: (list, state) =>
      [...list].sort((a, b) => {
        switch (state) {
          case 'descending':
            return b.done - a.done;

          case 'ascending':
          default:
            return a.done - b.done;
        }
      }),
  },

  name: {
    switch: (list, state, setState) =>
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

    noSwitch: (list, state) =>
      [...list].sort((a, b) => {
        switch (state) {
          case 'descending':
            return b.task.localeCompare(a.task);

          case 'ascending':
          default:
            return a.task.localeCompare(b.task);
        }
      }),
  },

  epoch: (list) => [...list].sort((a, b) => b.date.epoch - a.date.epoch),
};

export default SortBy;
