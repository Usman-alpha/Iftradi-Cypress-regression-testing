import {SignUp} from './pages/signup'
import { faker } from '@faker-js/faker';

const Sign= new SignUp();
describe('All tests suite.', ()=> {
    describe('Sign Up test suite.', ()=> {
        before(() => {
            // Clear all sessions before running tests
            cy.clearCookies()
            cy.clearLocalStorage()
        })
        beforeEach(()=> {
            cy.viewport(1024, 768)
            Sign.navigator('https://iftradi.com/login');
            cy.wait(2000);

            cy.get('.dropdown-language-login').click();
            cy.wait(1000);
            cy.get('.dropdown-menu > :nth-child(1)').click();
            cy.wait(2000);
        })
        it('Register button test.', ()=> {
            Sign.registerBtnClick();
            cy.wait(3000);
            // Sign.confirmUrl();
            cy.go('back');
            cy.wait(2000);
            cy.go('forward');
            cy.wait(2000);
        })
        it('Submittion without inputs.', ()=> {
            Sign.registerBtnClick();
            cy.wait(1000);
            Sign.registerBtnClick2();
            cy.wait(3000);
        })
        it('Email Validations check.', ()=> {
            Sign.registerBtnClick();
            cy.wait(1000);
            Sign.emailWithValidationChecks('test', 'test@test', 'test.com');
        })
        it('Enter credentials in sign up form and click register.', ()=> {
            Sign.registerBtnClick();
            cy.wait(1000);
            const fn= faker.name.firstName('male')
            Sign.enterFirstNameOnRegister(fn);
            cy.wait(1000);
            const ln= faker.name.lastName('male')
            Sign.enterLastNameOnRegister(ln);
            cy.wait(1000);
            // faker.internet.exampleEmail(fn?: string, ln?: string, options?: {
            //     allowSpecialCharacters: boolean
            // } = { allowSpecialCharacters: false })
            const em= faker.internet.exampleEmail();
            Sign.enterEmailOnRegister(em);
            cy.wait(1000);
            Sign.enterPwdOnRegister('Demo@12345');
            cy.wait(1000);
            Sign.enterConfirmPwdOnRegister('Demo@12345');
            cy.wait(2000);
            Sign.registerBtnClick2();
        })
    })
})