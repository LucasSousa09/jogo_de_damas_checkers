let pieceId = ""

function givingColors(){
    
    const arrays = document.querySelectorAll('.arr')
    const pieces = document.querySelectorAll('.piece')
    
    pieces.forEach(
        piece => {
            piece.addEventListener('dragstart', () => {
                pieceId = document.querySelector(`#${piece.id}`)
                console.log(piece.id)
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
        else{
            square.appendChild(pieceId)
        }
    })
}
