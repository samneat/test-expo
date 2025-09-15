/**
 * A hook to get the current color scheme.
 * This is the default implementation for native platforms (iOS and Android).
 * It re-exports the `useColorScheme` hook directly from `react-native`.
 *
 * For web, a separate implementation is provided in `use-color-scheme.web.ts`
 * to handle server-side rendering and hydration.
 *
 * @returns {'light' | 'dark' | null | undefined} The current color scheme.
 * @see https://reactnative.dev/docs/usecolorscheme
 */
export { useColorScheme } from 'react-native';
