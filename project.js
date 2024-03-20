const feedbackMessage = document.getElementById('feedback-message');

function submitRating() {
  const selectedRating = document.querySelector('.star-rating input:checked').value;
  if (selectedRating) {
    feedbackMessage.textContent = `Thank you for your ${selectedRating} star rating!`;
  } else {
    feedbackMessage.textContent = 'Please select a rating before submitting.';
  }
}
