const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

////

const p = document.createElement('p'); 
//p.classList.add('para');
p.style.color = 'red';
p.textContent = "Hey, I'm red!";

container.appendChild(p);

const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue h3!"

container.appendChild(blueH3);

///new div step 3

const div = document.createElement('div');
div.setAttribute('style', 'color: blue; background: pink; border: black;');
div.style.border = "thick solid black";
//div.textContent = "attempt 1";

//container.appendChild(div);

const divH1 = document.createElement('h1');
divH1.style.color = 'blue';
divH1.textContent = "I'm in a div";

div.appendChild(divH1);

const p1 = document.createElement('p'); 
p1.style.color = 'red';
p1.textContent = "Me, too!";

div.appendChild(p1);

container.appendChild(div);

//link for exercise https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
