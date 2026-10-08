function signIn() {
    var form = document.getElementById("signInForm");
    var loader = document.getElementById("loader");

    // Display loader
    loader.style.display = "inline-block";

    // Simulate sign-in process (setTimeout is used for demonstration purposes)
    setTimeout(function() {
        // Hide loader after sign-in process
        loader.style.display = "none";

        // You can add further logic for successful sign-in here
        alert("Sign-in successful!");
    }, 2000);
}
