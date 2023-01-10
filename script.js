//Aryansh Malviya
console.log("Welcome To Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover  = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// function to change turns 
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
}

// Function to check win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e =>{
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + "Won"
            isgameover = true
            document.querySelector('.ImageBox').getElementsByTagName('img')[0].style.width = "256px";
            document.querySelector(".line").style.width ="20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw ,${e[4]}vw) rotate(${e[5]}deg)`
        }            
        
    })
}

// Main Game Logic
//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click' , ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = " Turn For " + turn;
            }             
        }
    })
})

reset.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width ="0vw";
    document.getElementsByClassName("info")[0].innerText = " Turn For " + turn;
    document.querySelector('.ImageBox').getElementsByTagName('img')[0].style.width = "0px"
})