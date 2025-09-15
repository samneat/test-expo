import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';

/**
 * An iOS-specific component for rendering SF Symbols using the `expo-symbols` library.
 *
 * @param {object} props - The component props.
 * @param {SymbolViewProps['name']} props.name - The name of the SF Symbol to display.
 * @param {number} [props.size=24] - The size of the icon.
 * @param {string} props.color - The color of the icon.
 * @param {StyleProp<ViewStyle>} [props.style] - Optional styles to apply to the icon.
 * @param {SymbolWeight} [props.weight='regular'] - The weight of the symbol (e.g., 'bold', 'light').
 * @returns {JSX.Element} The rendered SF Symbol.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
