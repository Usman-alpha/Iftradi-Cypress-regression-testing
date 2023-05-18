export class Login{
    //L.O.C.A.T.O.R.S
    emailField_locator= ':nth-child(1) > .form-control'; 
    pwdField_locator= ':nth-child(2) > .form-control';
    loginBtn_locator= ':nth-child(2) > .btn';
    forgotPwdLink_locator= '.float-right';
    rememberMeCheck_locator= '.vx-checkbox-con > input';
    //M.E.T.H.O.D.S
    navigator(url){
        cy.visit(url);
    }
    confirmUrl(){
        cy.url().should('include', '/')
    }
    loginBtnClick(){
        cy.get(this.loginBtn_locator)
        .should('contain', 'Login')
        .should('be.visible')
        .click();
    }
    enterEmail(email){
        cy.get(this.emailField_locator)
        .type(email)
    }
    enterPwd(pwd){
        cy.get(this.pwdField_locator)
        .type(pwd)
    }
    forgotPwdLinkClicker(){
        cy.get(this.forgotPwdLink_locator).click();
    }
    rememberMe(){
        cy.get(this.rememberMeCheck_locator).click();
        cy.wait(1000);
        cy.get(this.rememberMeCheck_locator).uncheck()
    }
}