/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

const credentials = {
    email: "milkica21422@gmail.com",
    password: "Vedervax5"
};

describe("login tests", () =>{
    before("visit app and click the login link", () =>{
        cy.visit("/");
        loginPage.loginLink.click();
    });
    
    it("login with valid credentials", () =>{
        loginPage.login(credentials.email, credentials.password);
    });
});