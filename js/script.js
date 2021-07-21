const category = document.querySelector('.catergory');


const imagediv = document.querySelectorAll('.img');
console.log(category)
window.addEventListener('load',()=>{
  category.addEventListener('click',(item)=>{
    console.log(item.target.className)
    imagediv.forEach((image)=>{
        if(image.childNodes[1].classList.contains(item.target.className)){
           image.classList.add('show');
           image.classList.remove('hide');

           console.log('true')
        }
        else{
          image.classList.add('hide');
          image.classList.remove('show');
        }

    })
  })



})
