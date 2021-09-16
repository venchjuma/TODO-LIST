
const img = document.getElementById('image')
const form = document.getElementById('click');
const input = form.querySelector('input');


form.addEventListener('submit', (e) => {
    img.setAttribute("id", "hidden")
    e.preventDefault();
   const text = input.value;
   input.value = ''
   const ul = document.getElementById('list');
   const li = document.createElement('li');
   li.classList.add('list_')
   li.setAttribute('class', 'list_')
   ul.appendChild(li);
   const span =document.createElement('SPAN')
   const div = document.createElement('DIV');
   li.appendChild(div);
   div.setAttribute('class', 'checkbtn');
   span.textContent = text
   li.appendChild(span)


   div.addEventListener('click',(e)=>{
       ul.removeChild(li)
       img.setAttribute("id", "image")
    })


    li.addEventListener('click',(e)=>{
       span.innerText = ''
       const input = document.createElement('input')
       input.type = 'text'
       li.appendChild(input)
       input.classList.add('list_2')
    })

});



const icon = document.querySelector('#icon')

const container = document.querySelector('#container')

var iswhite = false
icon.addEventListener('click', () => {
    
    if(iswhite == true){
        container.classList.toggle('white')
        iswhite = false
    }
    else {
        container.classList.add('white')
        iswhite = true
    }

})






