import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

/**
 * A hook to get a color from the theme based on the current color scheme.
 * It can also optionally take a light and dark color prop to override the theme.
 *
 * @param props - An object with optional 'light' and 'dark' color properties.
 * @param {string} [props.light] - The color to use in light mode.
 * @param {string} [props.dark] - The color to use in dark mode.
 * @param colorName - The name of the color to retrieve from the theme.
 * @returns {string} The resolved color for the current theme.
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
