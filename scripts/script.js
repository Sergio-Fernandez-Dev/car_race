window.onload = () => {
    const advanceButton = document.getElementById('advance-button');
    const resetButton = document.getElementById('reset-button');
    const car = document.getElementById('car');

    var position = 0;
    var goal = 450;
    var tid = 0;

    advanceButton.onmousedown = () => {
        console.log('onmousedown')
        toggleOn();
    }

    advanceButton.onmouseup = () => {
        console.log('mouse up');
        toggleOff();
    }

    resetButton.onclick = () => {
        position = 0;
        car.style.left = position + 'px';
    }
    

    function toggleOn() {
        if (tid == 0){
            let speed = 10;
            tid = setInterval(moveCar, speed);
        }
    }

    function toggleOff() {
        if(tid != 0){
            clearInterval(tid);
            tid = 0;
        }
    }

    function moveCar() {
        console.log('move car');
        if(position < goal){
            position++;
            car.style.left = position + 'px';
        }
    }
}