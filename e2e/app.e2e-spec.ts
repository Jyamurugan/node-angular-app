import { NodeAngularAppPage } from './app.po';

describe('node-angular-app App', () => {
  let page: NodeAngularAppPage;

  beforeEach(() => {
    page = new NodeAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
