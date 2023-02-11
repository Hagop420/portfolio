<<<<<<< HEAD
=======

>>>>>>> e3b30994d5dafae2ffb3ad1affa425c40b0c634e
const fadeAffect = () => {
   const fadeInText = document.querySelector('.fadeInText');
   const fadePosition = fadeInText.getBoundingClientRect().top;

   const screenPosition = innerHeight




   if (fadePosition < screenPosition) {
      fadeInText.classList.add('fadeAppear')
   } else {
      console.log(2);
   
   }
}


addEventListener('load', fadeAffect)


const imgSpacer = document.querySelector('.spacer img');

const imgPara = document.querySelector('.spacer p')



const funcSpave = () => {
   const posImg = imgSpacer.getBoundingClientRect().top
   if (posImg>=300) {
      
      // imgSpacer.style.transform = 'translateX(-5000px)'
      
   }
   
   document.addEventListener('scroll', () => {
      console.log(posImg);

      // imgSpacer.style.padding='30px'
   })
}

<<<<<<< HEAD
funcSpave()
=======
funcSpave()


>>>>>>> e3b30994d5dafae2ffb3ad1affa425c40b0c634e
