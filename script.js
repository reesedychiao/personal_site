let footprints = document.getElementById('footprints');
let education = document.getElementById('education');
let skills = document.getElementById('skills');

education.hidden = true;

function openFootprintInfo(){
    if (footprints.style.display === 'none'){
        footprints.style.display = 'flex';
    }else{
        footprints.style.display = 'none';
    }
}

function openEducationInfo(){
    if (education.hidden){
        education.hidden = false;
    }else{
        education.hidden = true;
    }
}

function openSkillsInfo(){
    if (skills.style.display === 'none'){
        skills.style.display = 'flex';
    }else{
        skills.style.display = 'none';
    }
}

document.getElementById('fbutton').onclick = openFootprintInfo;
document.getElementById('ebutton').onclick = openEducationInfo;
document.getElementById('sbutton').onclick = openSkillsInfo;