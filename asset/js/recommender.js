function recommendBusiness(){
  const budget = +document.getElementById('budgetInput').value;
  const country = localStorage.getItem('country') || 'US';
  
  fetch('asset/data/businesses.json')
  .then(r=>r.json())
  .then(data => {
    let matches = data.filter(b => b.startup[country] <= budget);
    let html = '<h3>Best Businesses for Your Budget:</h3>';
    matches.slice(0,3).forEach(b => {
      html += `<div class="card"><h4>${b.name}</h4><p>Profit: ${formatMoney(b.profit[country])}</p></div>`
    })
    document.getElementById('recResult').innerHTML = html;
  })
}
