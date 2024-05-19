describe("DELETE /user", () => {
  beforeEach(() => {
    cy.fixture("user/delete").then(function (user) {
      this.user = user;
    });
  });

  it("delete a user", function () {
    const { user } = this.user.delete;

    cy.deleteUser(user.id).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
