// src/app/lib/supabaseRequests.ts

import { API_URL, API_KEY } from "../../../config";
import { Article } from "../types/sb_articleTypes";

// fetches all articles with all associated data
export async function fetchArticles(): Promise<Article[]> {
  const myHeaders = new Headers();
  myHeaders.append("apikey", API_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as RequestRedirect
  };

  try {
    const response = await fetch(`${API_URL}/articles?select=*,article_images(*),article_videos(*),article_hero(*)`, requestOptions);
    const result: Article[] = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching articles data:", error);
    throw error;
  }
}

// fetch article overview data (slug, title, image)

export async function fetchArticlesSummary(): Promise<Article[]> {
    const myHeaders = new Headers();
    myHeaders.append("apikey", API_KEY);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect
    };
  
    try {
      const response = await fetch(`${API_URL}/articles?select=title,slug,article_hero(*)`, requestOptions);
      const result: Article[] = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching articles summary data:", error);
      throw error;
    }
}

// fetch single article slug based on slug value
export async function fetchArticlesSlugs(): Promise<Article[]> {
    const myHeaders = new Headers();
    myHeaders.append("apikey", API_KEY);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect
    };
  
    try {
      const response = await fetch(`${API_URL}/articles?&select=slug`, requestOptions);
      const result: Article[] = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching articles summary data:", error);
      throw error;
    }
}

// fetches latest 3 articles
export async function fetchLatestArticlesSummary(): Promise<Article[]> {
    const myHeaders = new Headers();
    myHeaders.append("apikey", API_KEY);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect
    };
  
    try {
      const response = await fetch(`${API_URL}/articles?select=title,slug,article_hero(*)&order=created_at.desc&limit=3`, requestOptions);
      const result: Article[] = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching articles summary data:", error);
      throw error;
    }
}

// fetch single article based on slug value

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const myHeaders = new Headers();
  myHeaders.append("apikey", API_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as RequestRedirect
  };

  try {
    const response = await fetch(`${API_URL}/articles?slug=eq.${slug}&select=*,article_images(*),article_videos(*),article_hero(*)&limit=1`, requestOptions);
    
    // Assuming the API returns an array, get the first element
    const result: Article[] = await response.json();
    
    // Return the first article or null if not found
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error fetching article data:", error);
    throw error;
  }
}