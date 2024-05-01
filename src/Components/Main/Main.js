import React from 'react'
import Article from '../Article/Article'
import RecentArticle from '../RecentPost/RecentArticle'
import SideBarArticle from "../SideBarArticle/SideBarArticle";

const Main = () => {
  return (
    <>
      <div class="container container-flex">
        <main role="main">
          <Article />
          {new Array(5).fill(0).map((e, index) => {
            return <RecentArticle key={index} />;
          })}
        </main>

        <aside class="sidebar">
          {new Array(6).fill(0).map((e, index) => {
            return <SideBarArticle key={index} />;
          })}
        </aside>
      </div>
    </>
  );
}

export default Main