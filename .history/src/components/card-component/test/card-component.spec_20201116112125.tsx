import { newSpecPage } from '@stencil/core/testing';
import { CardComponent } from '../card-component';

describe('card-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardComponent],
      html: `<card-component></card-component>`,
    });
    expect(page.root).toEqualHtml(`
      <card-component>
        <mock:shadow-root>
        <article>
          <h2 class="header" slot="title" />
          <p class="content " slot="content" />
          <div class="footer" slot="cta" />
        </article>
        </mock:shadow-root>
      </card-component>
    `);
  });
});
