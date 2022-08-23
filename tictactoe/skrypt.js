let b = [
    [0,0],
    [0,0],
    [0,0]
];
 for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        b[i][j]=document.getElementById("b"+i+j);
    }
}

let no = new Audio("no.wav");
let flaga=true;
let kolko="O";
let krzyzyk="X";

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        b[i][j].addEventListener("click",function() {klikom(i,j);});
    }
}
        
          
//klikniecie w kafelek
function klikom(i,j){
    let isDeactiv=document.getElementById("b"+i+j).className;
    if(isTaken(i,j)==false && isDeactiv!="blok deactiv"){
        if(flaga){
            b[i][j]=kolko;
            $("#b"+i+j).html('<img src="kolko.png">');
            if(isWin(kolko)){
                endGame(kolko);
            }
            flaga=false;    
        
        }else{
            b[i][j]=krzyzyk;
            $("#b"+i+j).html('<img src="krzyzyk.png">');
            if(isWin(krzyzyk)){
                endGame(krzyzyk);
            }
            flaga=true;
        }
    }else{
        if(isDeactiv!="blok deactiv") no.play();
    }
}
//sprawdza warunki wygranej
function isWin(sign){
    let col=0;
    let row=0;
    for(let i=0;i<3;i++){
        if(i==0){
            if(b[0][0]==sign && b[1][1]==sign && b[2][2]==sign) return true;
            else if(b[2][0]==sign && b[1][1]==sign && b[0][2]==sign) return true;
        }
        for(let j=0;j<3;j++){
            if(b[i][j]==sign) row+=1;
            if(b[j][i]==sign) col+=1;
        }
        if(row==3) return true;
        if(col==3) return true;
        row=0;
         col=0;
    }
    return false;
}
//sprawdza czy kafelek juz nie jest zajety
function isTaken(i,j){
    if(b[i][j]==kolko || b[i][j]==krzyzyk){
        return true;
    }else{
        return false;
    }
}
//remis (wykorzystano wszystkie miejsca)
function isDraw(){
    let empty_fields=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(b[i][j]!=krzyzyk && b[i][j]!=kolko){
                empty_fields++;
            }
        }
    }
    if(empty_fields>0) return false;
    else return true;
}

//dezaktywacja planszy aby nie mozna bylo juz klikac na inne
function deactivateBoard(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            $('#b'+i+j).addClass('deactiv');
        }
    }
}

//konczy gre, wyswietla zagraj ponownie
function endGame(sign){
    if(sign==krzyzyk){
        document.getElementById("wynik").innerHTML='Congratulations! Cross won!<br/><span class="reset" onclick="location.reload()">WANT TO TRY AGAIN?</span>';
    }else{
        document.getElementById("wynik").innerHTML='Congratulations! Noughts won!<br/><span class="reset" onclick="location.reload()">WANT TO TRY AGAIN?</span>';
    }
    deactivateBoard();
}