document
.getElementById("contactForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    const response = await fetch(
        "https://portfolio-api-6gr8.onrender.com/contact",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    const result = await response.text();

    alert(result);

    this.reset();
});