import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render h1 tag', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { name: 'Hello world!' });
    const button = screen.getByRole('button', { name: 'Click' });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
