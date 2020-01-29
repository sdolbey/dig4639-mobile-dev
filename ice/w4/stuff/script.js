const Article = require("./Article.js");

let article = new Article(
  {
    title: "Thing Happened! Much important!",
    author: "John Murray",
    text: "This is the text!"
  }
);

console.log(article.render() );
