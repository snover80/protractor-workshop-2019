import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailTextBox: ElementFinder;
  private passwordTextBox: ElementFinder;
  private signInButton: ElementFinder;

  constructor() {
    this.emailTextBox = $('#email');
    this.passwordTextBox = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  public async setEmail(email: string): Promise<void> {
    await this.emailTextBox.sendKeys(email);
  }

  public async setPassword(passwd: string): Promise<void> {
    await this.passwordTextBox.sendKeys(passwd);
  }

  public async selectSignIn(): Promise<void> {
    await this.signInButton.click();
  }
}
