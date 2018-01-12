const knop = document.getElementById('knop');
const vlak = document.querySelector('.vlakje');
const vlak1 = document.querySelector('.vlakje-1');
const vlak2 = document.querySelector('.vlakje-2');


const schuif = () =>  {
    vlak.classList.toggle('vlakje--schuif-uit');
    vlak1.classList.toggle('vlakje--schuif-uit-1');
    vlak2.classList.toggle('vlakje--schuif-uit-2');
}

knop .addEventListener('click', schuif);