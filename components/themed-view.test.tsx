import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedView } from './themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Text } from 'react-native';

// Mock the useThemeColor hook
jest.mock('@/hooks/use-theme-color', () => ({
  useThemeColor: jest.fn(),
}));

describe('ThemedView', () => {
  beforeEach(() => {
    // Reset the mock before each test
    (useThemeColor as jest.Mock).mockClear();
  });

  it('renders children correctly', () => {
    (useThemeColor as jest.Mock).mockReturnValue('white');
    const { getByText } = render(
      <ThemedView>
        <Text>Child Component</Text>
      </ThemedView>
    );
    const childElement = getByText('Child Component');
    expect(childElement).toBeDefined();
  });

  it('uses the background color from useThemeColor hook', () => {
    (useThemeColor as jest.Mock).mockReturnValue('lightblue');
    const { getByTestId } = render(<ThemedView testID="themed-view" />);
    const viewElement = getByTestId('themed-view');
    expect(viewElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: 'lightblue' }),
      ])
    );
  });
});
