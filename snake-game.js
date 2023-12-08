document.addEventListener("DOMContentLoaded", function () {
    const snake = document.getElementById("snake");

    let snakeX = 0;
    let snakeY = 0;
    let directionX = 1;
    let directionY = 0;

    document.addEventListener("keydown", function (event) {
        handleKeyPress(event);
    });

    function handleKeyPress(event) {
        switch (event.key) {
            case "ArrowUp":
                directionX = 0;
                directionY = -1;
                break;
            case "ArrowDown":
                directionX = 0;
                directionY = 1;
                break;
            case "ArrowLeft":
                directionX = -1;
                directionY = 0;
                break;
            case "ArrowRight":
                directionX = 1;
                directionY = 0;
                break;
        }
    }

    function gameLoop() {
        snakeX += directionX;
        snakeY += directionY;

        // Update snake position
        snake.style.left = snakeX + "px";
        snake.style.top = snakeY + "px";

        // Keep the snake within the game container
        if (snakeX < 0) snakeX = 0;
        if (snakeX > 380) snakeX = 380;
        if (snakeY < 0) snakeY = 0;
        if (snakeY > 380) snakeY = 380;

        // Call the game loop again
        requestAnimationFrame(gameLoop);
    }

    // Start the game loop
    gameLoop();
});
