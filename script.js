// تابعی برای ایجاد بازیکن جدید
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  // تعریف بازیکنان
  var player1 = new Player("Player 1", "X");
  var player2 = new Player("Player 2", "O");
  
  // متغیرهای مربوط به بازی
  var currentPlayer = player1;
  var moves = 0;
  var cells = document.getElementsByClassName('cell');
  
  // تابعی برای انجام حرکت
  function makeMove(cellIndex) {
    var cell = cells[cellIndex];
    if (cell.innerHTML === '') {
      cell.innerHTML = currentPlayer.marker;
      moves++;
  
      if (checkWin(currentPlayer.marker)) {
        alert(currentPlayer.name + " wins!");
        resetGame();
      } else if (moves === 9) {
        alert("It's a draw!");
        resetGame();
      } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
      }
    }
  }
  
  // تابعی برای بررسی برد
  function checkWin(marker) {
    var winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // ردیف‌ها
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // ستون‌ها
      [0, 4, 8], [2, 4, 6] // قطرها
    ];
  
    for (var i = 0; i < winningCombinations.length; i++) {
      var combo = winningCombinations[i];
      if (
        cells[combo[0]].innerHTML === marker &&
        cells[combo[1]].innerHTML === marker &&
        cells[combo[2]].innerHTML === marker
      ) {
        return true;
      }
    }
  
    return false;
  }
  
  // تابعی برای بازنشانی بازی
  function resetGame() {
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = '';
    }
    currentPlayer = player1;
    moves = 0;
  }
  