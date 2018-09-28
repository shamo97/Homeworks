window.onload = function () {
    function s (){
    document.body.style.backgroundImage = "url('images/back.png')";
    let gameLevel;
    let brdSize = 0;
    let appleNumber = 0;
    let snakeLength = 0;
    let position = "right";
    let snakess;
    let apples;
    let score = 0;
    let gameSpeed;
    let storage = window.localStorage;
    let STORAGE_KEY = "settings"
    let menu;
    let iHaveDefaults = false;


    let element = new Image();
    element.id = "choose";

    let img = new Image();
    img.id = "novice";


    let img1 = new Image();
    img1.id = "standard";

    let img2 = new Image();
    img2.id = "difficult";

    let img3 = new Image();
    img3.id = "snake";

    window.addEventListener("keydown", move);
    class Menu {
        constructor() {
            this.sichkare = gameSpeed;
            this.gvelissigrdze = snakeLength;
            this.vashlisraodenoba = appleNumber;
            this.dapa = brdSize
            this.kula = score;
        }
    }
    if (storage.getItem(STORAGE_KEY) != null) {
        getStorage();
        snakeLength = menu.gvelissigrdze;
        appleNumber = menu.vashlisraodenoba;
        brdSize = menu.dapa;
        score = menu.kula;
        gameSpeed=menu.sichkare;
        iHaveDefaults = true;
    } else {
        menu = new Menu();
    }


    class Canvas {
        constructor(canvas, ctx) {
            this.canvas = canvas;
            this.ctx = ctx;
        }
        createCanvas(width, height) {
            this.canvas = document.createElement("canvas");
            this.ctx = this.canvas.getContext("2d");
            this.canvas.width = width;
            this.canvas.height = height;
            this.canvas.id = "canvas";
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            document.body.appendChild(this.canvas);

        }

    }

    let canva = new Canvas();
    canva.createCanvas(400, 400);
    element.onload = function () {
        canva.ctx.drawImage(element, 60, 50, 280, 70);
    }

    element.src = "images/moveit.png"
    img.onload = function () {
        canva.ctx.drawImage(img, 110, 150, 200, 30)

    }
    img.src = "images/novice.png"
    img1.onload = function () {
        canva.ctx.drawImage(img1, 110, 210, 200, 30)
    }
    img2.onload = function () {
        canva.ctx.drawImage(img2, 110, 270, 200, 30)

    }






    img.src = "images/novice.png"
    img1.src = "images/standard.png"
    img2.src = "images/difficult.png"

    function listenCanvas() {

        let myCanvas = document.getElementById("canvas");
        myCanvas.addEventListener("click", function (event) {
            let mousePos = getMousePos(myCanvas, event);
            if (mousePos.x >= 110 && mousePos.x <= 315 && mousePos.y >= 155 && mousePos.y <= 185) {
                gameLevel = 0;
                chooseButton();
            }
            else if (mousePos.x >= 110 && mousePos.x <= 315 && mousePos.y >= 210 && mousePos.y <= 240) {
                gameLevel = 1;
                chooseButton();

            }

            else if (mousePos.x >= 110 && mousePos.x <= 315 && mousePos.y >= 270 && mousePos.y <= 300) {
                gameLevel = 2;
                chooseButton();

            }


        }, false);
    }
    listenCanvas();

    function getMousePos(myCanvas, event) {
        var rect = myCanvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    function chooseButton() {

        canva.ctx.clearRect(0, 0, canva.ctx.width, canva.ctx.height);
        canva.ctx.fillStyle = "black";
        canva.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        createSelect();




    }


    function createSelect() {
        let x = document.createElement("SELECT");
        x.setAttribute("id", "board");
        document.body.appendChild(x);
        let z = document.createElement("option");
        z.setAttribute("value", "boardSize");
        let f = document.createElement("option");
        f.setAttribute("value", "boardSize");
        let b = document.createElement("option");
        b.setAttribute("value", "boardSize");
        var y = document.createTextNode("400 x 400");
        f.appendChild(y);
        var t = document.createTextNode("600 x 600");
        z.appendChild(t);
        var a = document.createTextNode("800 x 800");
        b.appendChild(a);
        document.getElementById("board").appendChild(f);
        document.getElementById("board").appendChild(z);
        document.getElementById("board").appendChild(b);


        let apple = document.createElement("SELECT");
        apple.setAttribute("id", "apple");
        document.body.appendChild(apple);
        let apple1 = document.createElement("option");
        apple1.setAttribute("value", "applenumber");
        let apple2 = document.createElement("option");
        apple2.setAttribute("value", "applenumber");
        let apple3 = document.createElement("option");
        apple3.setAttribute("value", "applenumber");
        let apple4 = document.createElement("option");
        apple4.setAttribute("value", "applenumber");
        let apple5 = document.createElement("option");
        apple5.setAttribute("value", "applenumber");

        let aa = document.createTextNode("1");
        let bb = document.createTextNode("2");
        let c = document.createTextNode("3");
        let d = document.createTextNode("4");
        let e = document.createTextNode("5");

        apple1.appendChild(aa);
        apple2.appendChild(bb);
        apple3.appendChild(c);
        apple4.appendChild(d);
        apple5.appendChild(e);
        document.getElementById("apple").appendChild(apple1);
        document.getElementById("apple").appendChild(apple2);
        document.getElementById("apple").appendChild(apple3);
        document.getElementById("apple").appendChild(apple4);
        document.getElementById("apple").appendChild(apple5);

        let gveli = document.createElement("SELECT");
        gveli.setAttribute("id", "snakes");
        document.body.appendChild(gveli);
        let gveli1 = document.createElement("option");
        gveli1.setAttribute("value", "snakenumber");
        let gveli2 = document.createElement("option");
        gveli2.setAttribute("value", "snakenumber");
        let gveli3 = document.createElement("option");
        gveli3.setAttribute("value", "snakenumber");
        let gveli4 = document.createElement("option");
        gveli4.setAttribute("value", "snakenumber");


        let gv = document.createTextNode("5");
        let gv1 = document.createTextNode("10");
        let gv2 = document.createTextNode("15");
        let gv3 = document.createTextNode("20");

        gveli1.appendChild(gv);
        gveli2.appendChild(gv1);
        gveli3.appendChild(gv2);
        gveli4.appendChild(gv3);


        document.getElementById("snakes").appendChild(gveli1);
        document.getElementById("snakes").appendChild(gveli2);
        document.getElementById("snakes").appendChild(gveli3);
        document.getElementById("snakes").appendChild(gveli4);


        if (gameLevel == 0) {
            createGameLevel(250, 200, 130);

        } else if (gameLevel == 1) {
            createGameLevel(120, 100, 80);

        } else {
            createGameLevel(70, 50, 30);

        }





        var button = document.createElement("BUTTON");
        var tt = document.createTextNode("START GAME");
        var butt = document.createElement("BUTTON");
        var dd = document.createTextNode("RESUME GAME");
        button.id = "start";
        button.appendChild(tt);
        document.body.appendChild(button);
        butt.id = "resume";
        butt.appendChild(dd);
        document.body.appendChild(butt)
        let image = new Image();
        image.id = "boardSize";
        let image1 = new Image();
        image1.id = "apple";
        let image2 = new Image();
        image2.id = "snakel";
        let image3 = new Image();
        image3.id = "speed";

        image.onload = function () {
            canva.ctx.drawImage(image, 10, 0, 250, 60);
                     
        }
        image.src = "images/board.png";
        image1.onload=function() {
            canva.ctx.drawImage(image1, 10, 100, 300, 80);

        }
        image1.src = "images/apple.png";
        image2.onload=function() {
            canva.ctx.drawImage(image2, 0, 180, 300, 80);

        }
        image2.src = "images/snakel.png";
        image3.onload=function() {
            canva.ctx.drawImage(image3, 10, 290, 250, 50);

        }
        image3.src = "images/game speed.png";

        image.src = "images/board.png";
        image1.src = "images/apple.png";
        image2.src = "images/snakel.png";
        image3.src = "images/game speed.png";
        let el = document.getElementById("start");

        el.onclick = function () {
            let element = document.getElementById("board");
            let element2 = document.getElementById("apple");
            let element3 = document.getElementById("snakes");
            let element4 = document.getElementById("speeds");

            brdSize = element.selectedOptions[0].text;
            brdSize = brdSize.substring(0, 3);


            appleNumber = element2.selectedOptions[0].text;
            menu.vashlisraodenoba = appleNumber;

            snakeLength = element3.selectedOptions[0].text;
            menu.gvelissigrdze = snakeLength;
            gameSpeed = element4.selectedOptions[0].text;
            score = 0;
            menu.sichkare=gameSpeed;
           
            menu.dapa = brdSize;
            menu.kula = score;
            updateStorage();
            console.log(gameSpeed);

            startGame();

        }
        let el2 = document.getElementById("resume");
        el2.onclick = function () {
            brdSize = menu.dapa;
            appleNumber = menu.vashlisraodenoba;
            snakeLength = menu.gvelissigrdze;
            gameSpeed = menu.sichkare;
            score = menu.kula;
            startGame();
        }



    }
    function createGameLevel(x, y, z) {
        let speed = document.createElement("SELECT");
        speed.setAttribute("id", "speeds");
        document.body.appendChild(speed);
        let speed1 = document.createElement("option");
        speed1.setAttribute("value", "speednumber");
        let speed2 = document.createElement("option");
        speed2.setAttribute("value", "speednumberr");
        let speed3 = document.createElement("option");
        speed3.setAttribute("value", "speednumber");

        let aa = document.createTextNode(x);
        let bb = document.createTextNode(y);
        let c = document.createTextNode(z);

        speed1.appendChild(aa);
        speed2.appendChild(bb);
        speed3.appendChild(c);


        document.getElementById("speeds").appendChild(speed1);
        document.getElementById("speeds").appendChild(speed2);
        document.getElementById("speeds").appendChild(speed3);


    }
    function startGame() {



        let size = brdSize.substring(0, 3);

        document.body.removeChild(canvas);
        let element = document.getElementById("start");
        element.parentNode.removeChild(element);
       
        let butt = document.getElementById("resume");
        document.body.removeChild(butt);
       document.body.removeChild(speeds)
       document.body.removeChild(snakes);
       document.body.removeChild(apple);
       document.body.removeChild(board);

        newCanvas = new Canvas();
        newCanvas.createCanvas(size, size);
        apples = new Apple();
        apples.findPosition(appleNumber);
        apples.createApple(appleNumber);
        snakess = new Snake();
        snakess.createSnake();
        snakess.getSnake();
        if (!iHaveDefaults) {
            menu.sichkare = gameSpeed;
            menu.gvelissigrdze = snakeLength;
            menu.vashlisraodenoba = appleNumber;
            menu.dapa = brdSize;
            updateStorage();
        }


        if (typeof game_loop != "undefined") clearInterval(game_loop);
        game_loop = setInterval(update, gameSpeed);











    }


    class Apple {
        constructor() {
            this.apples = apples;
            this.cw = 10;
            this.food = []
        }
        findPosition(number) {
            for (let i = 0; i < number; i++) {
                this.food.push({
                    x: Math.round(Math.random() * (brdSize - 10) / 10),
                    y: Math.round(Math.random() * (brdSize - 10) / 10)
                });
            }
        }
        createApple(number) {
            for (let i = 0; i < number; i++) {
                let x = this.food[i].x;
                let y = this.food[i].y;
                newCanvas.ctx.fillStyle = "red";
                newCanvas.ctx.fillRect(x * 10, y * 10, 10, 10);
                newCanvas.ctx.strokeStyle = "white";
                newCanvas.ctx.strokeRect(x * 10, y * 10, 10, 10);
            }

        }

    }

    class Snake {
        constructor() {
            this.snake = [];
        }
        createSnake() {

            for (let i = snakeLength - 1; i >= 0; i--) {
                this.snake.push({ x: i, y: 0 });
            }
        }
        getSnake() {
            for (let i = 0; i < this.snake.length; i++) {
                let number = this.snake[i];
                this.paintSnake(number.x, number.y);

            }

        }
        paintSnake(x, y) {
            newCanvas.ctx.fillStyle = "blue";
            newCanvas.ctx.fillRect(x * 10, y * 10, 10, 10);
            newCanvas.ctx.strokeStyle = "white";
            newCanvas.ctx.strokeRect(x * 10, y * 10, 10, 10);
        }


    }
    function checkColl(x, y, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].x == x && array[i].y == y)
                return true;
        }
        return false;

    }

    // function animate() {



    // }
    // animate();
    function move(event) {

        let key = event.keyCode;
        if (key == "37" && position != "right") position = "left";

        if (key == "38" && position != "down") position = "up";


        if (key == "39" && position != "left") position = "right"

        if (key == "40" && position != "up") position = "down";
    }

    function update() {
        newCanvas.ctx.fillStyle = "black";
        newCanvas.ctx.fillRect(0, 0, brdSize, brdSize);
        newCanvas.ctx.strokeStyle = "black";
        newCanvas.ctx.strokeRect(0, 0, brdSize, brdSize);


        let xx = snakess.snake[0].x;
        let yy = snakess.snake[0].y;

        if (position == "right") xx++;
        else if (position == "left") xx--;
        else if (position == "up") yy--;
        else if (position == "down") yy++;
        let tail;

        if (xx <= -1 || xx == brdSize / 10 || yy <= -1 || yy == brdSize / 10 || checkColl(xx, yy, snakess.snake)) {
            let kula = menu.kula;
            localStorage.clear();


            GameOver(kula);
            return;
            


            
        }
        for (let i = 0; i < apples.food.length; i++) {
            let x = apples.food[i].x;
            let y = apples.food[i].y;
            if (xx == x && yy == y) {
                tail = { x: xx, y: yy };
                snakess.snake.unshift(tail);
                apples.food.splice(i, 1)
                apples.findPosition(1);
                apples.createApple(1);
                score = score + 10;
                menu.gvelissigrdze++;
                menu.kula += 10;
                updateStorage();
                console.log(menu);
            }


        }
        tail = snakess.snake.pop();
        tail.x = xx;
        tail.y = yy
        snakess.snake.unshift(tail);
        for (let i = 0; i < snakess.snake.length; i++) {
            let snake = snakess.snake[i];
            snakess.paintSnake(snake.x, snake.y)
        }
        apples.createApple(appleNumber);
        let Text = "score  " + score;
        newCanvas.ctx.fillText(Text, 10, 30, 40, 40);
        newCanvas.ctx.font = "30px Arial";
    }
   





    function updateStorage() {
        storage.setItem(STORAGE_KEY, JSON.stringify(menu));
    }



    function getStorage() {
        menu = JSON.parse(storage.getItem(STORAGE_KEY));

    }
}
s();
    function GameOver(kula) {
    
       
        clearInterval(game_loop);
        document.body.removeChild(canvas);
        let div= document.createElement("div");
        div.id="container";
        let text = document.createElement("p");
        text.innerText="GAME OVER";
        text.id="over";
        div.appendChild(text);
        let text2 = document.createElement("p");
        text2.innerText ="YOU SCORED " + kula;
        div.appendChild(text2);
        
        text2.id="number";
        let button = document.createElement("button");
        button.innerText="PLAY AGAIN?";
        button.id="again"
        let button2 = document.createElement("button");
        button2.innerText="EXIT";
        button2.id="exit";
        button.addEventListener("click",playAgain);
        button2.addEventListener("click",playAgain);
     
        document.body.appendChild(div);
        document.body.appendChild(button);
        document.body.appendChild(button2);
    
   // listenCanvas();
  // s();
       
        
    
        }
        function playAgain() {
            

document.body.removeChild(container);
document.body.removeChild(again);
document.body.removeChild(exit);
s();
        }
    


   
}
