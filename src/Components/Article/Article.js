import React from 'react'

const Article = () => {
  return (
    <>
      <article class="article-featured">
        <h2 class="article-title"> Article Title </h2>
        <img
          src="https://raw.githubusercontent.com/kevin-powell/reponsive-web-design-bootcamp/master/Module%202-%20A%20simple%20life/img/life.jpg"
          alt="simple white desk on a white wall with a plant on the far right side"
          class="article-image"
        />
        <p class="article-info">July 23, 2019 | 3 comments</p>
        <p class="article-body">
          Magna sint occaecat mollit consectetur magna nostrud sunt occaecat. Labore nisi nisi duis eu eiusmod pariatur aute. Aliqua elit et aute exercitation laboris est sit. Reprehenderit culpa veniam in aliquip aliquip Lorem ad qui quis sunt quis pariatur.
        </p>
        <a href="#" class="article-read-more">
          CONTINUE READING
        </a>
      </article>
    </>
  );
}

export default Article