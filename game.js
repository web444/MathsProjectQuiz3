function send() {

    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    correctAnswer = parseInt(number1) * parseInt(number2);
    $("body").html($("body").html().replace('<!--', ''));
    $("body").html($("body").html().replace('-->', ''));
    document.getElementById("question").innerHTML = number1 + " * " + number2;

}