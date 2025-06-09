const updateBtn = document.querySelector('#updateBtn');
const dateToday = document.querySelector('#dateToday');
const body = document.querySelector('#body')
const themeBtn = document.querySelector('#theme-btn');
const completeBtn = document.querySelectorAll('.complete-btn');
const aside = document.querySelector('#aside')
const clearBtn = document.querySelector('#clearBtn');


const randomColorArr = ['#9c88ff', '#9c88ff', '#4cd137', '#487eb0', '#ff7979', '#7ed6df', '#30336b', '#fd79a8', '#00b894', '#c56cf0'];

// default background color when page loads
document.addEventListener('DOMContentLoaded', () => {
    body.style.backgroundColor = "#8fa1b7"
});


//Board update btn 
if (updateBtn) {
    let count = 10;
    updateBtn.addEventListener('click', () => {
        alert('Board updated successfully.')
        count++;
        updateBtn.children[1].textContent = count;
        console.log(count);
    });
};

function randomColorCng() {
    let randomColor = randomColorArr[Math.floor(Math.random() * randomColorArr.length)];
    body.style.backgroundColor = randomColor;

};
randomColorCng();

themeBtn.addEventListener('click', randomColorCng);


function date() {
    const today = new Date();

    // Format: DD-MM-YYYY
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    dateToday.textContent = formattedDate;
};
date();


completeBtn.forEach(button => {
    button.addEventListener('click', () => {
        alert('Board updated successfully.');
        button.textContent = 'Completed';
        button.classList.remove('bg-gradient-to-r');
        button.classList.add('bg-gray-400');
        button.style.color = '#000';

        const p = document.createElement('p');
        p.textContent = 'You just completed a task !';
        p.classList.add('p-4', 'pt-2','task-p');
        aside.appendChild(p);
    });
});

clearBtn.addEventListener('click', () => {
    const taskPs = aside.querySelectorAll('p.task-p');
    taskPs.forEach(p => p.parentNode.removeChild(p));
});
