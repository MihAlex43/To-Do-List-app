const form = document.querySelector('#todoForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = document.createElement('li');
    task.textContent = taskText;
    taskList.appendChild(task);

    taskInput.value = '';
    
const apiKey = '447552e233afe974b89afc766aca6ea63503b0b2';

function addTaskToTodoist(task) {
  fetch('https://api.todoist.com/rest/v1/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({ content: task })
  })
  .then(response => {
    if (response.ok) {
      console.log('Задача успешно добавлена в Todoist');
    } else {
      console.error('Ошибка при добавлении задачи в Todoist');
    }
  })
  .catch(error => console.error('Ошибка при отправке задачи в Todoist', error));
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = document.createElement('li');
    task.textContent = taskText;
    taskList.appendChild(task);

    taskInput.value = '';

    addTaskToTodoist(taskText);
  }
});
  }
});