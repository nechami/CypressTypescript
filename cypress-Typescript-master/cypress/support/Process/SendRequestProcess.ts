import { eCourt, eSubSubject } from "../Enums";
import { subSubjectFile } from "../page-objects/SubSubjectFile.page";

export class SendRequestProcess {
   
    public static selectRequest(SubSubject: eSubSubject) {
      cy.click(subSubjectFile.SendRequestBtnBySubSubject(eSubSubject.ConsensualDivorce));
    }

    public static selectCourt(SubSubject: eCourt) {
        cy.click(subSubjectFile.SendRequestBtnBySubSubject(eSubSubject.ConsensualDivorce));
      }
}
