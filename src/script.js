let pieceId = ""

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
    const regExp = /\D/
    const squareArray = square.innerText.split(regExp)
    const piecePrevSquareArray = pieceId.parentElement.innerText.split(regExp)
    
    const squareNumber = Number(squareArray[1])
    const piecePrevSquareNumber = Number(piecePrevSquareArray[1])

    const squareModule = squareNumber % 2
    const pieceModule = piecePrevSquareNumber % 2

    const regExp1 = /\d/
    const squareArray1 = square.innerText.split(regExp1)
    const piecePrevSquareArray1 = pieceId.parentElement.innerText.split(regExp1)

    if(squareModule){
        //Casas Ímpares
        
        if(pieceModule !== squareModule && ((squareNumber - piecePrevSquareNumber) < 2 && (squareNumber - piecePrevSquareNumber) > -2)){
            if(pieceId.classList.contains("white") &&  (squareArray1[0].charCodeAt(0) < piecePrevSquareArray1[0].charCodeAt(0))){
                return true
            }
            else if(pieceId.classList.contains("black") &&  (squareArray1[0].charCodeAt(0) > piecePrevSquareArray1[0].charCodeAt(0))){
                return true
            }
            else{
                return false
            }
    }
}
    else{
        //Casas Pares
        if(pieceModule !== squareModule && ((squareNumber - piecePrevSquareNumber) < 2 && (squareNumber - piecePrevSquareNumber) > -2)){
            if(pieceId.classList.contains("white") &&  (squareArray1[0].charCodeAt(0) < piecePrevSquareArray1[0].charCodeAt(0))){
                return true
            }
            else if(pieceId.classList.contains("black") &&  (squareArray1[0].charCodeAt(0) > piecePrevSquareArray1[0].charCodeAt(0))){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
}

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
