document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('appointmentForm');
    var message = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Get form values
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var area = document.getElementById('area').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var postCode = document.getElementById('post-code').value;

        // Perform basic form validation
        if (name === '' || phone === '' || email === '' || date === '' || time === '' || area === '' || city === '' || state === '' || postCode === '') {
            showMessage('Please fill in all fields', 'red');
            return;
        }

        // Perform additional validation if needed
        
        // Submit the form data (you can implement this part based on your requirements)

        // Display success message
        showMessage('Appointment booked successfully!', 'green');
    });

    function showMessage(msg, color) {
        message.textContent = msg;
        message.style.color = color;
    }
});
