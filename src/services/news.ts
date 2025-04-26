/**
 * Represents a news article with title, summary, and content.
 */
export interface NewsArticle {
  /**
   * The title of the news article.
   */
  title: string;
  /**
   * A short summary of the news article.
   */
  summary: string;
  /**
   * The full content of the news article.
   */
  content: string;
  /**
   * URL of the featured image for the article.
   */
  imageUrl: string;
}

/**
 * Asynchronously retrieves a list of news articles.
 *
 * @returns A promise that resolves to an array of NewsArticle objects.
 */
export async function getNewsArticles(): Promise<NewsArticle[]> {
  // TODO: Implement this by calling an external API.

  return [
    {
      title: 'Breaking News: Local Event',
      summary: 'A summary of the local event...',
      content: 'The full content of the local event...',
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      title: 'National Election Results',
      summary: 'A summary of the election results...',
      content: 'The full content of the election results...',
      imageUrl: 'https://example.com/image2.jpg',
    },
  ];
}
