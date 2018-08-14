import { AngularImageUploadPage } from './app.po';

describe('angular-image-upload App', () => {
  let page: AngularImageUploadPage;

  beforeEach(() => {
    page = new AngularImageUploadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
