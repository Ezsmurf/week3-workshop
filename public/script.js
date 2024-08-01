$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        
        const formData = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.post('/login', formData, function(response) {
            if (response.valid) {
                $('body').css('background-color', 'green');
                alert('Login successful!');
                window.location.href = '/account';
            } else {
                $('body').css('background-color', 'red');
                alert('Invalid login credentials. Please try again.');
            }
        });
    });
});
