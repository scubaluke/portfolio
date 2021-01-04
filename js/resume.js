const heading = document.querySelector('.resume-heading');
const headingName = document.querySelector('.resume-contact-items h2')

function show() {
    heading.style.backgroundColor = 'var(--clr-accent)';
    
}
show()
// TYPING FUNCTION
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
  }
  

async function typeIt(el) {
    const text = el.textContent;
    let typed = ''
    for(const letter of text) {
        typed += letter;
        el.textContent = typed;
        const { typeMin, typeMax } = el.dataset 
        const timeToWait = getRandomBetween(typeMin, typeMax)
        await wait(timeToWait)
        
    }
    // el.setAttribute('style', " font-family: var(--ff-primary)")
    // el.classList.remove('bitFont')

}

document.querySelectorAll('[data-type]').forEach(typeIt)
