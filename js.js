// Кнопка запускает функцию task7, которая генерирует случайный backgroundColor 

function task7() {
   let block = document.querySelector('.block7'); // беру квадрат
     min = Math.ceil(0);
     max = Math.floor(255);
    let c1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let c2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let c3 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    let rgb = 'rgb(' +c1+ ','+c2+ ','+c3+')'; // УРА!
    
   let res = block.style.background = rgb;// меняю цвет
    //console.log(res);

}

document.querySelector('.button7').onclick = task7; 




// Для данной функции рекомендую написать дополнительную функцию randomInt(a,b) которая генерирует случайное целое число

function task77() {
   let block7 = document.querySelector('.task7'); // беру квадрат
    
function randomInt(a, b) {
      a = Math.ceil(a);
      b = Math.floor(b);
      return Math.floor(Math.random() * (b - a + 1)) + a; //Максимум и минимум включаются
    }
    let color1 = randomInt(0, 255);
    let color2 = randomInt(0, 255);
    let color3 = randomInt(0, 255);

    let rgb = 'rgb(' +color1+ ','+color2+ ','+color3+')'; // УРА!

    let res = block7.style.background = rgb;// меняю цвет
     console.log(res);

//    console.log (color1);
//    console.log (color2);
//    console.log (color3);

}

document.querySelector('.b1').onclick = task77; 

// эта функция тоже работает





