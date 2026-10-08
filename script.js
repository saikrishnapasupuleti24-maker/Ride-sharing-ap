let currentFare = 0;

function calculateFare() {

    const distance = Number(document.getElementById("distance").value);
    const pricePerKm = Number(document.getElementById("rideType").value);

    if (distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    currentFare = distance * pricePerKm;

    document.getElementById("fare").innerText =
        "Estimated Fare: ₹" + currentFare;
}

function bookRide() {

    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;

    if (pickup === "" || destination === "") {
        alert("Please enter pickup and destination.");
        return;
    }

    if (currentFare === 0) {
        alert("Please calculate the fare first.");
        return;
    }

    document.getElementById("message").innerText =
        "Ride booked successfully! 🚗";

    const history = document.getElementById("rideHistory");

    if (history.innerText === "No rides yet") {
        history.innerHTML = "";
    }

    const ride = document.createElement("li");

    ride.innerText =
        pickup + " → " + destination +
        " | Fare: ₹" + currentFare;

    history.appendChild(ride);
}

function rateDriver() {

    const rating = document.getElementById("rating").value;

    document.getElementById("ratingMessage").innerText =
        "Thank you! You rated the driver " + rating + " ⭐";
}