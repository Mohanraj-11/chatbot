function talk() {
    var know = {
        "Who are you": "Hello, S.A.Engineering college ",
        "How are you": "Good :)",
        "What can i do for you": "do you how many courses in our college>>Thank Me Later",
        "courses:":
            "my college have an 6 UG courses and 3 PG courses ",
        ok: "Thank You So Much ",
        Bye: "Okay! Will meet soon..",
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

