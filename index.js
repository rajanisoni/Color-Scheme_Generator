// For Default
getColorScheme()


const getColorBtn = document.getElementById("color-scheme-btn")

getColorBtn.addEventListener("click", getColorScheme)

function getColorScheme() {
    const inputColor = document.getElementById("color-input").value.slice(1);
    const inputScheme = document.getElementById("color-schemes").value.toLowerCase();

    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${inputScheme}&count=6`)
        .then(responce => responce.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
                // console.log(data.colors[i].hex.value)
                document.getElementsByClassName("result-colors")[i].style.backgroundColor = data.colors[i].hex.value
                document.getElementsByClassName("color-name-box")[i].textContent = data.colors[i].hex.value
            }
        })
}

// COPY ON CLICK

for(let i=0; i<5; i++){
    const colorBox = document.getElementsByClassName("color-name-box");
    colorBox[i].addEventListener("click",function(){
        navigator.clipboard.writeText( colorBox[i].textContent)
        alert("Copied")})
   }
   
