function chessBoard() {
  let table = document.createElement("table");
  let letters = "ABCDEFGH";
  for (let i = 0; i < 9; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
      let td = document.createElement('td');
      if (j === 0) {
        td.textContent = 8 - i || '';
        td.className = 'number';
        tr.appendChild(td);
        continue;
      }
      if (i === 8) {
        td.textContent = letters.charAt(j - 1);
        td.className = 'letter';
        tr.appendChild(td);
        continue;
      }
      if (i % 2 == j % 2) {
        td.className = "white";
      } else {
        td.className = "black";
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

chessBoard();