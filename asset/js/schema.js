// Adds FAQ schema so you rank
const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much does it cost to start a business?",
    "acceptedAnswer": {"@type": "Answer", "text": "It depends on country and business type. Use our calculator."}
  }]
};
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schema);
document.head.appendChild(script);
