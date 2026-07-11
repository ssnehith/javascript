function checkEligibility() {
    const age = Number(document.getElementById("age").value);

    const message =
        age >= 18
            ? "You are eligible to vote."
            : "You are not eligible to vote.";

    document.getElementById("result").textContent = message;
}