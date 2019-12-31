let todos = [
  { id: "1", name: "todo1", description: "todo1 desc" },
  { id: "2", name: "todo2", description: "todo2 desc" },
  { id: "3", name: "todo3", description: "todo3 desc" }
];

function sayHello(todo) {
  console.log(todo);
}
function getTodo() {
  return todos;
}
function addTodo() {
  todos.push({id:"4", name: "todo4", description: "todo4 desc" });
  return todos;
}
function deleteTodo(id) {
  todos = todos.filter(todo => {
    return todo.id != id;
  });
  return todos;
}

exports.getTodo = getTodo;
exports.addTodo = addTodo;
exports.deleteTodo = deleteTodo;
exports.sayHello = sayHello;
