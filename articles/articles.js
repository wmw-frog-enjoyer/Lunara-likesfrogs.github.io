fetch("/articles/articles.json")
  .then((res) => res.json())
  .then((articles) => {
    const container = document.getElementById("articles");

    articles.forEach((a) => {
      const card = document.createElement("a");

      card.href = `/articles/article.html?id=${a.id}`;
      card.className = "article-card";

      card.innerHTML = `
        <h2>${a.title}</h2>
        <p>${a.author} • ${a.date}</p>
      `;

      container.appendChild(card);
    });
  });
