// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "!");
        // You could store form data here if needed (e.g., in a database or local storage)
    } else {
        alert("Please fill out all fields.");
    }
});

