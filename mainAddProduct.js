import {addTask} from './firebase.js'


const button = document.getElementById('submit-button')
button.addEventListener('click', (e) => clickForm(e))


function clickForm(e) { 
    e.preventDefault()
    console.log('prevent event')
    const title = document.getElementById('taskTitle').value
    const description = document.getElementById('taskDescription').value
    //console.log(title);
    addTask(title, description)
}