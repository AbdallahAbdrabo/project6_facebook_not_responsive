const menuItems = document.querySelectorAll(".menu-item")
let messages=document.querySelector('.messages')
let noti_message =document.querySelector('#message')
let themes =document.querySelector('#themes')
let customize_theme =document.querySelector('.customize-theme')
let color=document.querySelectorAll('.choose-color span')
var root =document.querySelector(':root')
let primary;
let bg1=document.querySelector('.choose-bg .bg-1')
let bg2=document.querySelector('.choose-bg .bg-2 ')
let bg3=document.querySelector('.choose-bg .bg-3')
let dark_color
let light_color
let white_color
let submit = document.querySelector('#submit11');
let middle = document.querySelector('.middle');
let text =document.querySelector('textarea')
submit.addEventListener('click', () => {
    
    let newpost = document.querySelector('#post').cloneNode(true);
    middle.appendChild(newpost);
    newpost.children[1].children[0].textContent=text.value
    text.value=''
  });
const changeActiveItem =()=>{
    menuItems.forEach(item=>{
        item.classList.remove("active")
    })
}



menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem()
        item.classList.add('active')
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').
            style.display='none'
        }
        else{
            document.querySelector('.notification-popup').
            style.display='block'
            document.querySelector('.noti-count').style.display='none'
           
            
        }
        if (item.id!='themes') {
            customize_theme.style.display='none' 
        }
        else{
            customize_theme.style.display='block'
        }
       
        

    })
})

noti_message.addEventListener('click',function(){
  
        messages.style.boxShadow=' 0 0 1rem var(--color-primary)'
        document.querySelector('#count').style.display='none'
        setTimeout(function(){
            messages.style.boxShadow='none'
        },6000)
  
})
let messagesearch =document.querySelector('#massage-search')
let result_message = document.querySelectorAll('.message')
const search =function(){
    const val = messagesearch.value.toLowerCase()
    result_message.forEach(chat=>{
        let name=chat.querySelector('h5').textContent
        if(name.indexOf(val) !=-1){
            chat.style.display='flex'
        }else{
            chat.style.display='none'

        }
    })
}
messagesearch.addEventListener('keyup',search)

color.forEach(item=>{
    item.addEventListener('click',()=>{
       
        if(item.classList.contains('color-1')) {
            primary=252
           
        }else if(item.classList.contains('color-2')) {
            primary=52
            
        }
        else if(item.classList.contains('color-3')) {
            primary=352;
         
        }
        else if(item.classList.contains('color-4')) {
            primary=152
          
        }else if(item.classList.contains('color-5')) 
        {
            primary=202
        
        }
        root.style.setProperty('--primary-color2', primary)
        
        
        

    })
})
let input =document.querySelectorAll('input')

let changebg=()=>{
    root.style.setProperty('--dark-color',dark_color)
    root.style.setProperty('--light-color',light_color)
    root.style.setProperty('--white-color',white_color)
    input.forEach(item=>{
        item.style.color='white'
    })

   
}
bg1.addEventListener('click',()=>{
   
    bg1.classList.add('active')
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    window.location.reload()
 
})
bg2.addEventListener('click',()=>{
    dark_color='95%'
    white_color='20%'
    light_color='15%'
    bg2.classList.add('active')
    bg1.classList.remove('active')
    bg3.classList.remove('active')

    changebg()
})
bg3.addEventListener('click',()=>{
    dark_color='95%'
    white_color='10%'
    light_color='0%'
    bg2.classList.remove('active')
    bg1.classList.remove('active')
    bg3.classList.add('active')
    changebg()
})
