import { element, by, promise, ElementFinder } from 'protractor';

export class ProductComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-product div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProductUpdatePage {
    pageTitle = element(by.id('jhi-product-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    descriptionInput = element(by.id('field_description'));
    priceInput = element(by.id('field_price'));
    sizeSelect = element(by.id('field_size'));
    imageInput = element(by.id('file_image'));
    productCategorySelect = element(by.id('field_productCategory'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setNameInput(name): promise.Promise<void> {
        return this.nameInput.sendKeys(name);
    }

    getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    setDescriptionInput(description): promise.Promise<void> {
        return this.descriptionInput.sendKeys(description);
    }

    getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    setPriceInput(price): promise.Promise<void> {
        return this.priceInput.sendKeys(price);
    }

    getPriceInput() {
        return this.priceInput.getAttribute('value');
    }

    setSizeSelect(size): promise.Promise<void> {
        return this.sizeSelect.sendKeys(size);
    }

    getSizeSelect() {
        return this.sizeSelect.element(by.css('option:checked')).getText();
    }

    sizeSelectLastOption(): promise.Promise<void> {
        return this.sizeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }
    setImageInput(image): promise.Promise<void> {
        return this.imageInput.sendKeys(image);
    }

    getImageInput() {
        return this.imageInput.getAttribute('value');
    }

    productCategorySelectLastOption(): promise.Promise<void> {
        return this.productCategorySelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    productCategorySelectOption(option): promise.Promise<void> {
        return this.productCategorySelect.sendKeys(option);
    }

    getProductCategorySelect(): ElementFinder {
        return this.productCategorySelect;
    }

    getProductCategorySelectedOption() {
        return this.productCategorySelect.element(by.css('option:checked')).getText();
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
