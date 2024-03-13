import data from './data.js';

const accordionWrapper = document.querySelector('.accordion');

const createAccordionData = () => {
    accordionWrapper.innerHTML = data.map(dataItem => `
        <div class="accordion_item">
            <div class="accordion_title">
                <h3>${dataItem.question}</h3>
                <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div class="accordion_content">
                <p>${dataItem.answer}</p>
            </div>
        </div>
    `).join(' ');
}

createAccordionData();

const accordionTitles = document.querySelectorAll('.accordion_title');

accordionTitles.forEach((currentItem) => {
    currentItem.addEventListener('click', () => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active');
        } else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');
            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active');
            });
            currentItem.classList.add('active');
        }
    })
});