describe("check Not Found (404)", () => {
  it("should return status 404 when visiting /unknown", () => {
    cy.request({ url: "/unknown", failOnStatusCode: false })
      .its("status")
      .should("equal", 404);
  });
});
