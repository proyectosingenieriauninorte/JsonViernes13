
document.getElementById("addColumn").addEventListener("click", function() {
    var table = document.querySelector("table");
    var columnTitle = document.getElementById("columnTitle").value;
    var dataType = document.getElementById("dataType").value;

    // Agregar encabezado de columna
    var headerRow = table.rows[0];
    var th = document.createElement("th");
    th.textContent = columnTitle;
    headerRow.appendChild(th);

    // Agregar celdas a cada fila
    for (var i = 1; i < table.rows.length; i++) {
        var newCell = table.rows[i].insertCell(-1);
        newCell.innerHTML = generateData(dataType);
    }
});

document.getElementById("downloadCsv").addEventListener("click", function() {
    var table = document.querySelector("table");
    var csvContent = "";

    // Recorrer las filas de la tabla
    for (var i = 0; i < table.rows.length; i++) {
        var row = [], cols = table.rows[i].cells;

        // Recorrer las celdas de la fila
        for (var j = 0; j < cols.length; j++) {
            // Reemplazar comas para mantener el formato CSV
            var text = cols[j].innerText.replace(/,/g, "");
            row.push(text);
        }

        // Unir cada columna con comas y añadir una nueva línea al final
        csvContent += row.join(",") + "\r\n";
    }

    // Crear un elemento de enlace para descargar
    var downloadLink = document.createElement("a");
    downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    downloadLink.target = '_blank';
    downloadLink.download = 'datos.csv';

    // Simular un clic en el enlace de descarga
    downloadLink.click();
});

document.getElementById("generateApi").addEventListener("click", function() {
    var apiName = document.getElementById("apiName").value;
    var table = document.querySelector("table");
    var jsonData = [];
    var headers = [];

    // Recoger los encabezados de la tabla
    var headerCells = table.rows[0].cells;
    for (var i = 0; i < headerCells.length; i++) {
        headers[i] = headerCells[i].innerText;
    }

    // Recorrer las filas y construir el JSON
    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            row[headers[j]] = table.rows[i].cells[j].innerText;
        }
        jsonData.push(row);
    }

    var apiObject = {
        "name": apiName,
        "data": jsonData
    };

    // Mostrar el JSON en la página
    document.getElementById("apiOutput").textContent = JSON.stringify(apiObject, null, 2);

    // Crear y descargar el archivo JSON
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(apiObject, null, 2));
    var downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", apiName + ".json");
    document.body.appendChild(downloadAnchor); // Necesario para Firefox
    downloadAnchor.click();
    downloadAnchor.remove();

    // Activar la animación de Halloween
    playHalloweenAnimation();
});

function playHalloweenAnimation() {
    var halloweenElement = document.getElementById("halloweenAnimation");
    halloweenElement.classList.add("show");

    // Opcional: Ocultar el fantasma después de un tiempo
    setTimeout(function() {
        halloweenElement.classList.remove("show");
    }, 3000); // El fantasma desaparecerá después de 3 segundos
}




function generateData(dataType) {
    switch (dataType) {
        case "Integer":
            return generateInteger();
        case "Double":
            return generateDouble();
        case "FullName":
            return generateFullName();
        case "IP":
            return generateIP();
        case "Occupation":
            return generateOccupation();
        case "Address":
            return generateAddress();
        case "Date":
            return generateDate();
        case "FirstName":
            return generateFirstName();
        case "LastName":
            return generateLastName();
        case "PhoneNumber":
            return generatePhoneNumber();
        case "CompanyName":
            return generateCompanyName();
        case "CreditCard":
            return generateCreditCard();
        case "CVV":
            return generateCVV();
        case "IMEI":
            return generateIMEI();
        default:
            return "";
        }
}


// Implementa las funciones de generación para cada tipo de dato
function generateInteger() { /* ... */ }
function generateDouble() { /* ... */ }
function generateFullName() { /* ... */ }
function generateIP() { /* ... */ }
function generateOccupation() { /* ... */ }
function generateAddress() { /* ... */ }
function generateDate() { /* ... */ }
