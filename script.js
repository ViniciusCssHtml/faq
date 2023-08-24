function faq() {
  const dt = document.querySelectorAll('dt');
  dt.forEach((item) => {
    item.addEventListener('click', faqItem);
  });

  function faqItem() {
    this.nextElementSibling.classList.toggle('ativo');
    this.classList.toggle('ativo');
  }
}
faq();
