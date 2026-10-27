// Shared utility functions for all PesanFormal pages

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function selectRecipient(el) {
  document.querySelectorAll('.recipient-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function selectRadio(el) {
  const group = el.closest('.radio-group');
  group.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}
