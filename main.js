let screen = document.querySelectorAll('.screen')
let a = document.querySelector('a')
let timer = document.querySelector('#time')
let timer2 = document.querySelector('.time')
let game= document.querySelector('.game')
let count= document.querySelector('#count')
let gameCount= document.querySelector('.gameCount')
let time = 0
let click = 0
const colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71','gold']
a.addEventListener('click', ()=>{
    screen[0].classList.add('up')
})
document.querySelector('.times').addEventListener('click', (event)=>{
    if(event.target.classList.contains('seconds')){
        screen[1].classList.add('up')
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})
function startGame(){
    setInterval(()=>{
        decreaseTime()
    }, 1000)
    setTime(time)
    createCircle()
}
function setTime(time){
    if(time<10){
        timer.innerHTML = `00:0${time}`
    }
    else{
        timer.innerHTML = `00:${time}`
    }
}
function createCircle(){
    let circle = document.createElement('div')
    circle.classList.add('circle')
    let size = getRandomSize(10, 60)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.background = colors[getRandomSize(0, colors.length-1)]
    let boardInfo = game.getBoundingClientRect()//информация об объекте
    let x = getRandomSize(0, boardInfo.width-size)
    let y = getRandomSize(0, boardInfo.height-size)
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    game.append(circle)
}
function getRandomSize(min, max){
    return Math.floor(Math.random()*(max-min)+min)
}
function decreaseTime(){
    if(time==0){
        finishGame()
    }
    else{
        let currentTime = --time
        setTime(currentTime)
    }
}
game.addEventListener('click', (event)=>{
    if(event.target.classList.contains('circle')){
        click++
        event.target.remove()
        createCircle()
    }
})
function finishGame(){
    gameCount.style.display = 'flex'
    game.style.display = 'none'
    count.textContent = `${click}`
    timer2.style.display = 'none'
}