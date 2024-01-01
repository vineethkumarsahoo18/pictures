document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', function () {
            const question = this.closest('.image-with-question').getAttribute('data-question');
            const answer = this.getAttribute('data-value');

            // Handle redirection based on the selected option
            if (answer === 'yes') {
                window.location.href = 'page-for-yes.html';
            } else if (answer === 'no') {
                window.location.href = 'page-for-no.html';
            }
        });
    });
});
