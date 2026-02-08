document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && sidebar.children.length > 0) {
        const children = sidebar.children;

        for (let child of children) {
            child.style.borderRadius = "8px";
        }
        
        children[0].style.borderRadius = "28px 28px 8px 8px";
        children[children.length - 1].style.borderRadius = "8px 8px 28px 28px";
    }
});

const homebutton = document.querySelector(".homebutton")

homebutton.addEventListener('click', () => {
    showOnly('homepage');
})

const projectsbutton = document.querySelector(".projectsbutton")

projectsbutton.addEventListener('click', () => {
    showOnly('projectspage');
})

const githubbutton = document.querySelector(".githubbutton")

githubbutton.addEventListener('click', () => {
    showOnly('githubpage');
})


const aboutmebutton = document.querySelector(".aboutmebutton")

aboutmebutton.addEventListener('click', () => {
    showOnly('aboutmepage');
})



const showOnly = (className) => {
    const children = document.querySelectorAll('.contentpage > *');

    children.forEach(child => {
        if (child.classList.contains(className)) {
            child.style.display = '';
        } else {
            child.style.display = 'none';
        }
    });
};

showOnly('homepage');