import { newSpecPage } from '@stencil/core/testing';
import { RssReader } from '../rss-reader';

describe('rss-reader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RssReader],
      html: `<rss-reader></rss-reader>`,
    });
    expect(page.root).toEqualHtml(`
      <rss-reader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rss-reader>
    `);
  });
});
