let pieceId = ""
let whiteMoves = true

function givingColors(){
    
    const arrays = document.querySelectorAll('.arr')
    const pieces = document.querySelectorAll('.piece')
    
    pieces.forEach(
        piece => {
            piece.addEventListener('dragstart', () => {
                pieceId = document.querySelector(`#${piece.id}`)
                // console.log(piece.id)
            })
        }
    )

    arrays.forEach(
        block => {
            const newBlock = block.innerText.split('')
            if(newBlock[0] === 'a'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'b'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'c'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'd'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'e'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }            
            else if(newBlock[0] === 'f'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }            
            else if(newBlock[0] === 'g'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }            
            else if(newBlock[0] === 'h'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquare(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
        }
    )
}

givingColors()

function fillSquare(square){
    square.addEventListener('dragover', (evt) => {
        evt.preventDefault()
        //Making sure to removing the class to remove a bug.
        pieceId.classList.remove("warning")
        pieceId.classList.remove("warning2")
    })
    square.addEventListener('drop', () => {
        if(square.childNodes.length > 1){
            warning()
        }
        else{
            const boolean = movingPieces(square)

            if(boolean === true){
                square.appendChild(pieceId)
            }
            else{
                warning()
            }

        }
    })
}

function movingPieces(square){
    //Geting the "actual" square number
    const regExp = /\D/
    const squareArray = square.innerText.split(regExp)
    const squareNumber = Number(squareArray[1])

    //Geting the "previous" square number
    const piecePrevSquareArray = pieceId.parentElement.innerText.split(regExp)
    const piecePrevSquareNumber = Number(piecePrevSquareArray[1])    

    //Verifying if the square is Odd or Even
    const squareModule = squareNumber % 2
    const pieceModule = piecePrevSquareNumber % 2


    //Getting the "previous" and "actual" square letters
    const regExp1 = /\d/
    const squareArray1 = square.innerText.split(regExp1)
    const piecePrevSquareArray1 = pieceId.parentElement.innerText.split(regExp1)

    //Moving pieces logic for odd squares 
    if(squareModule){
        //Casas Ímpares
        if(pieceModule !== squareModule && ((squareNumber - piecePrevSquareNumber) < 2 && (squareNumber - piecePrevSquareNumber) > -2)){
            if(pieceId.classList.contains("white") &&  (squareArray1[0].charCodeAt(0) < piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === true){
                whiteMoves = false
                return true
            }
            else if(pieceId.classList.contains("black") &&  (squareArray1[0].charCodeAt(0) > piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === false){
                whiteMoves = true
                return true
            }
            else{
                return false
            }
        }
        else if(pieceModule === squareModule && ((squareNumber - piecePrevSquareNumber) < 3 && (squareNumber - piecePrevSquareNumber) > -3 && squareNumber !== piecePrevSquareNumber)){
            if(pieceId.classList.contains("white") &&  (squareArray1[0].charCodeAt(0) < piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === true){
                
                let SL = squareArray1[0].charCodeAt(0) + 1
                let SLT = String.fromCharCode(SL)
                let SNSmall = piecePrevSquareNumber - 1
                let SNBig = piecePrevSquareNumber + 1
                
                let SS = SLT + SNSmall
                let SB = SLT + SNBig

                if(document.querySelector(`.${SS}`)?.children[0] && squareNumber < piecePrevSquareNumber){
                    document.querySelector(`.${SS}`).children[0].remove()
                    whiteMoves = false
                    return true
                }
                else if(document.querySelector(`.${SB}`).children[0] && squareNumber > piecePrevSquareNumber){
                    document.querySelector(`.${SB}`).children[0].remove()
                    whiteMoves = false
                    return true
                }
            }
            else if(pieceId.classList.contains("black") &&  (squareArray1[0].charCodeAt(0) > piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === false){
                
                let SL = squareArray1[0].charCodeAt(0) - 1
                let SLT = String.fromCharCode(SL)
                let SNSmall = piecePrevSquareNumber - 1
                let SNBig = piecePrevSquareNumber + 1
                
                let SS = SLT + SNSmall
                let SB = SLT + SNBig

                console.log(SS, SB)

                if(document.querySelector(`.${SS}`)?.children[0] && squareNumber < piecePrevSquareNumber){
                    document.querySelector(`.${SS}`).children[0].remove()
                    whiteMoves = true
                    return true
                }
                else if(document.querySelector(`.${SB}`).children[0] && squareNumber > piecePrevSquareNumber){
                    document.querySelector(`.${SB}`).children[0].remove()
                    whiteMoves = true
                    return true
                }
            }
        }
    }   
    //Moving pieces logic for even squares 
    else{
        //Casas Pares
        if(pieceModule !== squareModule && ((squareNumber - piecePrevSquareNumber) < 2 && (squareNumber - piecePrevSquareNumber) > -2)){
            if(pieceId.classList.contains("white") && (squareArray1[0].charCodeAt(0) < piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === true){
                whiteMoves = false
                return true
            }
            else if(pieceId.classList.contains("black") && (squareArray1[0].charCodeAt(0) > piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === false){
                whiteMoves = true
                return true
            }
            else{
                return false
            }
        }
        else if(pieceModule === squareModule && ((squareNumber - piecePrevSquareNumber) < 3 && (squareNumber - piecePrevSquareNumber) > -3 && squareNumber !== piecePrevSquareNumber)){
            if(pieceId.classList.contains("white") &&  (squareArray1[0].charCodeAt(0) < piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === true){
                
                let SL = squareArray1[0].charCodeAt(0) + 1
                let SLT = String.fromCharCode(SL)
                let SNSmall = piecePrevSquareNumber - 1
                let SNBig = piecePrevSquareNumber + 1
                
                let SS = SLT + SNSmall
                let SB = SLT + SNBig

                if(document.querySelector(`.${SS}`)?.children[0] && squareNumber < piecePrevSquareNumber){
                    document.querySelector(`.${SS}`).children[0].remove()
                    whiteMoves = false
                    return true
                }
                else if(document.querySelector(`.${SB}`).children[0] && squareNumber > piecePrevSquareNumber){
                    document.querySelector(`.${SB}`).children[0].remove()
                    whiteMoves = false
                    return true
                }
            }
            else if(pieceId.classList.contains("black") &&  (squareArray1[0].charCodeAt(0) > piecePrevSquareArray1[0].charCodeAt(0)) && whiteMoves === false){
                
                let SL = squareArray1[0].charCodeAt(0) - 1
                let SLT = String.fromCharCode(SL)
                let SNSmall = piecePrevSquareNumber - 1
                let SNBig = piecePrevSquareNumber + 1
                
                let SS = SLT + SNSmall
                let SB = SLT + SNBig

                console.log(SS, SB)

                if(document.querySelector(`.${SS}`)?.children[0] && squareNumber < piecePrevSquareNumber){
                    document.querySelector(`.${SS}`).children[0].remove()
                    whiteMoves = true
                    return true
                }
                else if(document.querySelector(`.${SB}`).children[0] && squareNumber > piecePrevSquareNumber){
                    document.querySelector(`.${SB}`).children[0].remove()
                    whiteMoves = true
                    return true
                }
            }
        }
        else{
            return false
        }
    }
}

function eatingPiece(){

}


//A warning if a player makes a impossible move.
function warning(){
    if(pieceId.classList.contains("white")){
        pieceId.classList.add("warning")
        setTimeout(() => {
            pieceId.classList.remove("warning")
        },750)
    }
    else if(pieceId.classList.contains("black")){
        pieceId.classList.add("warning2")
        setTimeout(() => {
            pieceId.classList.remove("warning2")
        },750)
    }
}
