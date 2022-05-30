import { eTopToolbar, eRequestType,eSubSubject ,eCourt} from './../support';
import { BeforStepProcess } from '../support/Process/BeforStepProcess';
import { SendRequestProcess } from '../support/Process/SendRequestProcess';
import { step4Page } from '../support/page-objects/Step4Page';

//בדיקה של PUSH
//תסריט של הגשת בקשה
describe('New Request', () => {
    beforeEach(function () {
        cy.visit('/');
    });
//כניסה לאתר עד להגשת בקשה
    it('שלב ראשוני', function () {
        BeforStepProcess.preliminaryStep(eTopToolbar.openFile,eRequestType.marriage);
    });
//בחירת סוג בקשה ולאחר מכן בחירת פרטי בית דין
    it('פרטי בית דין', function () {
        SendRequestProcess.selectRequest(eSubSubject.ConsensualDivorce);
        SendRequestProcess.selectCourt(eCourt.TelAviv);
    });

    it('פרטי בית דין', function () {
        step4Page.clickOnNextBtn();
        SendRequestProcess.selectCourt(eCourt.TelAviv);
    });
});
