import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

/**
 * A custom View component that supports theme-based background colors.
 * It uses the `useThemeColor` hook to apply background colors for light and dark modes.
 *
 * @param {ThemedViewProps} props - The component props.
 * @param {StyleProp<ViewStyle>} [props.style] - Optional styles to apply to the view.
 * @param {string} [props.lightColor] - Optional background color for light mode.
 * @param {string} [props.darkColor] - Optional background color for dark mode.
 * @returns {JSX.Element} The rendered themed view component.
 */
export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
