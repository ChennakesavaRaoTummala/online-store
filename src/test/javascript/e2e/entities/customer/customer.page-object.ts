import { element, by, promise, ElementFinder } from 'protractor';

export class CustomerComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-customer div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CustomerUpdatePage {
    pageTitle = element(by.id('jhi-customer-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    firstNameInput = element(by.id('field_firstName'));
    lastNameInput = element(by.id('field_lastName'));
    genderSelect = element(by.id('field_gender'));
    emailInput = element(by.id('field_email'));
    phoneInput = element(by.id('field_phone'));
    addressLine1Input = element(by.id('field_addressLine1'));
    addressLine2Input = element(by.id('field_addressLine2'));
    cityInput = element(by.id('field_city'));
    countryInput = element(by.id('field_country'));
    userSelect = element(by.id('field_user'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setFirstNameInput(firstName): promise.Promise<void> {
        return this.firstNameInput.sendKeys(firstName);
    }

    getFirstNameInput() {
        return this.firstNameInput.getAttribute('value');
    }

    setLastNameInput(lastName): promise.Promise<void> {
        return this.lastNameInput.sendKeys(lastName);
    }

    getLastNameInput() {
        return this.lastNameInput.getAttribute('value');
    }

    setGenderSelect(gender): promise.Promise<void> {
        return this.genderSelect.sendKeys(gender);
    }

    getGenderSelect() {
        return this.genderSelect.element(by.css('option:checked')).getText();
    }

    genderSelectLastOption(): promise.Promise<void> {
        return this.genderSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }
    setEmailInput(email): promise.Promise<void> {
        return this.emailInput.sendKeys(email);
    }

    getEmailInput() {
        return this.emailInput.getAttribute('value');
    }

    setPhoneInput(phone): promise.Promise<void> {
        return this.phoneInput.sendKeys(phone);
    }

    getPhoneInput() {
        return this.phoneInput.getAttribute('value');
    }

    setAddressLine1Input(addressLine1): promise.Promise<void> {
        return this.addressLine1Input.sendKeys(addressLine1);
    }

    getAddressLine1Input() {
        return this.addressLine1Input.getAttribute('value');
    }

    setAddressLine2Input(addressLine2): promise.Promise<void> {
        return this.addressLine2Input.sendKeys(addressLine2);
    }

    getAddressLine2Input() {
        return this.addressLine2Input.getAttribute('value');
    }

    setCityInput(city): promise.Promise<void> {
        return this.cityInput.sendKeys(city);
    }

    getCityInput() {
        return this.cityInput.getAttribute('value');
    }

    setCountryInput(country): promise.Promise<void> {
        return this.countryInput.sendKeys(country);
    }

    getCountryInput() {
        return this.countryInput.getAttribute('value');
    }

    userSelectLastOption(): promise.Promise<void> {
        return this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    userSelectOption(option): promise.Promise<void> {
        return this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    save(): promise.Promise<void> {
        return this.saveButton.click();
    }

    cancel(): promise.Promise<void> {
        return this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
