function init(){
    const boxes = document.querySelectorAll('.box')
    const restartbutton = document.querySelector('.restart')
    const winnercondition = document.querySelector('.winner')
    let player ='X'
    const arr = []
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
                 [1,4,7],[2,5,8],[0,4,8],[2,4,6]]




    boxes.forEach((box)=>{
        box.addEventListener('click',handleClick)
    })


    restartbutton.addEventListener('click',resetBoard)
       function handleClick(event) {
        if(event.target.textContent === "") {
            event.target.textContent = player
            player = player === 'X' ? 'O' : 'X'
        }
            }



    function resetBoard(event){
        boxes.forEach(box =>{
            box.textContent = ""
        })
     }
    }
    window.addEventListener('DOMContentLoaded', init)
