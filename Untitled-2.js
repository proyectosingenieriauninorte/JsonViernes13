document.getElementById("numRows").addEventListener("change", function() {
    var table = document.querySelector("table");
    var numRows = parseInt(document.getElementById("numRows").value);
    var numCols = table.rows[0].cells.length;

    // Limpiar filas existentes, excepto el encabezado
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Agregar nuevas filas
    for (var i = 0; i < numRows; i++) {
        var newRow = table.insertRow(-1);
        for (var j = 0; j < numCols; j++) {
            var newCell = newRow.insertCell(j);
            newCell.innerHTML = ""; // o algún valor predeterminado
        }
    }
});
