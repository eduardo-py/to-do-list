function addNewThingToDo(){
    const addingToDoThing = document.querySelector(".inputThingToDo").value;
    const toDoThing = document.createElement("p");
    document.body.appendChild(toDoThing);
    toDoThing.innerHTML=addingToDoThing;
}