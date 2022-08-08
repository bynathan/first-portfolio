// -----------------------------------DARK/LIGHT----------------------------------------------

const themeLight = document.getElementById('ThemeLight');
const themeDark = document.getElementById('ThemeDark');

const removeDarkAddLight = function(){
    const darksElements = document.querySelectorAll('.dark');
    darksElements.forEach((i) => {
    i.classList.remove('dark');
    i.classList.add('light');
    })
};
const removeLightAddDark = function(){
const lightsElements = document.querySelectorAll('.light');
lightsElements.forEach((i) => {
    i.classList.remove('light');
    i.classList.add('dark');
    })
};

themeLight.addEventListener('click', removeDarkAddLight);
themeDark.addEventListener('click', removeLightAddDark);

// -----------------------------------TABS----------------------------------------------------

const tabsButtonSkills = document.getElementsByClassName('tabsbuttontwo');
const tabsButtonProjects = document.getElementsByClassName('tabsbuttonone');

const noneAddAndRemoveProject = function() {

    const tabsProjects = document.getElementsByClassName('projectsgrid');
    const tabsSkills = document.getElementsByClassName('skillsgrid');

    tabsProjects[0].classList.remove('none');
    tabsSkills[0].classList.add('none');
};
const noneAddAndRemoveSkills = function() {

    const tabsProjects = document.getElementsByClassName('projectsgrid');
    const tabsSkills = document.getElementsByClassName('skillsgrid');

    tabsProjects[0].classList.add('none');
    tabsSkills[0].classList.remove('none');
};

tabsButtonProjects[0].addEventListener('click', noneAddAndRemoveProject);
tabsButtonSkills[0].addEventListener('click', noneAddAndRemoveSkills);

// -----------------------------------TABSSELECT----------------------------------------------

const buttonProjects = document.getElementsByClassName('tabsbuttonone')[0];
const buttonSkills = document.getElementsByClassName('tabsbuttontwo')[0];

const addAndRemoveSelectProjects = function(){
    buttonSkills.classList.remove('select')
    buttonProjects.classList.add('select')
};

const addAndRemoveSelectSkills = function(){
    buttonProjects.classList.remove('select')
    buttonSkills.classList.add('select')
};

buttonProjects.addEventListener('click', addAndRemoveSelectProjects);
buttonSkills.addEventListener('click', addAndRemoveSelectSkills);
