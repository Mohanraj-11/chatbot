function talk() {
    var knowledge = {
        "Who are you": "Hello, I am the chatbot of S.A. Engineering college.",
        "How are you": "I'm doing good, thank you! How can I assist you today?",
        "What can I do for you": "I can provide information about courses, admission, scholarships, and contact details of our college. Feel free to ask!",
        "Courses": "Our college offers a wide range of courses including Computer Science, Electronics and Communication Engineering, Mechanical Engineering, Civil Engineering, Electrical and Electronics Engineering, and Information Technology at the undergraduate level. We also have postgraduate courses in Computer Science, Electronics and Communication Engineering, and Business Administration.",
        "Admission": "To apply for admission, please visit our college website and follow the instructions in the admissions section.",
        "Scholarships": "We have various scholarships available for eligible students. You can find more information on our college website under the scholarships section.",
        "Contact": "You can contact our college office at +1-123-456-7890 or send an email to info@saengineeringcollege.com.",
        "Thank you": "You're welcome! If you have any more questions, feel free to ask.",
        "Bye": "Okay! Have a great day. Goodbye!"
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}


    
