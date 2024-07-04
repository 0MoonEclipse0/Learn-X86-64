function copyToClipboard(id) {
  const codeElement = document.getElementById(id);
  const range = document.createRange();
  range.selectNode(codeElement);
  window.getSelection().removeAllRanges(); // Clear previous selections
  window.getSelection().addRange(range); // Select the text
  document.execCommand("copy"); // Copy the selected text
  window.getSelection().removeAllRanges(); // Deselect
}
