import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tShirtProductButton: ElementFinder;

  constructor() {
    this.tShirtProductButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectTShirtProduct(): Promise<void> {
    await this.tShirtProductButton.click();
  }
}
