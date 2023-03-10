/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage";

describe("Register test", () =>{
    let userData ={
        firstName:"Milka",
        lastName:"Skoric",
        email: "milkica211r422@gmail.com",
        password:"Vedervax5",
        shortPassword:"pass",
        invalidEmail:"testmail.com"
    };

    before("visit app and click on the register link", () =>{
        cy.visit("/");
        registerPage.registerLink.click();
        cy.url().should("contain", "/register");
    });

    it("register with valid data", ()=>{
        registerPage.registerWithValidData(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password
        );
        cy.url().should("not.contain", "/register");
    });
});