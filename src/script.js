let wPeaceId = ""
let bPeaceId = ""

function givingColors(){
    
    const arrays = document.querySelectorAll('.arr')
    const whitePeaces = document.querySelectorAll('.peace.white')
    const blackPeaces = document.querySelectorAll('.peace.black')

    whitePeaces.forEach(
        wpeace => {
            wpeace.addEventListener('dragstart', () => {
                wPeaceId = document.querySelector(`#${wpeace.id}`)
            })
        }
    )

    blackPeaces.forEach(
        bpeace => {
            bpeace.addEventListener('dragstart', () => {
                console.log(bpeace.id)
                bPeaceId = document.querySelector(`#${bpeace.id}`)
            })
        }
    )

    arrays.forEach(
        block => {
            const newBlock = block.innerText.split('')
            if(newBlock[0] === 'a'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareB(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'b'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareB(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'c'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareB(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'd'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareW(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
            else if(newBlock[0] === 'e'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareW(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }            
            else if(newBlock[0] === 'f'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareW(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }            
            else if(newBlock[0] === 'g'){
                if(newBlock[1] % 2 !== 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareW(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }            
            else if(newBlock[0] === 'h'){
                if(newBlock[1] % 2 === 0){
                    block.style.backgroundColor = "#772727"
                    fillSquareW(block)
                }
                else{
                    block.style.color = "#772727"
                }
            }
        }
    )
}

givingColors()

function fillSquareW(square){
    square.addEventListener('dragover', (evt) => {
        evt.preventDefault()
    })
    square.addEventListener('drop', () => {
        if(square.childNodes.length > 1){
            wPeaceId.classList.add("warning")
            setTimeout(() => {
                wPeaceId.classList.remove("warning")
            },750)
        }
        else{
            square.appendChild(wPeaceId)
            wPeaceId = ""
        }
    })
}

function fillSquareB(square){
    square.addEventListener('dragover', (evt) => {
        evt.preventDefault()
    })
    square.addEventListener('drop', () => {
        if(square.childNodes.length > 1){
            bPeaceId.classList.add("warning2")
            setTimeout(() => {
                bPeaceId.classList.remove("warning2")
            },750)
        }
        else{
            square.appendChild(bPeaceId)
            bPeaceId = ""
        }
    })
}

