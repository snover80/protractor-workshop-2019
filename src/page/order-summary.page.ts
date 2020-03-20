import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmOrderButton: ElementFinder;

  constructor() {
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public async selectConfirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
