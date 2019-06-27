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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();

    await productListPage.selectTShirtProduct();

    await productAddedModalPage.selectProceedToCheckout();

    await summaryStepPage.selectProceedToCheckout();

    await signInStepPage.setEmail(email);
    await signInStepPage.setPassword(passwd);
    await signInStepPage.selectSignIn();

    await addressStepPage.selectProceedToCheckout();

    await shippingStepPage.selectTermsOfService();
    await shippingStepPage.selectProceedToCheckout();

    await paymentStepPage.selectPayByBankWire();

    await orderSummaryPage.selectConfirmOrder();

    await expect(orderConfirmationPage.getConfirmationText()).toBe(expectedConfirmationText);
  });
});
