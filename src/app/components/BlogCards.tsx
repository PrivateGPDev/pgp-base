'use client'

import { useEffect, useState } from "react";
import { fetchArticlesSummary } from "../lib/sb_allDataArticles";
import { Article } from "../types/sb_articleTypes";
import { CardSkeleton } from "./UI/skeletons";
import { Card } from "./UI/AllCards";
import clsx from "clsx";
import Link from "next/link";

export default function BlogCards() {
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        const json = await fetchArticlesSummary();
        console.log(json)
        setArticlesList(json);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchArticlesData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Link href="/articles">See Articles</Link>
      <div className="w-full flex flex-col md:flex-col-reverse my-10">
        {articlesList && articlesList.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full">
            {articlesList.map((article) => (
              <Card key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 w-full">
            <div className="bg-slate-800 rounded-lg p-4 w-full min-h-32 h-full">
              <span className="font-bold">No More items!</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}