function profitCalc(){
  let profit = (+profitRev.value - +profitCost.value);
  document.getElementById('profitResult').innerText = "Your Monthly Profit: " + formatMoney(profit);
}
function beCalc(){
  let months = (+beCost.value / +beProfit.value); 
  beResult.innerText = "Break Even in: " + months.toFixed(1) + " months";
}
function roiCalc(){
  let roi = ((+roiProfit.value / +roiInvest.value) * 100); 
  roiResult.innerText = "ROI: " + roi.toFixed(1) + "%";
}
function scCalc(){
  let total = (+sc1.value +sc2.value +sc3.value); 
  scResult.innerText = "Total Needed: " + formatMoney(total);
}
