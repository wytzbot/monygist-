document.getElementById('recommenderForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = new FormData(e.target);
  const budget = form.get('budget');
  const time = form.get('time');
  const risk = form.get('risk');
  
  let results = [];
  if(budget === '$0-$1k') results = ['airbnb', 'freelance', 'dropshipping'];
  else if(time === '5hrs') results = ['airbnb', 'vending-machine', 'carwash'];
  else results = ['coffee-shop', 'food-truck', 'gym'];
  
  let html = '<h3>Your Top 3 Matches:</h3>';
  results.forEach(id => {
    html += `<a href="/ideas/?id=${id}" class="card">${id.replace('-',' ')}</a>`;
  });
  document.getElementById('quizResult').innerHTML = html;
});
