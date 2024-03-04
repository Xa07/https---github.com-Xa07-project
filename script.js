document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Perform AI-based appointment scheduling
    // This part will be implemented with AI, for demonstration purposes, let's just display a success message
    var message = document.getElementById('message');
    message.innerHTML = '<p>Appointment scheduled successfully!</p>';
    message.style.color = 'green';
});
