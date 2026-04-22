function playGame(game) {
    const container = document.getElementById('game-container');
    const frame = document.getElementById('game-frame');

    // Point these to your local game folders
    const paths = {
        'subway': 'games/subway/index.html',
        'temple': 'games/temple/index.html',
        'cs': 'games/cs3d/index.html'
    };

    frame.src = paths[game];
    container.classList.remove('hidden');
}

function closeGame() {
    const container = document.getElementById('game-container');
    const frame = document.getElementById('game-frame');
    frame.src = ""; 
    container.classList.add('hidden');
}
