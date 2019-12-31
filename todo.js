const todos = [
  { name: "todo1", description: "todo1 desc" },
  { name: "todo2", description: "todo2 desc" },
  { name: "todo3", description: "todo3 desc" }
];

function sayHello(todo) {
  console.log(todo);
}
function getTodo() {
  return todos;
}
function addTodo() {
  todos.push({ name: "todo4", description: "todo4 desc" })
  return todos;
}
exports.getTodo = getTodo;
exports.addTodo = addTodo;
exports.sayHello = sayHello;
