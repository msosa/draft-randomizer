import { DraftRandomizerPage } from './app.po';

describe('draft-randomizer App', () => {
  let page: DraftRandomizerPage;

  beforeEach(() => {
    page = new DraftRandomizerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
