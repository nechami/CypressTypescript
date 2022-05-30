export class BasePage{
    

   clickOnNextBtn() {
        return cy.click("//*[@id='nextBtn']");
   }

   clickOnPreviousBtn() {
    return cy.click("//*[@id='previousBtn']");
   }
    clickOnSaveDraftBtn() {
        return cy.click("//*[@id='saveDrafBtn']");
}
}

export const basePage = new BasePage();