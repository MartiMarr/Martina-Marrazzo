document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento di default del form
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
    // Qui puoi implementare la logica per gestire la prenotazione, ad esempio inviare i dati a un server
    console.log("Prenotazione effettuata:");
    console.log("Data:", date);
    console.log("Ora:", time);
    console.log("Numero di persone:", people);
});
