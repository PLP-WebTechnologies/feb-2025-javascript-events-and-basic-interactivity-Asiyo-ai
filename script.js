// Event Handling
const clickBtn = document.getElementById('clickBtn');
const clickMessage = document.getElementById('clickMessage');
const keypressInput = document.getElementById('keypressInput');
const keypressMessage = document.getElementById('keypressMessage');

clickBtn.addEventListener('click', () => {
  clickMessage.textContent = 'Button clicked!';
});

clickBtn.addEventListener('dblclick', () => {
  alert('Secret double-click detected! 🤫');
});

keypressInput.addEventListener('keypress', (e) => {
  keypressMessage.textContent = `You pressed: ${e.key}`;
});

// Interactive Elements
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  colorBtn.style.backgroundColor = colorBtn.style.backgroundColor === 'green' ? '#3498db' : 'green';
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabContents.forEach(tab => tab.classList.remove('active'));
    document.getElementById(`tab-${button.dataset.tab}`).classList.add('active');
  });
});

// Form Validation
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

email.addEventListener('input', () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.textContent = regex.test(email.value) ? '' : 'Invalid email format';
});

password.addEventListener('input', () => {
  passwordError.textContent = password.value.length >= 8 ? '' : 'Password must be at least 8 characters';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!email.value || !password.value || emailError.textContent || passwordError.textContent) {
    formMessage.textContent = 'Please fix the errors above.';
    formMessage.className = 'error';
  } else {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.className = 'success';
  }
});
