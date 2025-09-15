import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedText } from './themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

// Mock the useThemeColor hook
jest.mock('@/hooks/use-theme-color', () => ({
  useThemeColor: jest.fn(),
}));

describe('ThemedText', () => {
  beforeEach(() => {
    // Reset the mock before each test
    (useThemeColor as jest.Mock).mockClear();
  });

  it('renders children correctly', () => {
    (useThemeColor as jest.Mock).mockReturnValue('black');
    const { getByText } = render(<ThemedText>Hello World</ThemedText>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('applies default styles', () => {
    (useThemeColor as jest.Mock).mockReturnValue('black');
    const { getByText } = render(<ThemedText>Default Text</ThemedText>);
    const textElement = getByText('Default Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: 'black' }),
        expect.objectContaining({ fontSize: 16, lineHeight: 24 }),
      ])
    );
  });

  it('applies title styles', () => {
    (useThemeColor as jest.Mock).mockReturnValue('blue');
    const { getByText } = render(<ThemedText type="title">Title Text</ThemedText>);
    const textElement = getByText('Title Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: 'blue' }),
        expect.objectContaining({ fontSize: 32, fontWeight: 'bold', lineHeight: 32 }),
      ])
    );
  });

  it('uses the color from useThemeColor hook', () => {
    (useThemeColor as jest.Mock).mockReturnValue('red');
    const { getByText } = render(<ThemedText>Colored Text</ThemedText>);
    const textElement = getByText('Colored Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: 'red' }),
      ])
    );
  });
});
