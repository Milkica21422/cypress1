/// <reference types="Cypress" />
describe("gallery test", () => {
    
    const locators=require("../fixtures/locators.json")

    let userData ={
        firstName:"Dragan",
        lastName: "Skoric",
        email: "dragan@yahoo.com",
        password: "dragan12345",
        shortPassword: "pass",
        invalidEmail: "testmail.com"
    }; 

    beforeEach("visit app and click on register link", () =>{
        cy.visit("/");
        cy.get(locators.navbar.registerButton).click();
        cy.url().should("contain", "/register");
    });
    it("register without first name", () => {
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.email);
        cy.get(locators.commonFormElements.passwordInput).type(userData.password);
        cy.get(locators.register.passwordConfirmationInput).type(userData.password);
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register");
      });
      it("register without email address", () => {
        cy.get(locators.register.firstNameInput).type(userData.firstName);
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.passwordInput).type(userData.password);
        cy.get(locators.register.passwordConfirmationInput).type(userData.password);
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register");
      });
    it("register test", () => {
        cy.get(locators.register.firstNameInput).type(userData.firstName);
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.email);
        cy.get(locators.commonFormElements.passwordInput).type(userData.password);
        cy.get(locators.register.passwordConfirmationInput).type(userData.password);
        cy.get(locators.register.tosCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
    });
});