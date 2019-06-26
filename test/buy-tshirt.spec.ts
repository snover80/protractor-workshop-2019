import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModal, SummaryStepPage, SignInStepPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage, OrderSummaryPage, OrderConfirmationPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModal = new ProductAddedModal();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const orderConfirmationPage: OrderConfirmationPage = new OrderConfirmationPage();

  const email: string = 'aperdomobo@gmail.com';
  const passwd: string = 'WorkshopProtractor';
  const expectedConfirmationText: string = 'Your order on My Store is complete.';

  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(10000));
  });

  it('then should be bought a t-shirt', async () => {
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));

    await productListPage.selectTShirtProduct();
    await (browser.sleep(3000));

    await productAddedModalPage.selectProceedToCheckout();
    await (browser.sleep(3000));

    await summaryStepPage.selectProceedToCheckout();
    await (browser.sleep(3000));

    await signInStepPage.setEmail(email);
    await signInStepPage.setPassword(passwd);
    await signInStepPage.selectSignIn();
    await (browser.sleep(3000));

    await addressStepPage.selectProceedToCheckout();
    await (browser.sleep(3000));

    await shippingStepPage.selectTermsOfService();
    await shippingStepPage.selectProceedToCheckout();
    await (browser.sleep(3000));

    await paymentStepPage.selectPayByBankWire();
    await (browser.sleep(3000));

    await orderSummaryPage.selectConfirmOrder();
    await (browser.sleep(3000));

    await expect(orderConfirmationPage.getConfirmationText()).toBe(expectedConfirmationText);
  });
});
