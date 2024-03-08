class TodoItem {
  constructor(id, task, done = false) {
    this.id = id;
    this.task = task;
    this.done = done;
  }
}

export default TodoItem;
