import {Login} from './pages/login'

const Log= new Login();
    describe('Login test suite.', ()=> {
        beforeEach(()=> {
            cy.viewport(1320, 768)
            // Log.navigator('https://oofoq-beta.invo.zone/');
            // cy.wait(3000);
        })
        it('Submittion without inputs.', ()=> {
            Log.loginBtnClick();
            cy.wait(1000);
        })
        it('Rememmber me checkbox test.', ()=> {
            Log.rememberMe();
        })
        it.only('Login test.', ()=> {
            cy.login('admin@iftradi.com', 'Password123!');
            cy.wait(2000);
        })
        after(()=> {
            Cypress.session.clearAllSavedSessions();
        })
        //Quick login normal test in case something goes wrong. This is for debugging purpose. 
        // it.only('sample login.', ()=> {
        //     cy.get(':nth-child(1) > .form-control').type('mad-max@getnada.com')
        //     cy.get(':nth-child(2) > .form-control').type('Max@12345')
        //     cy.get(':nth-child(2) > .btn').click();
        // })
    })