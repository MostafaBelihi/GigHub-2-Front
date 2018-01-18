import { GigHubFrontPage } from './app.po';

describe('gig-hub-front App', function() {
  let page: GigHubFrontPage;

  beforeEach(() => {
    page = new GigHubFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
