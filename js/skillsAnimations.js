
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

const skillsColAnimate = () => {
   const fadeInCol = document.querySelectorAll('.col');
   fadeInCol.forEach(fadedCols => {
      
      const fadePosition = fadedCols.getBoundingClientRect().top;
     
   
      const screenPosition = innerHeight
   
   
   
   
      if (fadePosition < screenPosition) {
         fadedCols.classList.add('fadeAppear')
      } else {
         console.log(2);
      
      }
   })
}






addEventListener('scroll', skillsAnimate)

addEventListener('scroll', skillsColAnimate)