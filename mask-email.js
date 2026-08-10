const email = "yashraj@gmail.com";

function maskEmail(email) {
  const [userName, domain] = email.split("@");
  return userName[0] + "*".repeat(userName.length - 1) + "@" + domain;
}

console.log(maskEmail(email));
