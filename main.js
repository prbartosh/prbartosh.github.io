document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Prosta walidacja (można dodać więcej)
    if(name && email) {
        document.getElementById('confirmation-message').textContent = `Dziękujemy za potwierdzenie, ${name}! Do zobaczenia na imprezie!`;
        document.getElementById('rsvp-form').reset();
    } else {
        document.getElementById('confirmation-message').textContent = 'Proszę wypełnić wszystkie pola.';
    }
});
