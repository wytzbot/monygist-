const params = new URLSearchParams(window.location.search);
const id = params.get('id') || 'coffee-shop';

fetch('/asset/data/businesses.json')
.then(res => res.json())
.then(data => {
  const biz = data.find(b => b.id === id);
  if(!biz) return;
  document.getElementById('pageTitle').innerText = biz.name + " | MonyGist";
  document.getElementById('businessName').innerText = biz.name;
  document.getElementById('businessSummary').innerText = biz.summary;
  document.getElementById('startupCost').innerText = formatMoney(biz.startup);
  document.getElementById('monthlyProfit').innerText = formatMoney(biz.profit);
});
