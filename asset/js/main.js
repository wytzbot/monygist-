// Save country choice and format money
const countrySwitcher = document.getElementById('countrySwitcher');
const CURRENCY = {US:'$', UK:'£', CA:'C$', NG:'₦'};

if(localStorage.getItem('country')){
  countrySwitcher.value = localStorage.getItem('country');
}

countrySwitcher.addEventListener('change', e => {
  localStorage.setItem('country', e.target.value);
  location.reload(); // reload to update all prices
});

function formatMoney(amount){
  const country = localStorage.getItem('country') || 'US';
  return CURRENCY[country] + amount.toLocaleString();
}
