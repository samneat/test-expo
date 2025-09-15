// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS and falls back to Material Icons on
 * Android and web. This ensures a consistent look across platforms while using native resources
 * where possible.
 *
 * The `name` prop is based on SF Symbol names and requires a manual mapping to Material Icons
 * in the `MAPPING` object.
 *
 * @param {object} props - The component props.
 * @param {IconSymbolName} props.name - The name of the icon, based on SF Symbols.
 * @param {number} [props.size=24] - The size of the icon.
 * @param {string | OpaqueColorValue} props.color - The color of the icon.
 * @param {StyleProp<TextStyle>} [props.style] - Optional styles to apply to the icon.
 * @param {SymbolWeight} [props.weight] - The font weight of the icon (unused in fallback).
 * @returns {JSX.Element} The rendered Material Icon.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
