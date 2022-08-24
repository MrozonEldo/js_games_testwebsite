let wybor = ["rock","paper","scissor"];

class Player{
    constructor(name,points,choice){
        this.name=name;
        this.points=points;
        this.choise=choice;
    }

    changePoints(){
        this.points++;
    }

    setChoice(w){
        this.choice=w;
    }
}
let humanplayer = new Player("player",0,0);
let siplayer = new Player("si",0,0);
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
        siplayer.setChoice(wybor[liczba]);
        humanplayer.setChoice(wybor_gracza);

        animuj();
        setTimeout(function(){zmienGrafiki(humanplayer.name,siplayer.name,humanplayer.choice,siplayer.choice)},1000);
        setTimeout(function(){whoWin(humanplayer.choice,siplayer.choice)},1000);
    }
}

function whoWin(gracz,si){
    if(gracz==wybor[0]){
        if(si==wybor[1]){
            siplayer.changePoints();
            document.getElementById("siscore").innerHTML=siplayer.points;
        }else if(si==wybor[2]){
            humanplayer.changePoints();
            document.getElementById("playerscore").innerHTML=humanplayer.points;
        }//else alert("draw");
    }else if(gracz==wybor[1]){
        if(si==wybor[2]){
            siplayer.changePoints();
            document.getElementById("siscore").innerHTML=siplayer.points;
        }else if(si==wybor[0]){
            humanplayer.changePoints();
            document.getElementById("playerscore").innerHTML=humanplayer.points;
        }//else alert("draw");
    }else if(gracz==wybor[2]){
        if(si==wybor[0]){
            siplayer.changePoints();
            document.getElementById("siscore").innerHTML=siplayer.points;
        }else if(si==wybor[1]){
            humanplayer.changePoints();
            document.getElementById("playerscore").innerHTML=humanplayer.points;
        }//else alert("draw");
    }
    lock=false;
}

//podmienia grafiki na odpowiedni wybor "broni"
function zmienGrafiki(gracz,si,wybor1,wybor2){
    document.getElementById(gracz).innerHTML='<img src="'+wybor1+'.png">';
    document.getElementById(si).innerHTML='<img src="'+wybor2+'.png" class="simage">';
}

//animacja poprzez dodanie klasy lub jej ponowna aktywacja
function animuj(){
    document.getElementById("player").innerHTML='<img src="rock.png">';
    document.getElementById("si").innerHTML='<img src="rock.png" class="simage">';
    if($('#player').hasClass('animacja1')==false && $('#si').hasClass('animacja2')==false){
        $("#player").addClass('animacja1');
        $("#si").addClass('animacja2');
    }
    
    resetAnimation();
}

//resetuje proces animacji
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