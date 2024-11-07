function nextPage(current, next) {
    document.getElementById(current).style.display = 'none';
    document.getElementById(next).style.display = 'block';
}

function showResponse(answer) {
    if (answer === 'yes') {
        document.getElementById('question').style.display = 'none';
        document.getElementById('yes-response').style.display = 'block';
    } else {
        document.getElementById('question').style.display = 'none';
        document.getElementById('no-response').style.display = 'block';
    }
}

function showQuestion() {
    document.getElementById('no-response').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}
