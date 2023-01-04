const main_nav_ttl = document.querySelector('.navHA');


main_nav_ttl.style.color = '#fff'

const spanName=document.querySelector('span.name')
spanName.style.color = '#fff';


const fadeInText_h2=document.querySelector('.fadeInText h2')
fadeInText_h2.style.color = '#fff';

const nav_toggler_icon = document.querySelector('.navbar-toggler-icon');

nav_toggler_icon.style.backgroundImage='url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png)'

 


const lightDarkInput = document.querySelector('#light-dark');

lightDarkInput.addEventListener('click', function() {
   if (lightDarkInput.checked) {

      // spacer 

      // spacer p to dark color

      const spacer = document.querySelector('.spacer p');
      spacer.style.color='#343a40'

      // end color dark for spacer
         // Execute code when the sun icon is being displayed
      document.body.className='light'
      // main_nav_ttl.classList.add('text-dark');

      // change the nav when light background active

      const main_nav_ttl = document.querySelector('.navHA');


      main_nav_ttl.style.setProperty('color', '#343a40', 'important');
      

      const spanName=document.querySelector('span.name')
      spanName.style.color = '#343a40';

      const nav_toggler_icon = document.querySelector('.navbar-toggler-icon');

      nav_toggler_icon.style.backgroundImage = 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%280, 0, 0, 0.5%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e")';



      const fadeInText_h2=document.querySelector('.fadeInText h2')
      fadeInText_h2.style.color = '#343a40';


      // change the nav links to dark color

      const links_in_navbar=document.querySelectorAll('.navbar .nav-item .nav-link')

      links_in_navbar.forEach(link => {
         link.style.setProperty('color', '#343a40', 'important');
      })


      // change switch background when light background
      const switchBckrd = document.querySelector('.switch-light .toggle-light')
      
      switchBckrd.style.background = 'rgb(237, 243, 175)';

      // change the ball background on switch

      const ballSwitcher = document.querySelector('.switch-light .switch')

      ballSwitcher.style.background = '#343a40'
      

      // about me chevron icon change to dark

      const wrapper = document.querySelector('#wrapper');
wrapper.style.color = '#343a40';


      
   } else {

       // spacer p to dark color

       const spacer = document.querySelector('.spacer p');
       spacer.style.color='#fff'

     // about me chevron icon change to dark
      const wrapper = document.querySelector('#wrapper');
      wrapper.style.color = '#fff';
      
// end
      
      
// change the ball background on switch

const ballSwitcher = document.querySelector('.switch-light .switch')

ballSwitcher.style.background='#fff'


          // Execute code when the moon icon is being displayed
      document.body.className = 'dark'
      

      // change nav background when dark back is active

     
      main_nav_ttl.style.setProperty('color', '#fff', 'important');



         const spanName=document.querySelector('span.name')
      spanName.style.color = '#fff';

      const nav_toggler_icon = document.querySelector('.navbar-toggler-icon');

      nav_toggler_icon.style.backgroundImage='url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png)'

      const fadeInText_h2=document.querySelector('.fadeInText h2')
      fadeInText_h2.style.color = '#fff';
      
      
      // change switch background when light background
      const switchBckrd = document.querySelector('.switch-light .toggle-light')
      
      switchBckrd.style.background = '#000';


      // nav link back to light color

      const links_in_navbar=document.querySelectorAll('.navbar .nav-item .nav-link')

      links_in_navbar.forEach(link => {
         link.style.setProperty('color', '#fff', 'important');
      })
   }




   

});



 




 








 




 











