const footerYear = document.querySelector('.footer-year')
const mobileNavButton = document.querySelector('.nav__mobile-button')
const mobileNav = document.querySelector('.nav__mobile')
const mobileNavItems = document.querySelectorAll('.nav__mobile-item')
const body = document.querySelector('body')

const mobileNavHandler = () => {
	body.classList.add('nav-open')
	mobileNav.classList.add('nav__mobile--active')
	mobileNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav__mobile--active')
			body.classList.remove('nav-open')
		})
	})
}

const setYear = (params) => {
	const date = new Date()
	footerYear.textContent = date.getFullYear()
}

document.addEventListener('DOMContentLoaded', setYear)
mobileNavButton.addEventListener('click', mobileNavHandler)
