const themeLight = document.getElementById('ThemeLight');
const themeDark = document.getElementById('ThemeDark');
const tabsButtonSkills = document.getElementsByClassName('tabsbuttontwo')
const tabsButtonProjects = document.getElementsByClassName('tabsbuttonone')
const logoDark = document.querySelectorAll('.dark')
const logoLight = document.querySelectorAll('.dark')

// -----------------------------------DARK/LIGHT----------------------------------------------

const removeDarkAddLight = function(){
    const darksElements = document.querySelectorAll('.dark');
    for(let i = 0; i <= darksElements.length; i++ ){
    darksElements[i].classList.remove('dark')
    darksElements[i].classList.add('light')
    }
}
const removeLightAddDark = function(){
const lightsElements = document.querySelectorAll('.light');
for(let i = 0; i <= lightsElements.length; i++ ){
    lightsElements[i].classList.remove('light')
    lightsElements[i].classList.add('dark')
    }
}

themeLight.addEventListener('click', removeDarkAddLight);

themeDark.addEventListener('click', removeLightAddDark);

// -----------------------------------TABS----------------------------------------------------

tabsButtonSkills[0].addEventListener('click', function() {

    const tabsProjects = document.getElementsByClassName('projectsgrid')
    const tabsSkills = document.getElementsByClassName('skillsgrid')
    const tabsButtonSkills = document.getElementsByClassName('tabsbuttontwo')
    const tabsButtonProjects = document.getElementsByClassName('tabsbuttonone')

    tabsProjects[0].classList.add('none')
    tabsSkills[0].classList.remove('none')
})

tabsButtonProjects[0].addEventListener('click', function() {

    const tabsProjects = document.getElementsByClassName('projectsgrid')
    const tabsSkills = document.getElementsByClassName('skillsgrid')

    tabsProjects[0].classList.remove('none')
    tabsSkills[0].classList.add('none')
})

//------------------------------------ALERT----------------------------------------------------

logoDark[4].addEventListener('click', function(){
    prompt('Sou lindo né?')
})

logoLight[3].addEventListener('click', function(){
    prompt('Sou lindo né?')
})
