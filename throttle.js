function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return; // Ignore the call if it's within the delay period
    }
    lastCall = now; // Update the last call time
    return func(...args); // Call the original function
  };
}

function sendChatMessage(message) {
  // Simulate sending a chat message
  console.log("Sending Message:", message);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2000);

sendChatMessageWithSlowMode("Hello");
sendChatMessageWithSlowMode("Hello Ji");
sendChatMessageWithSlowMode("Hello Ji How are you?");
sendChatMessageWithSlowMode("Hello Ji How are you? I am fine");

