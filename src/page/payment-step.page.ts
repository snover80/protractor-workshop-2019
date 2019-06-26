import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireButton: ElementFinder;
  private payByCheckButton: ElementFinder;

  constructor() {
    this.payByBankWireButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    this.payByCheckButton = $('#HOOK_PAYMENT > div:nth-child(2) > div > p > a');
  }

  public async selectPayByBankWire(): Promise<void> {
    await this.payByBankWireButton.click();
  }

  public async selectPayByCheck(): Promise<void> {
    await this.payByCheckButton.click();
  }
}
