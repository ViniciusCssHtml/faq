function faq() {
  const dt = document.querySelectorAll('dt');
  const dd = document.querySelectorAll('dd');
  dd[0].classList.add('ativo');
  dt.forEach((item) => {
    item.addEventListener('click', faqItem);
  });

  function faqItem() {
    dd.forEach((item) => {
      item.classList.remove('ativo');
    });
    this.nextElementSibling.classList.add('ativo');
    this.classList.toggle('ativo');
  }
}
faq();
