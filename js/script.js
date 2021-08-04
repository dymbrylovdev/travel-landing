let a = function (){
    let header = document.querySelector("header")
    window.onscroll=()=>{
        if(window.pageYOffset>50){
            header.style.backgroundColor = "#0E1D28"

        }else {
            header.style.backgroundColor = ""
        }
    }
}
a()