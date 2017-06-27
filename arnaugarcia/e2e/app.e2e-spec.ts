import { ArnaugarciaPage } from './app.po';

describe('arnaugarcia App', () => {
  let page: ArnaugarciaPage;

  beforeEach(() => {
    page = new ArnaugarciaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
