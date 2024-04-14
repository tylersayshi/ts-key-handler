import { useEffect } from 'react';
import { ShortcutWithHandler } from './types';
import { handleShortcuts } from './utils';

/**
 * Helper hook to handle a single key shortcut with a listener
 *
 * Please memoize your listener! :)
 *
 * @example
 *   import { useKeyHandler } from '@/utils';
 *   const handleShortcuts = useMemo<ShortcutWithHandler[]>(
 *     () => [
 *       ['shift+a', handleShiftA],
 *       ['shift+b', handleShiftB],
 *     ],
 *     []
 *   );
 *   useKeyHandler('shift+a', handleShortcuts);
 *
 * @param shortcut String representation of the shortcut to trigger listener on
 * @param listener Callback to handle event when key shortcut is pressed
 */
export const useKeyHandlers = (...handlers: ShortcutWithHandler[]) => {
  useEffect(() => {
    const handler = handleShortcuts(...handlers);
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [handlers]);
};
