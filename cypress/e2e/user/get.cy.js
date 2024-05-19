describe("GET /user", () => {
  beforeEach(() => {
    cy.fixture("user/get").then(function (user) {
      this.user = user;
    });
  });

  it("get a user", function () {
    const { user } = this.user.get;

    cy.getUser(user.id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(user.name);
      expect(response.body.username).to.eq(user.username);
      expect(response.body.email).to.eq(user.email);
      expect(response.body.address.street).to.eq(user.address.street);
      expect(response.body.address.suite).to.eq(user.address.suite);
      expect(response.body.address.city).to.eq(user.address.city);
      expect(response.body.address.zipcode).to.eq(user.address.zipcode);
      expect(response.body.address.geo.lat).to.eq(user.address.geo.lat);
      expect(response.body.address.geo.lng).to.eq(user.address.geo.lng);
      expect(response.body.phone).to.eq(user.phone);
      expect(response.body.website).to.eq(user.website);
      expect(response.body.company.name).to.eq(user.company.name);
      expect(response.body.company.catchPhrase).to.eq(user.company.catchPhrase);
      expect(response.body.company.bs).to.eq(user.company.bs);
    });
  });
});
