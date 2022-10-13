function differenz() {
    let input1 = document.getElementById("age1").value;
    let input2 = document.getElementById("age2").value;

    let output = input1 - input2;
    console.log(output);

    document.getElementById("output").innerHTML = output;
}