describe('ExpressionChangedAfterItHasBeenChecked', () => {
  it('passes', () => {
    cy.visit('http://localhost:4000')
    cy.get('.p-dropdown').click().then(el => {
      cy.get('.p-highlight').then(selectedOpt => {
        const nextOption = selectedOpt.parent().next().children();
        nextOption.trigger("click");
        Cypress.log({
          message: nextOption.text()
        }).snapshot('after');
      });
    })
  })
})