// src/components/ArticlesList2.tsx
'use client'

import { useEffect, useState } from 'react';
import { fetchArticles } from '../lib/sb_allDataArticles';
import { Article } from '../types/sb_articleTypes';

const ArticlesList2 = () => {
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        const json = await fetchArticles();
        console.log(json)
        setArticlesList(json);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchArticlesData();
  }, [currentPage]); // Include currentPage in dependency array to re-fetch articles when page changes

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Articles List</h1>
      <ul>
        {articlesList.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description.content}</p>
            <p>Created at: {article.created_at}</p>
            {article.article_images.map((image) => (
              <div key={image.id}>
                <img src={image.image_url} alt={image.alt_text} />
                <p>{image.caption}</p>
              </div>
            ))}
            {article.article_videos.map((video) => (
              <div key={video.id}>
                <video width="320" height="240" controls>
                  <source src={video.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>{video.caption}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ArticlesList2;