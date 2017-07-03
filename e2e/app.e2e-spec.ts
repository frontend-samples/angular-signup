import { AngularSignupPage } from './app.po';

describe('angular-signup App', () => {
  let page: AngularSignupPage;

  beforeEach(() => {
    page = new AngularSignupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
