var text = document.getElementById("text-box");
var button = document.getElementById("button");


var cytaty = ["<p><i>To, że milczę, nie znaczy, że nie mam nic do powiedzenia. </i><br><br> Jonathan Carroll</p>",
              "<p><i>Lepiej zaliczać się do niektórych, niż do wszystkich. </i><br><br> Andrzej Sapkowski</p>",
              "<p><i>Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła. </i><br><br> Wisława Szymborska</p>",
              "<p><i>Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu </i><br><br> Antoine de Saint-Exupéry </p>",
              "<p><i>Książki są lustrem: widzisz w nich tylko to co, już masz w sobie. </i><br><br> Carlos Ruiz Zafón</p>"];


button.onclick = function() {
    
        var losowyCytat = Math.floor(Math.random()*5);
        text.innerHTML = cytaty[losowyCytat];
        
};