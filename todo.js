function sayHello(todo) {
  console.log(todo);
}
function getTodo() {
  const todos = [
    { name: "todo1", description: "todo1 desc" },
    { name: "todo2", description: "todo2 desc" },
    { name: "todo3", description: "todo3 desc" }
  ];
  return todos;
}
exports.getTodo = getTodo;
exports.sayHello = sayHello;
