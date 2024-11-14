import {expect, type Locator, type Page} from "@playwright/test";
import { NavBarPage } from "../pages/NavBar.page";
let navBarPage: NavBarPage

export class HomePage {
    readonly page: Page;
    readonly mainTitle: Locator;
    readonly dynamicTableLink: Locator;
    readonly textInputLink: Locator;
    readonly classAttributeLink: Locator;
    readonly hiddenLayerLink: Locator;
    readonly loadDelayLink: Locator;
    readonly ajaxDataLink: Locator;
    readonly sampleAppLink: Locator;
    readonly clientSideDelayLink: Locator;
    readonly verifyTextLink: Locator
    


    constructor(page: Page) {
        this.page = page;
        this.mainTitle = page.locator("#title");
        this.dynamicTableLink = page.locator("#overview .container .row:nth-child(3) .col-sm:nth-child(2) a");
        this.textInputLink = page.locator("#overview .container .row:nth-child(2) .col-sm:nth-child(4) a");
        this.classAttributeLink = page.locator("#overview .container .row:nth-child(1) .col-sm:nth-child(2) a")
        this.hiddenLayerLink = page.locator("#overview .container .row:nth-child(1) .col-sm:nth-child(3) a")
        this.loadDelayLink = page.locator("#overview .container .row:nth-child(1) .col-sm:nth-child(4) a")
        this.ajaxDataLink = page.locator("#overview .container .row:nth-child(2) .col-sm:nth-child(1) a")
        this.sampleAppLink = page.locator("#overview .container .row:nth-child(4) .col-sm:nth-child(2) a")
        this.clientSideDelayLink = page.locator("#overview .container .row:nth-child(2) .col-sm:nth-child(2) a")
        this.verifyTextLink = page.locator("#overview .container .row:nth-child(3) .col-sm:nth-child(3) a")



    }

    public async checkMainTitle() {
        await expect(this.mainTitle).toBeVisible();
        await expect(this.mainTitle).toHaveText('UI Test AutomationPlayground');
    }
    public async clickDynamicTableLink() {
        await this.dynamicTableLink.click();
    }

    public async clickTextInputLink() {
        await this.textInputLink.click();
    }

    public async clickClassAttributeLink() {
        await this.classAttributeLink.click();
    }

    public async clickHiddenLayerLink() {
        await this.hiddenLayerLink.click();
    }

    public async clickLoadDelayLink() {
        await this.loadDelayLink.waitFor({timeout:5000});
        await this.loadDelayLink.click();
    }

    public async clickAjaxDataLink() {
        await this.ajaxDataLink.click();
    }

    public async clickSampleAppLink() {
        await this.sampleAppLink.click();
    }

    public async clickClientSideDelayLink() {
        await this.clientSideDelayLink.click();
    }

    public async clickVerifyTextLink() {
        await this.verifyTextLink.click();
    }

















}