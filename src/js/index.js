const startbtn = document.querySelector('.anchor');

function fire(ratio, opt) {
    confetti(Object.assign({}, opt, {
        origin: {y: .6},
        particleCount: Math.floor(200 * ratio)
    }))
}


startbtn.addEventListener('click', () => {
    setTimeout(() => {
        fire(.25, {
            spread: 30,
            startVelocity: 60
        });
        fire(.2, {spread: 60});
        fire(.35, {
            spread: 100,
            decay: .9,
            scalar: 1
        });
        fire(.1, {
            spread:130,
            startVelocity: 30,
            decay: .92,
            scalar: 1.2
        });
        fire(.2, {
            spread: 120,
            startVelocity: 45
        });
    }, 500);
});









