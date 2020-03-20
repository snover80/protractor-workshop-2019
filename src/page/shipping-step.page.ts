import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private temsOfServiceCheckBox: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.temsOfServiceCheckBox = $('#cgv');
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async selectTermsOfService(): Promise<void> {
    await this.temsOfServiceCheckBox.click();
  }

  public async selectProceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
