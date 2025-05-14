document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert('All fields are required.');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Form submitted successfully!');
  this.reset();
});


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Task cannot be empty.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
