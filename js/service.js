$(document).ready(function() {
    var questions = [
        'Hello?',
        'It\'s me...',
        'I was wondering if after all these years...',
        'You\'d like to meet.',
        '*ring ring*'
    ];

    // How many pixels to scroll before going to next question
    var scrollPerQuestion = 50;
    // Total space needed to scroll through all questions
    var slackSpace = questions.length * scrollPerQuestion;
    // Set appropriate document height for scrolling all questions:
    $('body').height($(document).height() + slackSpace);

    $(window).scroll(function(){
        // Calculate the percentage of the total window that the user has scrolled
        var progress = $(window).scrollTop() / slackSpace;
        // Convert progress into question number
        var questNum = Math.floor(progress * questions.length);
        // Make sure the question number does not pass the maximum
        var questNum = Math.min(questNum, questions.length);
        // Display corresponding question
        $('#question').text(questions[questNum]);
    });
    // Scroll to top on page load
    $(window).scrollTop(0).trigger('scroll');
});
