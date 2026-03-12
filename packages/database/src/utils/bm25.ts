/**
 * Escape special tantivy query syntax characters in user input for BM25 search
 */
export function sanitizeBm25Query(query: string): string {
  const sanitized = query.replaceAll(/[+\-&|!(){}[\]^"~*?:\\/]/g, '\\$&').trim();
  if (!sanitized) throw new Error('Query is empty after sanitization');
  return sanitized;
}
