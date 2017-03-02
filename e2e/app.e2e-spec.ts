import { Angular2TransclusionPage } from './app.po';

describe('angular2-transclusion App', () => {
  let page: Angular2TransclusionPage;

  beforeEach(() => {
    page = new Angular2TransclusionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
