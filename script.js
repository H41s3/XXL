document.getElementById("loveButton").addEventListener("click", function() {
    // Hide the button and pre-GIF
    this.style.display = 'none';
    document.getElementById('preGif').style.display = 'none';

    // Show the explosion GIF
    const explosionGif = document.getElementById('explosionGif');
    explosionGif.style.display = 'block';

    // After the explosion, show the "I love you" message and post-GIF
    setTimeout(function() {
        explosionGif.style.display = 'none'; // Hide the explosion GIF after 2 seconds
        const message = document.getElementById('message');
        const postGif = document.getElementById('postGif');

        message.innerHTML = "Fret not, for I am always here for you, through thick and thin. And I'll listen and do anything 4 u 💕";
        message.style.display = 'block';
        postGif.style.display = 'block';  // Show the post-explosion GIF

    }, 2000);  // Adjust timing for explosion duration
});
