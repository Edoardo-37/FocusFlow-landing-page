// setting scroll-padding-top css property value with the exact navbar height
const navigationHeight = document.querySelector('nav').offsetHeight
document.documentElement.style.setProperty('--navHeight', navigationHeight + 'px');

// hamburger menu
const nav = document.querySelector('nav');
const hamburgerButton = document.querySelector('.hamburger-toggle');

hamburgerButton.addEventListener('click', function(){
    nav.classList.toggle('mobile');
})

// accordion opening
const accordionButtons = document.querySelectorAll('.faq-question');
const accordionContents = document.querySelectorAll('.faq-answer');

accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Seleziono il contenuto e freccia associata al bottone premuto
        const content = button.nextElementSibling;
        const currentArrow = button.querySelector('.arrow')

        // Variabile per verificare se il contenuto sia già aperto
        const isOpen = content.classList.contains('open');

        // Chiude tutti i paragrafi degli altri accordion e rimuove le classi active
        accordionContents.forEach(content => content.classList.remove('open'))
        accordionButtons.forEach(btn => {
            btn.classList.remove('active')
            const otherArrow = btn.querySelector('.arrow')
            if (otherArrow) {
                otherArrow.classList.remove('rotated')
            }
        });

        // Se il contneuto premuto non era aperto, fallo.
        if (!isOpen) {
            content.classList.add('open')
            button.classList.add('active');
            if (currentArrow) {
                currentArrow.classList.add('rotated');
            }
        }
    });
});