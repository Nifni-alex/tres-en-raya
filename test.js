let victoria = false
let derrota = false 


console.log('Vas ha jugar como X');
let a = 'a';
let b = 'b';
let c = 'c';
let d = 'd';
let e = 'e';
let f = 'f';
let g = 'g';
let h = 'h';
let i = 'i';
let casillas = [a,b,c,d,e,f,g,h,i];
console.log(casillas)

while(victoria !== true){
    
    const preguntaX = ('En que casilla quieres la X ==> ');
    console.log = ('DEBUG: Has seleccionado ' + preguntaX);

    if (preguntaX === 'a'){
        a = 'x'
        console.log(casillas)
    }else if (preguntaX === 'b'){
        b = 'x'
        console.log(casillas)
    }else if(preguntaX === 'c'){
        c = 'x'
        console.log(casillas)
    }else if (preguntaX === 'd'){
        d = 'x'
        console.log(casillas)
    }else if (preguntaX === 'e'){
        e = 'x'
        console.log(casillas)
    }else if (preguntaX === 'f'){
        f = 'x'
        console.log(casillas)
    }else if (preguntaX === 'g'){
        g = 'x'
        console.log(casillas)
    }else if (preguntaX === 'h'){
        h = 'x'
        console.log(casillas)
    }else if(preguntaX === 'i'){
        i = 'x'
        console.log(casillas)
    } 

   

    if (a === 'x' && b === 'x' && c === 'x'){
         victoria === true;
         console.log('La X ha ganado enhorabuena' + casillas)
    }else if (a === 'a' && d === 'x' && g === 'x'){
        victoria = true;
        console.log('La X ha ganado enhorabuena' + casillas)
    }else if (a === 'x' && e === 'x' && i === 'x'){
        victoria = true;
        console.log('La X ha ganado enhorabuena' + casillas)
    }else if (b === 'x' && e === 'x' && h === 'x'){
        victoria = true;
        console.log('La X ha ganado enhorabuena' + casillas)
    }else if (c === 'x' && f === 'x' && i === 'x'){
        victoria = true;
        console.log('La X ha ganado enhorabuena' + casillas)
    }else if (c === 'x' && e === 'x' && g === 'x'){
        victoria = true;
        console.log('La X ha ganado enhorabuena' + casillas)
    }else if (d === 'x' && e === 'x' && f=== 'x'){
        victoria = true;
        console.log('La X ha ganado enhorabuena' + casillas)
    }else if (g === 'x' && h === 'x' && i === 'x'){
        victoria = true;
        console.log('La X ha ganado enhorabuena' + casillas)
    }   // victoria o
    else if (a === 'o' && b === 'o' && c === 'o'){
        victoria = true;
        console.log('La o ha ganado enhorabuena' + casillas)
   }else if (a === 'o' && d === 'o' && g === 'o'){
       victoria = true;
       console.log('La o ha ganado enhorabuena' + casillas)
   }else if (a === 'o' && e === 'o' && i === 'o'){
       victoria = true;
       console.log('La o ha ganado enhorabuena' + casillas)
   }else if (b === 'o' && e === 'o' && h === 'o'){
       victoria = true;
       console.log('La o ha ganado enhorabuena' + casillas)
   }else if (c === 'o' && f === 'o' && i === 'o'){
       victoria = true;
       console.log('La o ha ganado enhorabuena' + casillas)
   }else if (c === 'o' && e === 'o' && g === 'o'){
       victoria = true;
       console.log('La o ha ganado enhorabuena' + casillas)
   }else if (d === 'o' && e === 'o' && f=== 'o'){
       victoria = true;
       console.log('La o ha ganado enhorabuena' + casillas)
   }else if (g === 'o' && h === 'o' && i === 'o'){
       victoria = true;
       console.log('La o ha ganado enhorabuena' + casillas)
   }

}


// let recorrercasillas =  [a,b,c,d,e,f,g,h,i];
// recorrercasillas.forEach(function(recorrercasillas)
// {
//     if (recorrercasillas === 'O' || recorrercasillas === 'X') {
//         console.log('casilla ocupada')
//     }else if (recorrercasillas == '1' || recorrercasillas == '2' || recorrercasillas =='3' ||
//      recorrercasillas =='4' || recorrercasillas =='5' || recorrercasillas =='6' ||
//       recorrercasillas =='7' || recorrercasillas =='8' || recorrercasillas =='9')
//     {
//         console.log('casilla libre')
//     }
//     console.log(recorrercasillas)
// }
// )
// ;

