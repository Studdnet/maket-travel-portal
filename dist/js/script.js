const buttonsClose = document.querySelectorAll('.forms__close'),
		buttonLogin = document.getElementById('login'),
		forms = document.querySelector('.forms'),
		registerLink = document.getElementById('register'),
		loginForm = document.querySelector('.forms__login'),
		registrationForm = document.querySelector('.forms__registration');


buttonsClose.forEach(button => button.addEventListener("click", function() {
	forms.style.opacity = '0'; 
	forms.style.visibility = 'hidden'; 
	loginForm.style.opacity = '1'; 
	loginForm.style.visibility = 'visible';
	loginForm.style.display = 'block'; 
	registrationForm.style.opacity = '0'; 
	registrationForm.style.visibility = 'hidden'; 
}));


buttonLogin.addEventListener("click", () => {
	forms.style.opacity = '1'; 
	forms.style.visibility = 'visible'; 
	loginForm.classList.add('_active'); 
});

registerLink.addEventListener("click", () => {
	loginForm.style.opacity = '0'; 
	loginForm.style.display = 'none'; 
	loginForm.style.visibility = 'hidden'; 
	loginForm.classList.remove('_active'); 

	registrationForm.style.opacity = '1'; 
	registrationForm.style.visibility = 'visible'; 
	registrationForm.classList.add('_active'); 
});


let scrollUp = () => {
   let scrollProgress = document.querySelector('.arrowUp');
   let pos = document.documentElement.scrollTop; 

   if (pos > 100) {
      scrollProgress.style.opacity = '1'; 
      scrollProgress.style.visibility = 'visible'; 
   } else {
      scrollProgress.style.opacity = '0'; 
		scrollProgress.style.visibility = 'hidden'; 
   }

	scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0; 
   });

};

window.onscroll = scrollUp;