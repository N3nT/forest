const footerYear = document.querySelector('.footer-year')
const mobileNavButton = document.querySelector('.nav__mobile-button')
const mobileNav = document.querySelector('.nav__mobile')
const mobileNavItems = document.querySelectorAll('.nav__mobile-item')
const body = document.querySelector('body')

const mobileNavHandler = () => {
	body.classList.toggle('nav-open')
	mobileNav.classList.toggle('nav__mobile--active')
	mobileNavButton.classList.toggle('nav__mobile-button--active')
	if (mobileNavButton.classList == 'nav__mobile-button') {
		mobileNavButton.innerHTML = '<i class="fa-solid fa-bars"></i>'
	} else {
		mobileNavButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
	}
	mobileNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav__mobile--active')
			mobileNavButton.classList.remove('nav__mobile-button--active')
			mobileNavButton.innerHTML = '<i class="fa-solid fa-bars"></i>'
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
