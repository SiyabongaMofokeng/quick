document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    // Toggle mobile navigation
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  
    // Close mobile navigation when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  
    // EmailJS form submission logic
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way
  
        // Get form data
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          pickup: document.getElementById('pickup').value,
          destination: document.getElementById('destination').value,
          date: document.getElementById('date').value,
          time: document.getElementById('time').value,
          passengers: document.getElementById('passengers').value,
        };
  
        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData) // Replace with your Service ID and Template ID
          .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Thank you for booking with QuickShuttle! We will contact you shortly.');
            bookingForm.reset(); // Clear the form
          }, function (error) {
            console.error('Failed to send email:', error);
            alert('Oops! Something went wrong. Please try again.');
          });
      });
    }
  });