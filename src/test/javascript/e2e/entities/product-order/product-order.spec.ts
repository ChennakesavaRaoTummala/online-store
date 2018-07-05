import { browser, protractor } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { ProductOrderComponentsPage, ProductOrderUpdatePage } from './product-order.page-object';

describe('ProductOrder e2e test', () => {
    let navBarPage: NavBarPage;
    let productOrderUpdatePage: ProductOrderUpdatePage;
    let productOrderComponentsPage: ProductOrderComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load ProductOrders', () => {
        navBarPage.goToEntity('product-order');
        productOrderComponentsPage = new ProductOrderComponentsPage();
        expect(productOrderComponentsPage.getTitle()).toMatch(/storeApp.productOrder.home.title/);
    });

    it('should load create ProductOrder page', () => {
        productOrderComponentsPage.clickOnCreateButton();
        productOrderUpdatePage = new ProductOrderUpdatePage();
        expect(productOrderUpdatePage.getPageTitle()).toMatch(/storeApp.productOrder.home.createOrEditLabel/);
        productOrderUpdatePage.cancel();
    });

    it('should create and save ProductOrders', () => {
        productOrderComponentsPage.clickOnCreateButton();
        productOrderUpdatePage.setPlacedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(productOrderUpdatePage.getPlacedDateInput()).toContain('2001-01-01T02:30');
        productOrderUpdatePage.statusSelectLastOption();
        productOrderUpdatePage.setCodeInput('code');
        expect(productOrderUpdatePage.getCodeInput()).toMatch('code');
        productOrderUpdatePage.customerSelectLastOption();
        productOrderUpdatePage.save();
        expect(productOrderUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
