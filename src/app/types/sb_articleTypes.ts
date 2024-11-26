// src/app/types/articleTypes.ts

export interface ArticleHero {
    id: number;
    type: string;
    caption: string;
    alt_text: string;
    image_url: string;
    article_id: number;
    created_at: string;
}

export interface ArticleImage {
    id: number;
    type: string;
    caption: string;
    alt_text: string;
    image_url: string;
    article_id: number;
    created_at: string;
    order_index: number;
}
  
export interface ArticleVideo {
    id: number;
    type: string;
    caption: string;
    alt_text: string;
    autoplay: boolean;
    video_url: string;
    article_id: number;
    created_at: string;
    order_index: number;
    thumbnail_url: string;
}
  
export interface ArticleDescription {
    content: string;
}
  
export interface Article {
    content(arg0: string, content: any): unknown;
    id: number;
    created_at: string;
    title: string;
    description: ArticleDescription;
    slug: string | null;
    youtube: string | null;
    hero_url: string | null;
    article_images: ArticleImage[];
    article_videos: ArticleVideo[];
    article_hero: ArticleHero[];
}