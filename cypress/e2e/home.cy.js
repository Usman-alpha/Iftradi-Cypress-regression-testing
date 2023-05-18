import {Home} from './pages/home';
import { faker } from '@faker-js/faker';

const HomeObj= new Home();
describe('Home page test suite.', ()=> {
    before(()=> {
        //Setting up viewport size
        cy.viewport(1320, 768);
        //Login using valid credentials
        // Beta Creds
        // cy.login('mad-max@getnada.com', 'Max@12345');
        // Dev Creds
        cy.login('admin@iftradi.com', 'Password123!');
        // // Set a cookie
        // cy.setCookie('my-cookie-name', 'cookie-value');
        // // Start a new Cypress session to preserve the cookie
        // cy.session({
        // setup: () => {
        //     // Get the value of the cookie
        //     cy.getCookie('my-cookie-name').then((cookie) => {
        //     const cookieValue = cookie.value;
        //     // Do something with the cookie value
        //     });
        // },
        // });
    })

    it('All navigations form home', ()=> {
        cy.loginSession;
        cy.wait(2000);
        HomeObj.gotoDashboard();
        
        cy.wait(4000);

        HomeObj.dashboardNavigator();
        cy.wait(4000);
        cy.go('back');
        cy.wait(2000);
        cy.go('forward');

        cy.wait(2000);
        HomeObj.roles();

        cy.wait(2000);
        HomeObj.userClicker();
        cy.wait(2000);
        HomeObj.addUser('usman', 'malik', 'test@test.com', '12345678', '12345678');
        cy.wait(1000);


    })

    // it.only('Login and preseve session for use.', ()=> {
    //     cy.login('mad-max@getnada.com', 'Max@12345')
    //     cy.wait(2000);
    //     HomeObj.gotoDashboard();
    //     cy.wait(3000);
    // })
})