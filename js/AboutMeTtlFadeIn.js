const fadeAbTtl = () => {
   const fadeAbTtl = document.querySelector('.fadeAbTtl');
   const fadePosition = fadeAbTtl.getBoundingClientRect().top;

   const screenPosition = innerHeight




   if (fadePosition < screenPosition) {
      fadeAbTtl.classList.add('fadeAppear')
   } else {
      console.log(2);
   
   }
}


addEventListener('scroll', fadeAbTtl)