var temp = 0;
var Bool = true;

function LaunchVideo1(){
    const partie1 = document.getElementById("part1");
    partie1.style.display = "block";

    partie1.play();
}
function launchVideo2(){
    const partie2 = document.getElementById("part2");
    partie2.style.display = "block";

    setTimeout(() => {
        partie2.play();
    }, 4000);
}
function launchVideo3(){
    const partie3 = document.getElementById("part3");
    partie3.style.display = "block";

    setTimeout(() => {
        partie3.play();
    }, 4000);
}
function launchVideo4(){
    const partie4 = document.getElementById("part4");
    partie4.style.display = "block";

    setTimeout(() => {
        partie4.play();
    }, 4000);
}
function launchVideo5(){
    const partie5 = document.getElementById("part5");
    partie5.style.display = "block";

    setTimeout(() => {
        partie5.play();
    }, 4000);
}

setTimeout(() => {

    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const part3 = document.getElementById("part3");
    const part4 = document.getElementById("part4");
    const part5 = document.getElementById("part5");

    part1.onended = function(e){
        part1.style.display = "none";
        LaunchPuzzle1();
    }

    part2.onended = function(e){
        part2.style.display = "none";
        LaunchPuzzle1();
    }

    part3.onended = function(e){
        part3.style.display = "none";
        LaunchPuzzle1();
    }

    part4.onended = function(e){
        part4.style.display = "none";
        LaunchPuzzle1();
    }
}, 1000);

function LaunchPuzzle1(){

    setTimeout(() => {
        document.getElementById("container").style.display = "none";
        
        document.getElementById("containerCanva").style.opacity = "0";
        document.getElementById("canva").style.display = "block";

        const puzzleValidate = document.getElementById("response");
        puzzleValidate.classList.remove('hiddenVideo');
        puzzleValidate.classList.add('boxVideo');

        if (temp == 0) {
            const puzzle1 = document.getElementById("puzzle1");
            puzzle1.classList.remove('hiddenVideo');
            puzzle1.classList.add('boxVideo');

            puzzle1.style.display = "block";
            
            puzzle1.play();
        } else if (temp == 1) {
            const puzzle2 = document.getElementById("puzzle2");
            puzzle2.classList.remove('hiddenVideo');
            puzzle2.classList.add('boxVideo');

            puzzle2.style.display = "block";
            
            puzzle2.play();
        } else if (temp == 2) {
            const puzzle3 = document.getElementById("puzzle3");
            puzzle3.classList.remove('hiddenVideo');
            puzzle3.classList.add('boxVideo');

            puzzle3.style.display = "block";
            
            puzzle3.play();
        } else if (temp == 3) {
            const puzzle4 = document.getElementById("puzzle4");
            puzzle4.classList.remove('hiddenVideo');
            puzzle4.classList.add('boxVideo');

            puzzle4.style.display = "block";
            
            puzzle4.play();
        }

        const canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        let isDrawing = false;
        
        const startDraw = (e) => {
            isDrawing = true;
            ctx.beginPath();
            ctx.lineWidth = 5;
        }

        const drawing = (e) => {
            if(!isDrawing) return;
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }

        canvas.addEventListener ("mouseout", () => isDrawing = false);
        canvas.addEventListener("mousemove", drawing);
        canvas.addEventListener("mousedown", startDraw);
        canvas.addEventListener("mouseup", () => isDrawing = false);

        if (Bool == true) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        Bool = false;

        let clrs = document.querySelectorAll(".clr")
        clrs = Array.from(clrs)
        clrs.forEach(clr => {
            clr.addEventListener("click", () => {
                ctx.strokeStyle = clr.dataset.clr
                clrs.forEach(clr => {
                    clr.style.outline = "solid 0.35em black";
                })
                clr.style.outline = "solid 0.35em orange";
            })
        })

        let clearBtn = document.querySelector(".clear")
        clearBtn.addEventListener("click", () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        })

        const introPuzzle = document.getElementById("introPuzzle");
        introPuzzle.volume = 0.5;
        introPuzzle.play();
    }, 1000);

    setTimeout(() => {
        const containerCanva = document.getElementById("containerCanva");

        containerCanva.style.display = "none";        
        containerCanva.style.opacity = "1";        
    }, 1100);

    setTimeout(() => {
        const audioPuzzle = document.getElementById("audioPuzzle");
        audioPuzzle.loop = true;
        audioPuzzle.volume = 0.2;
        audioPuzzle.play(); 
    }, 3000);

    setTimeout(() => {
        const response = document.getElementById("response");
        response.style.display = "flex";
        
        const btnNotes = document.getElementById('notes');
        btnNotes.classList.remove('hiddenNotes');
        btnNotes.classList.add('boxNotes');
    }, 4500);
}

