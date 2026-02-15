console.log('third file');

//get the parent
const thirdList = document.getElementById('third-list');

// create the child
const li = document.createElement('li');
li.innerText = 'brand new list item';

thirdList.appendChild(li);