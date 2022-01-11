
var todos = ["buy new turtle"];
var input = prompt("what would you like to do?");
while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log("************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("************");
    }
    else if (input === 'new') {
        const newTodo = prompt('OK, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list'`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK, enter an index to delete'));
        //const index = parseInt(indexStr);
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    //ask again for new input
    input = prompt("what would you like to do?");
}
console.log("ok, you quit the app");