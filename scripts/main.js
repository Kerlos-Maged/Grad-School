let scrollBar = document.getElementById('scroll')
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
let dots = document.querySelectorAll('.choice span')
let headValue  =document.querySelector('.choice h3')
let titles = document.querySelector('.content h3')


dots.forEach((e)=>{
  e.addEventListener('click', ()=>{
    dots.forEach((x)=>{x.classList.remove('active')})
    e.classList.add('active')
    let name = e.previousElementSibling.innerHTML
    titles.innerHTML = name
  })
})

console.log(dots)

window.addEventListener('scroll', ()=>{
  scrollBar.style.width = `${window.scrollY*100/height}%`
})