const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, { 
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    //todoObject represents the value from the array (all the values)
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {      //first value = value in the list. Check console
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}      // we use querySelectorAll to get a list of all the delete buttons on the page and then, loop through the list
      // using forEach. And for each delete button we added a click event listener

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name, 
    dueDate
  });
  

  inputElement.value = ''; // that is reset/change the text from textbox when we write something and press add.

  renderTodoList();
}