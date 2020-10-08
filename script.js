window.addEventListener('load',  () => {
    const sounds = document.querySelectorAll(".sound");
    const btns = document.querySelectorAll(".btns div");
    const visual = document.querySelector(".visual");
    const color = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#606bd3', '#60c2d3',]

//SOUNDS
    btns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createVisuals(index);
        });
    });

//COLORS

    const createVisuals = (index) => {
        const visuals = document.createElement('div');
        visual.appendChild(visuals);
        visuals.style.backgroundColor = color[index];
        visuals.style.animation = 'jump 1s ease';
        visuals.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});