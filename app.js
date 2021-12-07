const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('#add-task');
const input = document.querySelector('#task-name')
const taskList = document.querySelector('#task-list');

for (let btn of removeButtons) {
	btn.addEventListener('click',function(e){
		e.target.parentElement.remove();
	});
}

form.addEventListener('submit',function(e){
	e.preventDefault();
	console.log(input.value);
	const newTask = document.createElement('li');
	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'Done';
	removeBtn.addEventListener('click', function(e){
		e.target.parentElement.remove();
	})
	newTask.innerText = input.value;
	newTask.appendChild(removeBtn);
	input.value = '';
	taskList.appendChild(newTask);



})