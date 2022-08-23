let wybor = ["rock","paper","scissor"];
let player_points=0;
let si_points=0;
let lock=false;

document.getElementById("rock").addEventListener("click",function(){klikom(wybor[0]);});
document.getElementById("paper").addEventListener("click",function(){klikom(wybor[1]);});
document.getElementById("scissor").addEventListener("click",function(){klikom(wybor[2]);});

//losuje liczbe <0,3> aby zdefiniowac wybor komputera
function losujLiczbe(){
    return Math.floor(Math.random()*3+0);
}

//funkcja grajaca odpalana przy wyborze gracza
function klikom(wybor_gracza){
    if(lock==false){
        lock=true;
        document.getElementById("player").innerHTML=wybor_gracza;
        let liczba=losujLiczbe();
        let wybor_si=wybor[liczba];

        animuj();
        setTimeout(function(){zmienGrafiki("player","si",wybor_gracza,wybor_si)},1000);
        setTimeout(function(){whoWin(wybor_gracza,wybor_si)},1000);
    }
}

function whoWin(gracz,si){
    if(gracz==wybor[0]){
        if(si==wybor[1]){
            si_points++;
            document.getElementById("siscore").innerHTML=si_points;
        }else if(si==wybor[2]){
            player_points++;
            document.getElementById("playerscore").innerHTML=player_points;
        }//else alert("draw");
    }else if(gracz==wybor[1]){
        if(si==wybor[2]){
            si_points++;
            document.getElementById("siscore").innerHTML=si_points;
        }else if(si==wybor[0]){
            player_points++;
            document.getElementById("playerscore").innerHTML=player_points;
        }//else alert("draw");
    }else if(gracz==wybor[2]){
        if(si==wybor[0]){
            si_points++;
            document.getElementById("siscore").innerHTML=si_points;
        }else if(si==wybor[1]){
            player_points++;
            document.getElementById("playerscore").innerHTML=player_points;
        }//else alert("draw");
    }
    lock=false;
}

function zmienGrafiki(gracz,si,wybor1,wybor2){
    document.getElementById(gracz).innerHTML='<img src="'+wybor1+'.png">';
    document.getElementById(si).innerHTML='<img src="'+wybor2+'.png" class="simage">';
}

function animuj(){
    document.getElementById("player").innerHTML='<img src="rock.png">';
    document.getElementById("si").innerHTML='<img src="rock.png" class="simage">';
    if($('#player').hasClass('animacja1')==false && $('#si').hasClass('animacja2')==false){
        $("#player").addClass('animacja1');
        $("#si").addClass('animacja2');
    }
    
    resetAnimation();
}

function resetAnimation(){
    let p=document.getElementById('player');
    p.style.animation='none';
    p.offsetHeight;
    p.style.animation=null;

    let s=document.getElementById('si');
    s.style.animation='none';
    s.offsetHeight;
    s.style.animation=null;
}