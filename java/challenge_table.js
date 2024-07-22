/**
 * Author: Dr. Amir Aghabiglou
 */

let sortDirection = true;
    let currentColumn = -1;

    function sortTable(columnIndex) {
        const table = document.getElementById('fancyTable');
        const tbody = table.tBodies[0];
        const rows = Array.from(tbody.rows);
        const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText);

        rows.sort((rowA, rowB) => {
            const cellA = rowA.cells[columnIndex].innerText;
            const cellB = rowB.cells[columnIndex].innerText;
            if (isNumeric) {
                return sortDirection ? cellA - cellB : cellB - cellA;
            } else {
                return sortDirection ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
            }
        });

        sortDirection = !sortDirection;
        rows.forEach((row, index) => {
            tbody.appendChild(row);
            row.cells[0].innerText = index + 1;
        });

        updateArrows(columnIndex);
    }

    function updateArrows(columnIndex) {
        if (currentColumn !== -1) {
            document.getElementById(`arrow-${currentColumn}`).innerHTML = '';
        }
        const arrow = sortDirection ? '&uarr;' : '&darr;';
        document.getElementById(`arrow-${columnIndex}`).innerHTML = arrow;
        currentColumn = columnIndex;
    }