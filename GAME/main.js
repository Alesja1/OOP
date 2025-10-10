//Импортируем необходимые модули
//import modules

const realLineSync = require('readline-sync');

//Контроллер игрового цикла
//Game loop controller
let keepPlaying = true;

//Основной цикл меню. Будет продолжаться, пока игрок не захочет выйти
//Main menu loop. Will continue until the player wants to exit 
while (keepPlaying) {
    console.clear();
    console.log("==================================");
    console.log("=       WELCOME TO THE GAME    =");
    console.log("==================================");
    console.log("Which game mode do you want to play?");

    const games = [
        'Guess the Number'
    ];

}