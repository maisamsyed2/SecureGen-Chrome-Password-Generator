document.addEventListener('DOMContentLoaded', function () {
    const range = document.getElementById('passwordLength');
    const rangeValue = document.getElementById('rangeValue');
    const generateBtn = document.getElementById('generatePassword');
    const passwordInput = document.getElementById('generatedPassword');
    const copyBtn = document.getElementById('copyPassword');
  
    // Update the range value display
    range.addEventListener('input', function () {
      rangeValue.textContent = range.value;
    });
  
    // Generate a random password
    generateBtn.addEventListener('click', function () {
      const length = range.value;
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      passwordInput.value = password;
    });
  
    // Copy the generated password to the clipboard
    copyBtn.addEventListener('click', function () {
      passwordInput.select();
      document.execCommand('copy');
      alert('Password copied to clipboard!');
    });
  });
  