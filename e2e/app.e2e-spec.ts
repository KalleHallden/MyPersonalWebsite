import { KallesWebsitePage } from './app.po';

describe('kalles-website App', function() {
  let page: KallesWebsitePage;

  beforeEach(() => {
    page = new KallesWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