function launchVocto() {
    const audioValidate = document.getElementById("audioValidate");
    const audioIntro = document.getElementById("audioIntro");
    var vol = 0.2;
    audioIntro.loop = true;

    document.getElementById("begin").classList.add('blur');

    fadeout(vol, audioIntro);

    audioValidate.volume = 0.6;
    audioValidate.play();
    document.getElementById("begin").style.cursor = "default";

    setTimeout(() => {
        document.getElementById("container").classList.remove('box');
        document.getElementById("container").classList.add('hidden');
    }, 3000);

    setTimeout(() => {
        LaunchVideo1();
    }, 6000);
}

function fadeout(vol, audio) {
    var fadeout = setInterval(
        function() {
            // Reduce volume by 0.05 as long as it is above 0
            // This works as long as you start with a multiple of 0.05!
            if (vol > 0) {
                vol -= 0.015;
                if (vol < 0) {
                    audio.volume = 0;
                } else {
                    audio.volume = vol;
                }
            }
            else {
                audio.pause();
                audio.currentTime = 0;
                clearInterval(fadeout);
            }
        }, 200);
}

function launchMenu(){
    const audioIntro = document.getElementById("audioIntro");
    audioIntro.volume = 0.2;
    document.getElementById("test").classList.remove('box');
    document.getElementById("test").classList.add('hidden');

    setTimeout(() => {
        document.getElementById("container").classList.remove('hidden');
        document.getElementById("container").classList.add('box');
        document.getElementById("test").style.display = "none";
        audioIntro.play();
    }, "2000");
}

function notes(){
    const containerCanva = document.getElementById("containerCanva");

    containerCanva.style.display = "block";
}

function closeNotes(){
    const containerCanva = document.getElementById("containerCanva");

    containerCanva.style.display = "none";
}

