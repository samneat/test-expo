import React from 'react';
import { render } from '@testing-library/react-native';
import { HelloWave } from './hello-wave';

describe('HelloWave', () => {
  it('renders the waving hand emoji', () => {
    const { getByText } = render(<HelloWave />);
    const wavingHand = getByText('👋');
    expect(wavingHand).toBeDefined();
  });
});
