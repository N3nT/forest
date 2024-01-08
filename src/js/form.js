const userName = document.querySelector('.contact-section__form__input--name')
const userEmail = document.querySelector('.contact-section__form__input--email')
const userMessage = document.querySelector('.contact-section__form__textarea')
const privacyCheckbox = document.querySelector('.privacy__checkbox')
const privacyDescription = document.querySelector('.privacy__description')
const formError = document.querySelector('.contact-section__form__error')
const formBtn = document.querySelector('.contact-section__form__btn')

const validForm = () => {
	formError.textContent = 'Uzupełnij wszystkie dane!'
    formError.classList.remove('contact-section__form__error--active')
	if (userName.value === '') {
		userName.classList.add('contact-section__form__input--active')
		formError.classList.add('contact-section__form__error--active')
	}
	if (userEmail.value === '') {
		userEmail.classList.add('contact-section__form__input--active')
		formError.classList.add('contact-section__form__error--active')
	} else {
		if (!userEmail.value.includes('@')) {
			formError.textContent += ' Wpisz poprawny adres email!'
            userEmail.classList.add('contact-section__form__input--active')
			formError.classList.add('contact-section__form__error--active')
		}
	}
	if (userMessage.value === '') {
		userMessage.classList.add('contact-section__form__input--active')
		formError.classList.add('contact-section__form__error--active')
	}
	if (!privacyCheckbox.checked) {
		privacyDescription.classList.add('privacy__description--active')
		formError.classList.add('contact-section__form__error--active')
	}
}

const resetBorder = (object) => {
    console.log(object);
    object.classList.remove('contact-section__form__input--active')
}

formBtn.addEventListener('click', validForm)
userName.addEventListener('focus', function(){
    resetBorder(userName)
})
userEmail.addEventListener('focus', function(){
    resetBorder(userEmail)
})
userMessage.addEventListener('focus', function(){
    resetBorder(userMessage)
})
