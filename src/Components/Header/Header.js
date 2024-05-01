import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div class="container container-flex">
          <div class="site-title">
            <h1>A Blog WebPage</h1>
            <p class="subtitle">A blog exploring Finance Blogs.</p>
          </div>
          <nav>
            <ul>
              <li>
                {" "}
                <a href="#" class="current-page">
                  Home
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">About Me</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Recent Posts</a>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </header>{" "}
    </>
  );
}

export default Header