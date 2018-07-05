import { element, by, promise, ElementFinder } from 'protractor';

export class OrderItemComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-order-item div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class OrderItemUpdatePage {
    pageTitle = element(by.id('jhi-order-item-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    quantityInput = element(by.id('field_quantity'));
    totalPriceInput = element(by.id('field_totalPrice'));
    statusSelect = element(by.id('field_status'));
    productSelect = element(by.id('field_product'));
    orderSelect = element(by.id('field_order'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setQuantityInput(quantity): promise.Promise<void> {
        return this.quantityInput.sendKeys(quantity);
    }

    getQuantityInput() {
        return this.quantityInput.getAttribute('value');
    }

    setTotalPriceInput(totalPrice): promise.Promise<void> {
        return this.totalPriceInput.sendKeys(totalPrice);
    }

    getTotalPriceInput() {
        return this.totalPriceInput.getAttribute('value');
    }

    setStatusSelect(status): promise.Promise<void> {
        return this.statusSelect.sendKeys(status);
    }

    getStatusSelect() {
        return this.statusSelect.element(by.css('option:checked')).getText();
    }

    statusSelectLastOption(): promise.Promise<void> {
        return this.statusSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }
    productSelectLastOption(): promise.Promise<void> {
        return this.productSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    productSelectOption(option): promise.Promise<void> {
        return this.productSelect.sendKeys(option);
    }

    getProductSelect(): ElementFinder {
        return this.productSelect;
    }

    getProductSelectedOption() {
        return this.productSelect.element(by.css('option:checked')).getText();
    }

    orderSelectLastOption(): promise.Promise<void> {
        return this.orderSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    orderSelectOption(option): promise.Promise<void> {
        return this.orderSelect.sendKeys(option);
    }

    getOrderSelect(): ElementFinder {
        return this.orderSelect;
    }

    getOrderSelectedOption() {
        return this.orderSelect.element(by.css('option:checked')).getText();
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
