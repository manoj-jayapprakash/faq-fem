import { describe, expect, test } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  test('faq should open/close  by clicking it', async () => {
    const user = userEvent.setup();
    render(<App />);

    const faqs = screen.getByTestId('faqs');

    const faqItems = within(faqs).getAllByRole('group');

    faqItems.forEach(async (faq) => {
      const faqSummary = within(faq).getByRole('heading');
      await user.click(faqSummary);
      await waitFor(() => {
        expect(within(faq).getByRole('paragraph')).toBeVisible();
      });
      await user.click(faqSummary);
      await waitFor(() => {
        expect(within(faq).getByRole('paragraph')).not.toBeVisible();
      });
    });
  });
});
