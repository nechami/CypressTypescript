import { eTopToolbar,eRequestType } from "../Enums";
import { home } from "../page-objects/Home.page";
import { subjectFile } from "../page-objects/SubjectFile.page";

export class BeforStepProcess {
   
  //צעד מקדים
    public static preliminaryStep(topToolbar: eTopToolbar, request: eRequestType) {
      cy.click(home.topToolbar(topToolbar));
      cy.click(home.LetsStartBtn());
      cy.click(subjectFile.selectRequest(request));
    }
}
