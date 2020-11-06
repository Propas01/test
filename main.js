const circle_buttons = [...document.querySelectorAll('.circle')],
      article_imgaes = [...document.querySelectorAll('.article_img')],
      name = document.getElementById('name'),
      name_logo = document.querySelector('.name_logo'),
      email_btn = document.querySelector('.email_btn'),
      services_btn = document.querySelector('.services_btn')

//funkcija koja menja status kartica
circle_buttons.forEach(btn => {
    btn.addEventListener('click',e => {
        if(!circle_buttons[0].classList[1]){
            e.target.classList.toggle('active')
            circle_buttons[1].classList.toggle('active')
            article_imgaes[0].src = 'assets/james.png'
            article_imgaes[1].src = 'assets/mathilda-selected.png'
            name.innerHTML = 'Mathilda'
            name_logo.src = 'assets/mathilda-signature.png' 
        }
        else{
            e.target.classList.toggle('active')
            circle_buttons[0].classList.toggle('active')
            article_imgaes[0].src = 'assets/james-selected.png'
            article_imgaes[1].src = 'assets/mathilda.png'
            name.innerHTML = 'James'
            name_logo.src = 'assets/james-signature.png'  
        }
    })
})
services_btn.onclick=function(){
    window.open('index.html#service_page','_self')
}
email_btn.onclick = function(){
    document.querySelector('.message').focus()
}