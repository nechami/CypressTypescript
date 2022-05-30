import { eRequestType } from '..';

export class SubjectFilePage{

   selectRequest(request: eRequestType) {
    return cy.xpath("//*[text()=['${request}']").first();
}
}

export const subjectFile = new SubjectFilePage();