import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * A hook to get the current color scheme, adapted for web to support static rendering.
 * This ensures that the color scheme is re-calculated on the client side after hydration.
 *
 * @returns {'light' | 'dark'} The current color scheme. Defaults to 'light' on the server
 * and during initial client render.
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}
