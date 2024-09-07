document.addEventListener('DOMContentLoaded', function () {
    var questions = document.getElementsByClassName('question');
    // const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    for (var i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', function () {
            this.classList.toggle('hidden');
        });
    }
});