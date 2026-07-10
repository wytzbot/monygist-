const countrySwitcher = document.getElementById('countrySwitcher');
const CURRENCY = {US:'$', UK:'£', CA:'C$', NG:'₦'};
const RATES = {US:1, UK:0.8, CA:1.3, NG:1600}; // Rough FX for demo

// Load saved country
const savedCountry = localStorage.getItem('country') || 'US';
if(countrySwitcher) countrySwitcher.value = savedCountry;

// Load saved theme
if(localStorage.getItem('dark')==='true') document.body.classList.add('dark');

function toggleDark(){
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark'));
}

countrySwitcher?.addEventListener('change', e => {
  localStorage.setItem('country', e.target.value);
  location.reload(); // reload to update all prices and articles
});

function formatMoney(amountUSD){
  const country = localStorage.getItem('country') || 'US';
  const rate = RATES[country];
  const converted = Math.round(amountUSD * rate);
  return CURRENCY[country] + converted.toLocaleString();
}

// Email + Download System
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
  a.download = 'MonyGist-Calculator-Results.txt';
  a.click();
  document.getElementById('emailPopup').style.display='none';
    }
