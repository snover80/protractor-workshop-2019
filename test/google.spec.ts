import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    it('then should have a title', async () => {
      await browser.get('http://www.google.com');
      await expect(browser.getTitle()).toEqual('Google');
    });
  });
});
