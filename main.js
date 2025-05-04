function interpret() {
  const input = document.getElementById("interpreterInput").value;
  const output = document.getElementById("interpreterOutput");
  output.textContent = "Interpreted (simulated): " + input;
}

function askAI() {
  const input = document.getElementById("chatInput").value;
  const chatBox = document.getElementById("chatBox");
  const response = document.createElement("p");
  response.textContent = "AI says: This is a placeholder response to '" + input + "'";
  chatBox.appendChild(response);
  document.getElementById("chatInput").value = "";
}
