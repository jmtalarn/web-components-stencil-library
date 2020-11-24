import { newE2EPage } from '@stencil/core/testing';

describe('rss-reader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rss-reader></rss-reader>');

    const element = await page.find('rss-reader');
    expect(element).toHaveClass('hydrated');
  });
});
