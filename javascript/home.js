function menuMobile() {
    document.getElementById("titulo").style.display = "none";
    document.getElementById("titulo-sociedade").style.display = "none";
    document.getElementById("btnSimulado").style.display = "none";
    document.getElementById("titulo-sociedade").style.display = "none";
    document.getElementById("btnDescerpag").style.display = "none";
    document.getElementById("contato").style.display = "none";
    document.getElementById("menu-mobile").style.display = "flex";
}

function fecharMenu() {
    document.getElementById("titulo").style.display = "block";
    document.getElementById("titulo-sociedade").style.display = "block";
    document.getElementById("btnSimulado").style.display = "block";
    document.getElementById("titulo-sociedade").style.display = "block";
    document.getElementById("btnDescerpag").style.display = "block";
    document.getElementById("contato").style.display = "flex";
    document.getElementById("menu-mobile").style.display = "none";
}