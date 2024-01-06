document.addEventListener('DOMContentLoaded', function() {
    configureButton('A1');
    configureButton('A2');
    configureButton('A3');
    configureButton('B1');
    configureButton('B2');
    configureButton('B3');
    configureButton('C1');
    configureButton('C2');
    configureButton('C3');
});

var currentPlayer = 1; // player X == 1 and player O == 0

function configureButton(button_id) {
    click_alert(button_id);
    turn()
}

function click_alert(button_id) {
    var button = document.getElementById(button_id);

    if (button) {
        button.addEventListener("click", function() {
            console.log(button_id + " clicado");
        });
    }
}


function turn() {
    var el = document.getElementById("jogador");
    var currentPlayer = 1; // player X == 1 and player O == 0

    var emptyCells = document.querySelectorAll('.botao');

    emptyCells.forEach(function(botao) {
        botao.addEventListener("click", function() {
            if (botao.innerHTML === " ") {
                if (currentPlayer === 1) {
                    botao.innerHTML = "X";
                    el.innerHTML = "Vez do Jogador O";
                } else {
                    botao.innerHTML = "O";
                    el.innerHTML = "Vez do Jogador X";
                }

                if (check_win()) {
                    if (currentPlayer === 1) {
                        el.innerHTML = "Jogador X venceu!";
                    } else {
                        el.innerHTML = "Jogador O venceu!";
                    }
                    disableClicks();
                    return;
                }
                currentPlayer = (currentPlayer === 1) ? 0 : 1;

                if (check_draw(emptyCells)) {
                    el.innerHTML = "Empate!";
                    disableClicks();
                }
            }
        });
    });
}



function check_win(){
    var A1 = document.getElementById("A1")
    var A2 = document.getElementById("A2")
    var A3 = document.getElementById("A3")
    var B1 = document.getElementById("B1")
    var B2 = document.getElementById("B2")
    var B3 = document.getElementById("B3")
    var C1 = document.getElementById("C1")
    var C2 = document.getElementById("C2")
    var C3 = document.getElementById("C3")

    // Check de linhas
    if (A1.innerHTML !== " " && A1.innerHTML === A2.innerHTML && A2.innerHTML === A3.innerHTML) {
        return true;
    } else if (B1.innerHTML !== " " && B1.innerHTML === B2.innerHTML && B2.innerHTML === B3.innerHTML) {
        return true;
    } else if (C1.innerHTML !== " " && C1.innerHTML === C2.innerHTML && C2.innerHTML === C3.innerHTML) {
        return true;
    }

    // Check de colunas
    if (A1.innerHTML !== " " && A1.innerHTML === B1.innerHTML && B1.innerHTML === C1.innerHTML) {
        return true;
    } else if (A2.innerHTML !== " " && A2.innerHTML === B2.innerHTML && B2.innerHTML === C2.innerHTML) {
        return true;
    } else if (A3.innerHTML !== " " && A3.innerHTML === B3.innerHTML && B3.innerHTML === C3.innerHTML) {
        return true;
    }

    // Check de diagonais
    if (A1.innerHTML !== " " && A1.innerHTML === B2.innerHTML && B2.innerHTML === C3.innerHTML) {
        return true;
    } else if (A3.innerHTML !== " " && A3.innerHTML === B2.innerHTML && B2.innerHTML === C1.innerHTML) {
        return true;
    }

    // Se nenhum vencedor for encontrado
    return false;
}

function check_draw(emptyCells) {
    // Se não tem mais espaços vazios e não tem vencedor entao é empate
    return Array.from(emptyCells).every(cell => cell.innerHTML !== " ");
}

function disableClicks() {
    document.querySelectorAll('.botao').forEach(function(botao) {
        botao.removeEventListener("click", turn);
    });
}

function reset(){
    currentPlayer = 1
    document.querySelectorAll('.botao').forEach(function(botao) {
        botao.innerHTML = " ";
    });
    var el = document.getElementById("jogador");
    el.innerHTML = "Vez do Jogador X";
}




