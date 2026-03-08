const showOnly = (className) => {
    const children = document.querySelectorAll('.contentpage > *');

    children.forEach(async child => {
        if (child.classList.contains(className)) {
            child.style.display = '';
        } 
        else {
            child.style.display = 'none';
        }
    });
};

showOnly('homepage');

const SwitchPageTabs = document.querySelector('#PageTabsSwitcher');

SwitchPageTabs.addEventListener('change', () => {
  const action = SwitchPageTabs.activeTab.dataset.action;
  
  const actions = {
    home: () => showOnly('homepage'),
    projects: () => showOnly('projectspage'),
    github: () => showOnly('githubpage'),
    aboutme: () => showOnly('aboutmepage')
  };

  actions[action]?.(); 
});