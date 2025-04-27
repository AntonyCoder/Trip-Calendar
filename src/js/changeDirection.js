'use strict'

//Логика выбора дат туда или туда и обратно

export default function changeDirection(){
    const checkboxDate = document.querySelector('#round-trip');
    const oneDate = document.querySelector('.date-block-oneway');
    const twoDate = document.querySelector('.date-block-twoway');
    
    checkboxDate.addEventListener('click', (e) => {
        if (e.target.checked) {
            oneDate.classList.add('date-block-hidden');
            twoDate.classList.remove('date-block-hidden');
        } else {
            oneDate.classList.remove('date-block-hidden');
            twoDate.classList.add('date-block-hidden');
        }
    });
}

