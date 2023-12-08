document.addEventListener("DOMContentLoaded", function () {
    const mario = document.getElementById("mario");
    let attempts = 0;

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowUp") {
            jump();
        }
    });

    function jump() {
        mario.style.bottom = "200px"; // Jump height
        setTimeout(() => {
            mario.style.bottom = "0";
            checkSuccess();
        }, 500); // Jump duration
    }

    function checkSuccess() {
        attempts++;
        if (attempts === 3) {
            window.location.href = "page3.html";
        } else {
            // Redirect to an error page after 3 unsuccessful attempts
            if (attempts > 3) {
                window.location.href = "error.html";
            }
        }
    }
});
