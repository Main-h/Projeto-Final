<!-- SCRIPT QUE COMPARA AS PEÇAS -->
function help3(){

    var resp = document.getElementById('placam');
    var resp2 = document.getElementById('process');
    var resp3 = document.getElementById('memoriam');
    var resp4 = document.getElementById('fonte');
    var resp5 = document.getElementById('placav');
 
    if (resp.options[resp.selectedIndex].value == 0 || resp2.options[resp2.selectedIndex].value == 0 || resp3.options[resp3.selectedIndex].value == 0 || resp4.options[resp4.selectedIndex].value == 0 || resp5.options[resp5.selectedIndex].value == 0) {
        document.getElementById("resul").innerText = "Uma peça não está selecionada";
        document.getElementById("button").classList.add("hide");
        document.getElementById("resul2").innerText = "";
        document.getElementById("montar").classList.add("hide");
        

}
else if (resp.options[resp.selectedIndex].value == 700 && resp2.options[resp2.selectedIndex].value == 1680 && resp3.options[resp3.selectedIndex].value == 700 && resp4.options[resp4.selectedIndex].value == 200 && resp5.options[resp5.selectedIndex].value == 1000) {
    document.getElementById("resul").innerText = "Essa fonte não vai aguentar as peças selecionadas.";
    document.getElementById("button").classList.add("hide");
    document.getElementById("button2").classList.add("hide");
    document.getElementById("button3").classList.remove("hide");
    document.getElementById("resul2").innerText = "";
    document.getElementById("montar").classList.add("hide");
    

}
}