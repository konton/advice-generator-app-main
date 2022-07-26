let btn = document.querySelector(".btn")

async function getApi(){
    let response = await fetch('https://api.adviceslip.com/advice')
    // console.log(response)
    let data = await response.json();
    return data;
} 




btn.addEventListener("click", ()=>{
    getApi().then(
        (data) => {
            document.getElementById("id").innerHTML = data.slip.id;
        }
       
        )
    
    getApi().then(
        (data) => {
            document.getElementById("advicetext").innerHTML ='"'+ data.slip.advice +'"';
        }
    )
})