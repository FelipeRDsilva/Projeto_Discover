function toggleMode(){
    const html = document.documentElement;
    const img = document.querySelector("#Profile img")
    
    if(html.classList.contains("Light")){
        html.classList.remove("Light")
        img.setAttribute("src", "./assets/avatar-light.png");
    }
    else{
        html.classList.add("Light")
        img.setAttribute("src","./assets/avatar.png");
    }


    //html.classList.toggle("Light");

}
