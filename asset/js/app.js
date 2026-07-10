// PWA Install
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
});

// Components loader
function loadComponent(id, file){
  fetch(`asset/components/${file}`)
  .then(r=>r.text())
  .then(html => document.getElementById(id).innerHTML = html)
}

// Email Gate for downloads
function showDownloadPopup(content){
  document.getElementById('emailPopup').style.display='flex';
  window.downloadContent = content;
}
function downloadFile(){
  const email = document.getElementById('emailInput').value;
  if(!email.includes('@')) return alert('Enter valid email');
  localStorage.setItem('userEmail', email);
  
  const blob = new Blob([window.downloadContent], {type: 'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'MonyGist-Results.txt';
  a.click();
  document.getElementById('emailPopup').style.display='none';
  alert('Downloaded! Check your files')
}

// Close popup on click outside
document.addEventListener('click', e => {
  if(e.target.id === 'emailPopup') e.target.style.display='none'
})
