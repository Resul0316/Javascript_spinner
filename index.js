
const loading = document.querySelector("#loading")

window.addEventListener("load", () =>{
    loading.style.display ="block";
    
    setTimeout(() =>{
        loading.style.display = "none";
    },2000);
});



