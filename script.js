const titleEl = document.querySelector('.task__title');
const dateEl = document.querySelector('.task__date');
const taskButton = document.querySelector('.task__button');
const tasksEl = document.querySelector('.tasks');

const addToTasksEl = (title, date, tasksEl) =>{
    const newTaskEl = document.createElement('div');
    newTaskEl.classList.add('tasks__el')
    newTaskEl.innerHTML = `<p> ${title}</p>
        <span>${date}</span>
        <span class="tasks__delete">delete</span>`;
    tasksEl.appendChild(newTaskEl);
}
taskButton.addEventListener('click', (event) => {
    event.preventDefault();
    addToTasksEl(titleEl.value, dateEl.value, tasksEl);
})

tasksEl.addEventListener('click', (event) => {
    if(event.target.classList.contains('tasks__delete')){
        tasksEl.removeChild(event.target.parentNode)
    }
})