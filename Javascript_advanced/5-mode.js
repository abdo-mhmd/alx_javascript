#!/usr/bin/node
const body = document.querySelector('body');

function changeMode(size, weight, transform, background, color) {
    return () => {
        const body = document.body;
        body.style.background = background;
        body.style.color = color;
        body.style.textTransform = transform;
        body.style.fontSize = size;
        body.style.fontWeight = weight;
    };
}

function main() {
    const spookyMode = changeMode('9', 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode('12', 'bold', 'capitalize', 'black', 'white');
    const screenMode = changeMode('12', 'normal', 'lowercase', 'white', 'black');
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberrton!';
    body.appendChild(paragraph);

    const spooky = document.createElement('button');
    spooky.textContent = 'Spooky';
    spooky.id ='spooky';
    body.appendChild(spooky);

    const dark = document.createElement('button');
    dark.textContent = 'Dark Mode';
    dark.id = 'dark';
    body.appendChild(dark);

    const screen = document.createElement('button');
    screen.textContent = 'Screen Mode';
    screen.id ='screen';
    body.appendChild(screen);

    spooky.addEventListener('click', spookyMode);
    dark.addEventListener('click', darkMode);
    screen.addEventListener('click', screenMode);
}

main();
