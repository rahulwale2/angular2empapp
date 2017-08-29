import { EmpAppPage } from './app.po';

describe('emp-app App', function() {
  let page: EmpAppPage;

  beforeEach(() => {
    page = new EmpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
