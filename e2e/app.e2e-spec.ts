import { SystemsrmPage } from './app.po';

describe('systemsrm App', function() {
  let page: SystemsrmPage;

  beforeEach(() => {
    page = new SystemsrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
