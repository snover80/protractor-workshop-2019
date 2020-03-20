import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async selectProceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
