
document.getElementById("removeColumn").addEventListener("click", function() {
    var table = document.querySelector("table");

    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells.length > 1) { // Asegúrate de que haya más de una celda
            table.rows[i].deleteCell(-1);
        }
    }
});