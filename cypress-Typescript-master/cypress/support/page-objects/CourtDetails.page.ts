
export class CourtDetailsPage{
     
   selectCourt() {
        return cy.xpath("//*[text()='בחירת בית דין שרעי']").first();
   }
}

export const courtDetails = new CourtDetailsPage();

