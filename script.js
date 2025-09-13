document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = 'Message sent. Thank you!';
  this.reset();
});
