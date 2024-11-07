const $pag1 = document.querySelector(".pagina1");
const $pag2 = document.querySelector(".pagina2");

const $header1 = document.querySelector(".header1");
const $header2 = document.querySelector(".header2");
const $ocultar1 = document.querySelector(".ocultar1");
const $ocultar2 = document.querySelector(".ocultar2");
const $footer1 = document.querySelector(".footer1");
const $footer2 = document.querySelector(".footer2");

const $atras = document.querySelector(".atras");

$header1.classList.add("ocultar");
$header2.classList.add("ocultar");
$ocultar1.classList.add("ocultar");
$ocultar2.classList.add("ocultar");
$footer1.classList.add("ocultar");
$footer2.classList.add("ocultar");
$atras.classList.add("ocultar");


function abrir1() {
    $header1.classList.remove("ocultar");
    $header1.classList.add("flex-display");
    $ocultar1.classList.remove("ocultar");
    $footer1.classList.remove("ocultar");
    $pag1.classList.add("ocultar");
    $pag2.classList.add("ocultar");
    $atras.classList.remove("ocultar");
}

$pag1.addEventListener("click", abrir1);
////////////////////////////

function abrir2() {
    $header2.classList.remove("ocultar") 
    $ocultar2.classList.remove("ocultar");
    $footer2.classList.remove("ocultar");
    $ocultar2.classList.add("flex-display");
    $pag1.classList.add("ocultar");
    $pag2.classList.add("ocultar");
    $atras.classList.remove("ocultar");
}

$pag2.addEventListener("click", abrir2);


function atras(){
    $ocultar1.classList.add("ocultar");
    $ocultar2.classList.remove("flex-display");
    $ocultar2.classList.add("ocultar");
    $header1.classList.remove("flex-display");
    $header1.classList.add("ocultar");
    $header2.classList.add("ocultar");
    $footer1.classList.add("ocultar");
    $footer2.classList.add("ocultar");
    $pag1.classList.remove("ocultar");
    $pag2.classList.remove("ocultar");
    $atras.classList.add("ocultar");
}

$atras.addEventListener("click", atras);