// setting scroll-padding-top property value with the exact the navbar height
const navigationHeight = document.querySelector('nav').offsetHeight
document.documentElement.style.setProperty('--navHeight', navigationHeight + 'px');

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