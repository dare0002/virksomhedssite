function togglePanel(button) {
  var panel = button.nextElementSibling;
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}