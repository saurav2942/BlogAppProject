import React from 'react'

const RecentArticle = () => {
  return (
    <>
      <article class="article-recent">
        <div class="article-recent-main">
          <h2 class="article-title">Keeping Blogging simple </h2>
          <p class="article-body">
            Et do consectetur ea magna magna incididunt minim duis sint dolor. Voluptate excepteur excepteur elit minim commodo culpa pariatur anim. Laboris sunt dolore labore irure aliqua cupidatat qui exercitation exercitation qui incididunt amet ad occaecat. Dolor aute fugiat aliquip reprehenderit eiusmod. Aliquip do amet ut do duis qui voluptate sint officia aute. Aute nisi culpa labore quis eiusmod minim deserunt dolor.
          </p>
          <a href="#" class="article-read-more">
            CONTINUE READING
          </a>
        </div>
        <div class="article-recent-secondary">
          <img
            src="https://raw.githubusercontent.com/kevin-powell/reponsive-web-design-bootcamp/master/Module%202-%20A%20simple%20life/img/food.jpg"
            alt="two dumplings on a wood plate with chopsticks"
            class="article-image"
          />
          <p class="article-info">July 19, 2019 | 3 comments</p>
        </div>
      </article>
    </>
  );
}

export default RecentArticle