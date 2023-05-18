export class SignUp{
    //L.O.C.A.T.O.R.S
    register_btn_locator= ':nth-child(1) > .btn';
    register_btnOnRegisterPage_locator= ':nth-child(2) > .btn';
    emailField_locator= '#email';
    firstName_registerPage_locator= '#firstName';
    lastName_registerPage_locator= '#lastName';
    email_registerPage_locator= '#email';
    pwd_registerPage_locator= '#password';
    confirmPwd_registerPage_locator= '#confirmPassword';
    //M.E.T.H.O.D.S
    navigator(url){
        cy.visit(url);
    }
    confirmUrl(){
        cy.url().should('include', '/register')
    }
    registerBtnClick(){
        cy.get(this.register_btn_locator)
        .should('contain', 'Register')
        .should('be.visible')
        .click();
    }
    registerBtnClick2(){
        cy.get(this.register_btnOnRegisterPage_locator)
        .should('be.visible')
        .click();
    }
    emailWithValidationChecks(test1, test2, test3, test4){
        cy.get(this.emailField_locator)
        .should('be.visible')
        .type(test1)
        cy.get(':nth-child(2) > .btn').click()
        cy.get(this.emailField_locator)
        .clear()
        cy.wait(2000);
        cy.focused().clear();
        cy.wait(2000);
        cy.get(this.emailField_locator)
        .type(test2)
        cy.get(':nth-child(2) > .btn').click()
        cy.get(this.emailField_locator)
        .clear()
        cy.focused().clear();
        cy.wait(2000);

        cy.get(this.emailField_locator)
        .type(test3)
        cy.get(':nth-child(2) > .btn').click()
        cy.get(this.emailField_locator)
        .clear()
        cy.focused().clear();
        cy.wait(2000);
    }
    enterFirstNameOnRegister(firstName){
        cy.get(this.firstName_registerPage_locator)
        .type(firstName)
        // cy.fixture('testdata').then(function(testdata){
        //     this.testdata= testdata;
        // })
        // cy.get(this.firstName_registerPage_locator)
        // .type(this.testdata.f)
    }
    enterLastNameOnRegister(lastName){
        cy.get(this.lastName_registerPage_locator)
        .type(lastName)
    }
    enterEmailOnRegister(email){
        cy.get(this.emailField_locator)
        .type(email)
    }
    enterPwdOnRegister(pwd){
        cy.get(this.pwd_registerPage_locator)
        .type(pwd)
    }
    enterConfirmPwdOnRegister(cpwd){
        cy.get(this.confirmPwd_registerPage_locator)
        .type(cpwd)
    }
}