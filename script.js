// JavaScript for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Fetch the form data
    const formData = new FormData(this);
    
    // Display the form data 
    for (let [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
    
  });
  