import { useEffect } from 'react';

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  callback: () => void;
  description?: string;
}

/**
 * Hook for managing keyboard shortcuts across the application
 */
export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const {
          key,
          ctrlKey = false,
          metaKey = false,
          shiftKey = false,
          callback
        } = shortcut;

        const keyMatches = event.key.toLowerCase() === key.toLowerCase();
        const ctrlMatches = event.ctrlKey === ctrlKey;
        const metaMatches = event.metaKey === metaKey;
        const shiftMatches = event.shiftKey === shiftKey;

        if (keyMatches && ctrlMatches && metaMatches && shiftMatches) {
          event.preventDefault();
          callback();
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcuts]);
};

/**
 * Predefined shortcuts for common actions
 */
export const createSearchShortcut = (onActivate: () => void): KeyboardShortcut => ({
  key: '/',
  callback: onActivate,
  description: 'Focus search input'
});

export const createEscapeShortcut = (onActivate: () => void): KeyboardShortcut => ({
  key: 'Escape',
  callback: onActivate,
  description: 'Clear search or close modal'
});