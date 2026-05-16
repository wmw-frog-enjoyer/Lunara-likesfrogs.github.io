fetch("articles.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("articles");

    data.forEach((article) => {
      const card = document.createElement("a");

      card.className = "article-card";
      card.href = article.file;

      card.innerHTML = `
                <h2>${article.title}</h2>
                <p>Author: ${article.author}</p>
                <p>Date: ${article.date}</p>
                <p>Tags: ${article.tags.join(", ")}</p>
            `;

      container.appendChild(card);
    });
  });
