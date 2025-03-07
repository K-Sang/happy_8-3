
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Chúc các chị em mãi hạnh phúc và được yêu thương. Cảm ơn vì đã như những bông hoa rực rỡ, góp phần cho thế giới thêm muôn màu! (〜￣▽￣)〜').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
