const form = document.querySelector('.feedback-form')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const button = document.querySelector('button')

const localStorageKey = 'feedback-form-state'

let formData = {
    email: '',
    message: ''
}

form.addEventListener('input', (evt) => {
    formData[evt.target.name] = evt.target.value.trim()
    localStorage.setItem(localStorageKey, JSON.stringify(formData)) // makes it string for storage

})

let savedData = localStorage.getItem(localStorageKey)

if (savedData) {
    formData = JSON.parse(savedData); // turn it back so js is readable
    input.value = formData.email;
    textarea.value = formData.message;
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if(formData.email === '' || formData.message === '') {
        alert('Fill please all fields')
    } else {
        console.log(formData); 
        localStorage.removeItem(localStorageKey); 
        form.reset(); 
        formData = { email: '', message: '' }; 
    }
})