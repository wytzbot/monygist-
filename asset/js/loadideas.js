fetch('asset/data/businesses.json')
.then(r=>r.json())
.then(data => {
  const country = localStorage.getItem('country') || 'US';
  let html = '';
  data.forEach(biz => {
    html += `
    <div class="card">
      <h3>${biz.name}</h3>
      <p><b>Capital Needed:</b> ${formatMoney(biz.startup[country])}</p>
      <p><b>Monthly Profit:</b> ${formatMoney(biz.profit[country])}</p>
      <p><b>Best Location:</b> ${biz.location}</p>
      <p><b>Limitations:</b> ${biz.limitations}</p>
      <p><b>Competitors:</b> ${biz.competitors}</p>
      <p><b>How to Beat Them:</b> ${biz.howToBeat}</p>
      <p><b>Biggest Mistake:</b> ${biz.mistake}</p>
      <button class="btn btn-primary" onclick="showDownloadPopup('${biz.name}: Profit ${formatMoney(biz.profit[country])}')">Save This Idea</button>
    </div>`;
  });
  document.getElementById('categoryGrid').innerHTML = html;
});
