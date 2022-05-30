
import { eTopToolbar } from '..';

export class HomePage{
     public visit() {
          cy.visit('/login');
          cy.url().should('include', 'login')
        }

   topToolbar(topToolbar: eTopToolbar) {
        return cy.xpath('//*[text()='+ topToolbar +']').first();
   }

   LetsStartBtn() {
     return cy.xpath('//button[text()='+ topToolbar + '][contains(@class,"subject")]').first();
     }
}

export const home = new HomePage();

