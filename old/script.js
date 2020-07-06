const wrapper1 = document.querySelector('.first');
const wrapper2 = document.querySelector('.second');

function initForm(wrapper){
    const input = wrapper.querySelector("input");
    const form = wrapper.querySelector("form");
    const ul = wrapper.querySelector("ul");
    function deleteTask (taskEl){
        taskEl.parentNode.removeChild(taskEl);
    }
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const li = document.createElement('li');
        const spanText = document.createElement('span');
        spanText.textContent = input.value;
        const spanDelete = document.createElement('span');
        spanDelete.textContent = ' (-) ';
        li.appendChild(spanText);
        li.appendChild(spanDelete);
        ul.appendChild(li);
        spanDelete.addEventListener('click', function(){
            deleteTask(li);
        })
        input.value = "";
    })
}

initForm(wrapper1);
initForm(wrapper2);