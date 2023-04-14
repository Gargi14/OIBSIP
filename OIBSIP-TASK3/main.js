let temperature = ()=> {
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value");
    var a = document.querySelector(".takeval").value;
    if (opt.value == "Fahrenheit") {
        console.log(a, "D to F", opt.value)
        let F = a * (9 / 5) + 32
        display.innerHTML = F.toFixed(4) + " F";
    }
    else if (opt.value=="Celcius") {
            console.log(a, "F to C", opt.value)
            let C = (a - 32) * (5 / 9)
            display.innerHTML = C.toFixed(4) + " ºC";
    }
    else{
            var K=parseFloat(a) + parseFloat(273.15);
            display.innerHTML =K.toFixed(2) + " K";
        }
}
