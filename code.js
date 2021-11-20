//Schrijf hier je JavaScript-code

window.onload = function(){
    draw_board(my_board)
}                    

let current_turn = 2;

function draw_board(board){
    container = document.getElementById("board_container");
    board_html = generate_board_html(board);
    container.innerHTML = board_html;
}

function generate_board_html(board){
    let table_inner_html = "";
    for(let i = 0; i < board.length; i++){
        
        let row_html = "<tr>"
        for(let j = 0; j < board[i].length; j++){
            row_html += generate_square(board[i][j]);
        }
        row_html += "</tr>";
        table_inner_html += row_html;
    }

    return `<table>${table_inner_html}</table>`;
    
}

function generate_square(type){
    let square_class = "empty";
    let square_content = "";

    if(type == 1){
        square_class = "zwarte";
        square_content = "";
    }else if(type == 2){
        square_class = "wit";
        square_content = "";
    }
    return `<td class="${square_class} board_element" onclick="square_click_handler(this)">${square_content}</td>`;
}

function update_board(board, row, col, type){
    board[row][col] = type;
    draw_board(board);
}

function square_click_handler(event){
    let col = event.cellIndex;
    let row = event.parentNode.rowIndex;

    update_board(my_board, row, col, current_turn);

    return turn();
}



function turn(){    

    if(current_turn == 1){
        current_turn = 2;
    } else {
        current_turn = 1;
    }
}


function visible (square_class){
    return (square_class == zwarte || square_class == wit);
}

function visibleitem(i, j){
    return visible(my_board[i][j][square_class]);
}



function validposition (i, j ){
    return (i >= 1 && i <= 8*8 ) && (j >= 1 && j <=8*8);
}

function checkallDir (i, j){

    if (my_board[i][j] != "empty" || ! validposition(i, j) ){
        return false;
    }


    let huidig = current_turn;
    let checki;
    let checkj; 
    let om_te_checken;
        if(huidig === zwarte){
            om_te_checken = wit
        }else{
                om_te_checken = zwarte
                }

    for ( let rowRichting = -1; rowRichting <= 1; rowRichting++){
        for( let colRichitng = -1; colRichitng <= 1; colRichitng++){

            if (rowRichting === 0 && colRichitng === 0){
                continue;
        }


            checki = i + rowRichting;
            checkj = j + colRichitng;

            let item = false;

            while( validposition(checki, checkj ) && visibleitem(checki, checkj) && my_board[checki][checkj][square_classsquare_class.id === om_te_checken.id]) {


        
            checki += rowRichting;
            checkj += colRichitng;
        
                item =true;

                }
         }
        }
}


function reset(board){
    for(i=0; i<8; i++){
        for(j=0; j<8; j++){
            my_board[i][j] =""
        }
    }
    return my_board;
} 

function start(){
    let timer;
    
    timer = setInterval(counttimer, 1000);
    counttimer();
}


function counttimer(){
    let sec = 0;
    ++sec;
    let uur = math.floor(sec/3600);
    let minuten = math.floor((sec - uur*3600)/60);
    let seconden = sec - (uur*3600+minuten*60);

    document.getElementById("tijd").innerHTML = uur + minuten + seconden;
}





function scorecounter(my_board){
    let score1 = 0;
    let score2 = 0;
    

    for(i=0; i<i.length; i++){
        for(j=0; j<j.length; j++){
            if (my_board[i][j] == "zwarte");
                score1 += 1;
            if (my_board[i][j] == "wit");
                score2 +=1;
            } 
        } 
    }   
       


    

function win(){

    if (score2 > score1);{
        alert("Player2 won")

    }if ( score1 = score2){
        alert("Draw game")
    }else{
        alert("Player 1 won")
    }
}

function newgame(){
    alert("NEW GAME WILL START")
    return reset();
}
