import { BasePage } from "./BasePage";


export class Step4Page extends  BasePage{    

   clickOnRdbAttachReport() {
        return cy.click("//*[text()='המסמך המצורף חייב בצרוף']");
   }

   clickOnRdbNoAttachReport() {
    return cy.click("//*[text()='המסמך המצורף אינו חייב בצרוף']");
}

}

export const step4Page = new Step4Page();