import { useCallback } from 'react';

/**
 * Hook for prefetching external URLs on hover to improve UX
 * Preloads the target URL when user hovers over a link
 */
export const usePrefetchOnHover = (url: string) => {
  const handleMouseEnter = useCallback(() => {
    // Create a link element for prefetching
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    
    // Check if prefetch link already exists
    const existingLink = document.querySelector(`link[rel="prefetch"][href="${url}"]`);
    
    if (!existingLink) {
      document.head.appendChild(link);
      
      // Clean up after a delay to avoid cluttering the DOM
      setTimeout(() => {
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      }, 30000); // Remove after 30 seconds
    }
  }, [url]);

  const handleMouseLeave = useCallback(() => {
    // Optional: Could implement cleanup logic here if needed
  }, []);

  return {
    handleMouseEnter,
    handleMouseLeave
  };
};