function Validate() {
    closeNotes();
    const data = document.getElementById('userResponse').value;
    const audioPuzzle = document.getElementById("audioPuzzle");
    const puzzleValidate = document.getElementById("response");
    const btnNotes = document.getElementById('notes');
    var vol = 0.2;
    const inputResponse = document.getElementById('userResponse');

    const win = document.getElementById("win");
    const loose = document.getElementById("loose");

    if (temp == 0) {
        const puzzle1 = document.getElementById("puzzle1");
        puzzle1.classList.remove('boxVideo');
        puzzle1.classList.add('hiddenVideo');
        
        setTimeout(() => {
            puzzle1.style.display = "none";
        }, 2000);

        btnNotes.classList.remove('boxNotes');
        btnNotes.classList.add('hiddenNotes');
        puzzleValidate.classList.remove('boxVideo');
        puzzleValidate.classList.add('hiddenVideo');

        fadeout(vol, audioPuzzle);
        if (data.toUpperCase() == "E") {
            setTimeout(() => {
                win.play();
            }, 2000);

            temp++;

            setTimeout(() => {
                launchVideo2();
                setTimeout(() => {
                    inputResponse.value = "";
                    document.querySelector(".clear").click();
                }, 2000);
            }, 5000);

            return;
        } else{
            setTimeout(() => {
                loose.play();
            }, 2000);

            setTimeout(() => {
                audioPuzzle.pause();
                audioPuzzle.currentTime = 0;
            }, 2000);
            
            setTimeout(() => {
                LaunchPuzzle1();
            }, 6000);
        }
    }
    if (temp == 1) {
        const puzzle2 = document.getElementById("puzzle2");
        puzzle2.classList.remove('boxVideo');
        puzzle2.classList.add('hiddenVideo');
        
        setTimeout(() => {
            puzzle2.style.display = "none";
        }, 2000);

        btnNotes.classList.remove('boxNotes');
        btnNotes.classList.add('hiddenNotes');
        puzzleValidate.classList.remove('boxVideo');
        puzzleValidate.classList.add('hiddenVideo');

        fadeout(vol, audioPuzzle);
        if (data == "3") {
            setTimeout(() => {
                win.play();
            }, 2000);

            temp++;   

            setTimeout(() => {
                launchVideo3();
                setTimeout(() => {
                    inputResponse.value = "";
                    document.querySelector(".clear").click();
                }, 2000);
            }, 5000);

            return;    
        } else{
            setTimeout(() => {
                loose.play();
            }, 2000);

            setTimeout(() => {
                audioPuzzle.pause();
                audioPuzzle.currentTime = 0;
            }, 2000);
            
            setTimeout(() => {
                LaunchPuzzle1();
            }, 6000);
        }
    }
    if (temp == 2) {
        const puzzle3 = document.getElementById("puzzle3");
        puzzle3.classList.remove('boxVideo');
        puzzle3.classList.add('hiddenVideo');
        
        setTimeout(() => {
            puzzle3.style.display = "none";
        }, 2000);

        btnNotes.classList.remove('boxNotes');
        btnNotes.classList.add('hiddenNotes');
        puzzleValidate.classList.remove('boxVideo');
        puzzleValidate.classList.add('hiddenVideo');

        fadeout(vol, audioPuzzle);
        if (data == "10") {
            setTimeout(() => {
                win.play();
            }, 2000);

            temp++;      
            
            setTimeout(() => {
                launchVideo4();
                setTimeout(() => {
                    inputResponse.value = "";
                    document.querySelector(".clear").click();
                }, 2000);
            }, 5000);

            return; 
        } else{
            setTimeout(() => {
                loose.play();
            }, 2000);

            setTimeout(() => {
                audioPuzzle.pause();
                audioPuzzle.currentTime = 0;
            }, 2000);
            
            setTimeout(() => {
                LaunchPuzzle1();
            }, 6000);
        }
    }
    if (temp == 3) {
        const puzzle4 = document.getElementById("puzzle4");
        puzzle4.classList.remove('boxVideo');
        puzzle4.classList.add('hiddenVideo');
        setTimeout(() => {
            puzzle4.style.display = "none";
        }, 2000);

        btnNotes.classList.remove('boxNotes');
        btnNotes.classList.add('hiddenNotes');
        puzzleValidate.classList.remove('boxVideo');
        puzzleValidate.classList.add('hiddenVideo');

        fadeout(vol, audioPuzzle);
        if (data == "12") {
            setTimeout(() => {
                win.play();
            }, 2000);

            temp++;      

            setTimeout(() => {
                launchVideo5(); 
                setTimeout(() => {
                    inputResponse.value = "";
                    document.querySelector(".clear").click();
                }, 2000);
            }, 5000);
            
            return;
        } else{
            setTimeout(() => {
                loose.play();
            }, 2000);

            setTimeout(() => {
                audioPuzzle.pause();
                audioPuzzle.currentTime = 0;
            }, 2000);
            
            setTimeout(() => {
                LaunchPuzzle1();
            }, 6000);
        }
    }
    setTimeout(() => {
        inputResponse.value = "";
    }, 2000);
}