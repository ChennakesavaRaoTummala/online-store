import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { OrderItemComponentsPage, OrderItemUpdatePage } from './order-item.page-object';

describe('OrderItem e2e test', () => {
    let navBarPage: NavBarPage;
    let orderItemUpdatePage: OrderItemUpdatePage;
    let orderItemComponentsPage: OrderItemComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load OrderItems', () => {
        navBarPage.goToEntity('order-item');
        orderItemComponentsPage = new OrderItemComponentsPage();
        expect(orderItemComponentsPage.getTitle()).toMatch(/storeApp.orderItem.home.title/);
    });

    it('should load create OrderItem page', () => {
        orderItemComponentsPage.clickOnCreateButton();
        orderItemUpdatePage = new OrderItemUpdatePage();
        expect(orderItemUpdatePage.getPageTitle()).toMatch(/storeApp.orderItem.home.createOrEditLabel/);
        orderItemUpdatePage.cancel();
    });

    it('should create and save OrderItems', () => {
        orderItemComponentsPage.clickOnCreateButton();
        orderItemUpdatePage.setQuantityInput('5');
        expect(orderItemUpdatePage.getQuantityInput()).toMatch('5');
        orderItemUpdatePage.setTotalPriceInput('5');
        expect(orderItemUpdatePage.getTotalPriceInput()).toMatch('5');
        orderItemUpdatePage.statusSelectLastOption();
        orderItemUpdatePage.productSelectLastOption();
        orderItemUpdatePage.orderSelectLastOption();
        orderItemUpdatePage.save();
        expect(orderItemUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
