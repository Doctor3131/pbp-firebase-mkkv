import { useColorScheme } from './useColorScheme';
import { Colors } from '@/constants/Colors';

/**
 * Custom hook to get theme-aware colors
 * @param props - Object with optional light and dark color overrides
 * @param colorName - Name of the color from Colors constant
 * @returns The appropriate color based on current theme
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
