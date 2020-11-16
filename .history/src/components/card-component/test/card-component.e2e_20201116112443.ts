import { newE2EPage } from '@stencil/core/testing';

describe('card-component', () => {
  it('renders empty', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-component></card-component>');

    const element = await page.find('card-component');
    expect(element).toHaveClass('hydrated');
  });
  it('renders full', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-component><slot name="title">hello</slot></card-component>');

    const element = await page.find('card-component');
    expect(element).toHaveClass('hydrated');
  });
});
