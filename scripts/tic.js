function init() {
    const boxes = document.querySelectorAll('.box')
    const restartbutton = document.querySelector('.restart')
    const winnercondition = document.querySelector('.winner')
    let player = 'X'

    //  const arr = []
    //  const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    //  [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],]




    boxes.forEach((box) => {
        box.addEventListener('click', handleClick)
    })

    function handleClick(event) {
        if (winningcondition()) {
            return
        }
        if (event.target.textContent === "") {
            event.target.textContent = player
            player = player === 'X' ? 'O' : 'X'
            winningcondition()
        }
    }


    function winningcondition() {

        if (boxes[0].innerHTML === 'X' && boxes[1].innerHTML === 'X' && boxes[2].innerHTML === 'X') {
            console.log(boxes[0].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[0].innerHTML + ''
            return true

        } if (boxes[3].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[5].innerHTML === 'X') {
            console.log(boxes[3].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[3].innerHTML + ''
            return true


        } else if (boxes[6].innerHTML === 'X' && boxes[7].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
            console.log(boxes[6].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[6].innerHTML + ''
            return true


        } else if (boxes[0].innerHTML === 'X' && boxes[3].innerHTML === 'X' && boxes[6].innerHTML === 'X') {
            console.log(boxes[0].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[0].innerHTML + ''
            return true

        } else if (boxes[1].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[7].innerHTML === 'X') {
            console.log(boxes[1].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[1].innerHTML + ''
            return true

        } else if (boxes[2].innerHTML === 'X' && boxes[5].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
            console.log(boxes[2].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[2].innerHTML + ''
            return true

        } else if (boxes[0].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
            console.log(boxes[0].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[0].innerHTML + ''
            return true

        } else if (boxes[2].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[6].innerHTML === 'X') {
            console.log(boxes[2].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[2].innerHTML + ''
            return true
        }

        if (boxes[0].innerHTML === 'O' && boxes[1].innerHTML === 'O' && boxes[2].innerHTML === 'O') {
            console.log(boxes[0].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[0].innerHTML + ''
            return true

        } if (boxes[3].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[5].innerHTML === 'O') {
            console.log(boxes[3].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[3].innerHTML + ''
            return true


        } else if (boxes[6].innerHTML === 'O' && boxes[7].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
            console.log(boxes[6].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[6].innerHTML + ''
            return true


        } else if (boxes[0].innerHTML === 'O' && boxes[3].innerHTML === 'O' && boxes[6].innerHTML === 'O') {
            console.log(boxes[0].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[0].innerHTML + ''
            return true

        } else if (boxes[1].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[7].innerHTML === 'O') {
            console.log(boxes[1].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[1].innerHTML + ''
            return true

        } else if (boxes[2].innerHTML === 'O' && boxes[5].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
            console.log(boxes[2].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[2].innerHTML + ''
            return true

        } else if (boxes[0].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
            console.log(boxes[0].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[0].innerHTML + ''
            return true

        } else if (boxes[2].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[6].innerHTML === 'O') {
            console.log(boxes[2].innerHTML + 'has won')
            winnercondition.innerHTML = boxes[2].innerHTML + ''
            return true
        }


        function resetBoard(event) {
            boxes.forEach(box => {
                box.textContent = ""
                winnercondition.textContent = ""

            })

        }
        restartbutton.addEventListener('click', resetBoard)
    }
}
window.addEventListener('DOMContentLoaded', init)
