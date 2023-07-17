document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('user-input');
    var log = document.getElementById('chat-log');
    var button = document.getElementById('send-button');

    button.addEventListener('click', function() {
        var userMessage = input.value;
        if (userMessage !== '') {
            appendMessage('You: ' + userMessage);
            var botMessage = getBotResponse(userMessage);
            appendMessage('Bot: ' + botMessage);
            input.value = '';
        }
    });

    function appendMessage(message) {
        var messageElement = document.createElement('p');
        messageElement.textContent = message;
        log.appendChild(messageElement);
        log.scrollTop = log.scrollHeight;
    }

    function getBotResponse(message) {
        var response;
        
        // Checking for different user inputs and generating appropriate bot responses
        if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
            response = 'Hello! How can I assist you?';
        } else if (message.toLowerCase().includes('courses') || message.toLowerCase().includes('programs')) {
            response = 'We offer a wide range of programs including Computer Science, Business Administration, and Psychology. Which program are you interested in?';
        } else if (message.toLowerCase().includes('admission') || message.toLowerCase().includes('apply')) {
            response = 'To apply for admission, please visit our college website and follow the instructions in the admissions section.';
        } else if (message.toLowerCase().includes('scholarships') || message.toLowerCase().includes('financial aid')) {
            response = 'We have various scholarships and financial aid options available. You can find more information on our college website under the financial aid section.';
        } else if (message.toLowerCase().includes('contact') || message.toLowerCase().includes('information')) {
            response = 'You can contact our college office at +1-123-456-7890 or send an email to info@college.com.';
        } else {
            response = 'I'm sorry, but I don't have information about that. Is there anything else I can assist you with?';
        }

        return response;
    }
});
