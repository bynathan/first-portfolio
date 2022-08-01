const ThemeLight = document.getElementById('ThemeLight');
const ThemeDark = document.getElementById('ThemeDark');
const tabsButtonSkills = document.getElementsByClassName('tabsbuttontwo')
const tabsButtonProjects = document.getElementsByClassName('tabsbuttonone')
const LogoDark = document.querySelectorAll('.dark')
const LogoLight = document.querySelectorAll('.dark')

// -----------------------------------DARK/LIGHT----------------------------------------------

const removeDarkAddLight = function(){
    const DarksElements = document.querySelectorAll('.dark');

    DarksElements[0].classList.remove('dark')
    DarksElements[1].classList.remove('dark')
    DarksElements[2].classList.remove('dark')
    DarksElements[3].classList.remove('dark')
    DarksElements[4].classList.remove('dark')
    DarksElements[5].classList.remove('dark')
    DarksElements[6].classList.remove('dark')
    DarksElements[7].classList.remove('dark')
    DarksElements[8].classList.remove('dark')
    DarksElements[9].classList.remove('dark')
    DarksElements[10].classList.remove('dark')
    DarksElements[11].classList.remove('dark')
    DarksElements[12].classList.remove('dark')
    DarksElements[13].classList.remove('dark')
    DarksElements[14].classList.remove('dark')
    DarksElements[15].classList.remove('dark')
    DarksElements[16].classList.remove('dark')
    DarksElements[17].classList.remove('dark')
    DarksElements[0].classList.add('light')
    DarksElements[1].classList.add('light')
    DarksElements[2].classList.add('light')
    DarksElements[3].classList.add('light')
    DarksElements[4].classList.add('light')
    DarksElements[5].classList.add('light')
    DarksElements[6].classList.add('light')
    DarksElements[7].classList.add('light')
    DarksElements[8].classList.add('light')
    DarksElements[9].classList.add('light')
    DarksElements[10].classList.add('light')
    DarksElements[11].classList.add('light')
    DarksElements[12].classList.add('light')
    DarksElements[13].classList.add('light')
    DarksElements[14].classList.add('light')
    DarksElements[15].classList.add('light')
    DarksElements[16].classList.add('light')
    DarksElements[17].classList.add('light')
}
const removeLightAddDark = function(){
const LightsElements = document.querySelectorAll('.light');
    LightsElements[0].classList.remove('light')
    LightsElements[1].classList.remove('light')
    LightsElements[2].classList.remove('light')
    LightsElements[3].classList.remove('light')
    LightsElements[4].classList.remove('light')
    LightsElements[5].classList.remove('light')
    LightsElements[6].classList.remove('light')
    LightsElements[7].classList.remove('light')
    LightsElements[8].classList.remove('light')
    LightsElements[9].classList.remove('light')
    LightsElements[10].classList.remove('light')
    LightsElements[11].classList.remove('light')
    LightsElements[12].classList.remove('light')
    LightsElements[13].classList.remove('light')
    LightsElements[14].classList.remove('light')
    LightsElements[15].classList.remove('light')
    LightsElements[16].classList.remove('light')
    LightsElements[17].classList.remove('light')
    LightsElements[0].classList.add('dark')
    LightsElements[1].classList.add('dark')
    LightsElements[2].classList.add('dark')
    LightsElements[3].classList.add('dark')
    LightsElements[4].classList.add('dark')
    LightsElements[5].classList.add('dark')
    LightsElements[6].classList.add('dark')
    LightsElements[7].classList.add('dark')
    LightsElements[8].classList.add('dark')
    LightsElements[9].classList.add('dark')
    LightsElements[10].classList.add('dark')
    LightsElements[11].classList.add('dark')
    LightsElements[12].classList.add('dark')
    LightsElements[13].classList.add('dark')
    LightsElements[14].classList.add('dark')
    LightsElements[15].classList.add('dark')
    LightsElements[16].classList.add('dark')
    LightsElements[17].classList.add('dark')
}

ThemeLight.addEventListener('click', removeDarkAddLight);

ThemeDark.addEventListener('click', removeLightAddDark);

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

LogoDark[4].addEventListener('click', function(){
    prompt('Sou lindo né?')
})

LogoLight[3].addEventListener('click', function(){
    prompt('Sou lindo né?')
})