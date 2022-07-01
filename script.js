const button = document.getElementById("submit");
const tasks = [];

function add(){
    
    const input = document.getElementById("entrada").value;

    const task = {
        name: input,
        clock: new Date().toLocaleTimeString()
    };

    tasks.push(task);

    console.log(tasks)

}

button.addEventListener("click", add);
