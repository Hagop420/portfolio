
const skillsAnimate = () => {
   const fadeInText = document.querySelector('.skillsAnimate');
   const fadePosition = fadeInText.getBoundingClientRect().top;

   const screenPosition = innerHeight




   if (fadePosition < screenPosition) {
      fadeInText.classList.add('fadeAppear')
   } else {
      console.log(2);
   
   }
}




addEventListener('scroll', skillsAnimate)