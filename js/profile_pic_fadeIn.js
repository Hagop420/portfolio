const fadeAffectProfilePic = () => {
   const fadeInPara = document.querySelector('.fadeAbProfile');
   const fadePosition = fadeInPara.getBoundingClientRect().top;

   const screenPosition = innerHeight / 1




   if (fadePosition < screenPosition) {
      fadeInPara.classList.add('fadeAppear')
   } else {
      console.log(2);
   
   }
}


window.addEventListener('scroll', fadeAffectProfilePic)