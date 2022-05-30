import { eSubSubject } from '..';

export class SubSubjectFilePage{

   SendRequestBtnBySubSubject(subSubject: eSubSubject) {
    return cy.xpath("//*[text()=['${subSubject}']/ancestor::div[1]//*[text()='להגשת בקשה']").first();
}
}
export const subSubjectFile = new SubSubjectFilePage();