import { UniversitatwebPage } from './app.po';

describe('universitatweb App', () => {
  let page: UniversitatwebPage;

  beforeEach(() => {
    page = new UniversitatwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
