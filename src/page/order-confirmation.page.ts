import { $, ElementFinder } from 'protractor';

export class OrderConfirmationPage {
  private confirmationText: ElementFinder;

  constructor() {
    this.confirmationText = $('#center_column > div > p > strong');
  }

  public async getConfirmationText(): Promise<string> {
    return await this.confirmationText.getText();
  }
}
