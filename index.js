let moved = false;

function toggle() {
    const boxLeft = document.getElementById('boxLeft');
    const boxTransform = document.getElementById('boxTransform');

    moved = !moved;

    if (moved) {
        boxLeft.classList.add('move-left');
        boxTransform.classList.add('move-transform');
    } else {
        boxLeft.classList.remove('move-left');
        boxTransform.classList.remove('move-transform');
    }
}
