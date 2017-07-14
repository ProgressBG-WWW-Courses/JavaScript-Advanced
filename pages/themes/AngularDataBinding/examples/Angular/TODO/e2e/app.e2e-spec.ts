import { TODOPage } from './app.po';

describe('todo App', () => {
  let page: TODOPage;

  beforeEach(() => {
    page = new TODOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
