class TodoItem {
  constructor(id, task, date, done = false) {
    this.id = id;
    this.task = task;
    this.date = date;
    this.done = done;
  }
}

export default TodoItem;
