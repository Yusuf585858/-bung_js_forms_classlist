function rechneAlter() {
    let input = document.getElementById("jahr").value;
    let output = "2022" - input;


    console.log(output);


    document.getElementById("output").innerHTML = output;
}