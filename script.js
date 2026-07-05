function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("All fields must be filled!");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid email format!");
    return false;
  }
  // Allow + at start for international numbers
  let phoneDigits = phone.startsWith("+") ? phone.slice(1) : phone;
  if (isNaN(phoneDigits)) {
    alert("Phone must contain only digits (after +)!");
    return false;
  }
  return true;
}
