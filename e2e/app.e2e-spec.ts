import { SchemerPage } from './app.po';

describe('schemer App', function() {
  let page: SchemerPage;

  beforeEach(() => {
    page = new SchemerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
