document.addEventListener('DOMContentLoaded', () => {
    // Roll-over effect on image
    const image = document.getElementById('interactiveImage');
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });

    // Button click to change color
    const colorChangeButton = document.getElementById('colorChangeButton');
    colorChangeButton.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        colorChangeButton.style.backgroundColor = randomColor;
    });

    // Alert on text input submit
    const alertButton = document.getElementById('alertButton');
    const textInput = document.getElementById('textInput');
    alertButton.addEventListener('click', () => {
        const inputText = textInput.value;
        if (inputText === '') {
            alert('Please enter some text!');
        } else {
            alert(`You entered: ${inputText}`);
        }
    });
});
