
const expander = document.querySelector('#expander');
const expanderIcon = document.querySelector('#expander #icon');

expanderIcon.addEventListener('click', () => expander.classList.toggle('collapsed'));