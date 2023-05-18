import { faker } from '@faker-js/faker';

export class Home{
    //L.O.C.A.T.O.R.S
    logoBtn_locator= '.mr-auto';
    dashboardOpt_locator= '.dropdown-user > .nav-link > span';
    dashboardClicker_locator= '.min-width-0 > :nth-child(1)';
    rolesClicker_locator= ':nth-child(3) > .d-flex';
    users_locator= ':nth-child(4) > .d-flex';

    addUser_locator= '.open > .menu-content > :nth-child(1) > a';
    addUserFirstName_locator= '#firstName';
    addUserLastName_locator= '#lastName';
    addUserEmail_locator= '#email';
    addUserPassword_locator= '#password';
    addUserConfirmPassword_locator= '#confirmPassword';
    addUserCheck_locator= '.vx-checkbox-con > input';
    addUserTimeZone_locator= ':nth-child(6) > .col-md-10 > .React > .select__control > .select__indicators > .select__indicator';
    addUserRole_locator= ':nth-child(7) > .col-md-10 > .React > .select__control > .select__indicators > .select__indicator';
    addUserCancelBtn_locator= ':nth-child(2) > .mb-1';

    dongleClicker_locator= '.content-wrapper';

    allUsers_locator= '.open > .menu-content > :nth-child(2) > a';
    meetings_locator= ':nth-child(5) > .d-flex';
    scheduleMeeting_locator= '.open > .menu-content > :nth-child(1) > a';
    meetingList_locator= '.open > .menu-content > :nth-child(2) > a';
    calendar_locator= '.menu-content > :nth-child(3) > a';
    activities_locator= ':nth-child(6) > .d-flex';
    media_locator= ':nth-child(7) > .d-flex';
    meetingWidget_locator= '#meeting';


    //M.E.T.H.O.D.S
    navigator(url){
        cy.visit(url);
    }
    // confirmUrl(){
    //     cy.url().should('include', '/')
    // }
    // confirmDashboardUrl(){
    //     cy.url.should('include', '/dashboard')
    // }
    // confirmUsersListUrl(){
    //     cy.url.should('include', '/admin/all-users')
    // }
    // confirmCalendarUrl(){
    //     cy.url.should('include', '/calendar')
    // }
    gotoDashboard(){
        cy.get(this.dashboardOpt_locator)
        .click();
    }
    dashboardNavigator(){
        cy.get(this.dashboardClicker_locator)
        .click();
    }
    roles(){
        cy.get(this.rolesClicker_locator)
        .click();
    }
    userClicker(){
        cy.get(this.users_locator)
        .click();
    }
    addUser(fnName, ltName, email, pwd, cpwd){

        cy.get(this.addUser_locator)
        .click();
        cy.get(this.addUserFirstName_locator)
        .type(fnName);
        cy.get(this.addUserLastName_locator)
        .type(ltName);
        cy.get(this.addUserEmail_locator)
        .type(email);
        cy.get(this.addUserPassword_locator)
        .type(pwd);
        cy.get(this.addUserConfirmPassword_locator)
        .type(cpwd);
        cy.get(this.addUserCheck_locator)
        .check();
        cy.get(this.addUserCheck_locator)
        .uncheck();
        cy.get(this.addUserTimeZone_locator)
        .click();
        cy.get(this.dongleClicker_locator)
        .click();
        cy.get(this.addUserRole_locator)
        .click();
        cy.get(this.dongleClicker_locator)
        .click();
        cy.wait(2000);
        cy.get(this.addUserCancelBtn_locator)
        .click();
    }
}