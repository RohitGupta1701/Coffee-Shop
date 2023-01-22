let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}


{/* <script> */}
// //   const scriptURL = 'https://script.google.com/macros/s/AKfycbx_XiWLl-PZls9Pyk3YQGtUiCMYNVISPjGKXtrSSArG9EjpfwnrKbcFdMboykEZQI0x5g/exec'
//   const form = document.forms['submit-to-google-sheet']
//   const msg = document.getElementsByClassName('msg')

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => {
//          msg.innerHTML = "Message send successfully";
//          setTimeout(function(){
//             msg.innerHTML =""
//          },3000)
//          form.reset();
//       })
//       .catch(error => console.error('Error!', error.message))
//   })
// </script>


  const scriptURL = 'https://script.google.com/macros/s/AKfycbw2p6Ok0Cs6ba5pHcPWgN81eoKgjLz3O32aCnb1tbyAdp5UY0vchXEpo6lLtVE-h7ui/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementsByClassName('msg')


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = "Message send Successfully";
         setTimeout(function(){
               msg.innerHTML =""
          },1000)
          form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
