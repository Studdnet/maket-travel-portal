const buttonClose = document.getElementById('close'),
		buttonLogin = document.getElementById('login'),
		forms = document.querySelector('.forms'); 

buttonClose.addEventListener("click", () => {
	forms.style.opacity = '0'; 
	forms.style.visibility = 'hidden'; 
});

buttonLogin.addEventListener("click", () => {
	forms.style.opacity = '1'; 
	forms.style.visibility = 'visible'; 
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