import { AngularBasicPage } from './app.po';

describe('angular-basic App', () => {
  let page: AngularBasicPage;

  beforeEach(() => {
    page = new AngularBasicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
