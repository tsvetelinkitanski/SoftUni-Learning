function getArticleGenerator(input) {
  let articles = input;

  return () => {
    if (articles.length) {
      let container = document.getElementById("content");
      let article = document.createElement("article");
      let currTxt = articles.shift();
      article.textContent = currTxt;
      container.appendChild(article);
    }
  };
}
