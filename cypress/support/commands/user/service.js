Cypress.Commands.add("postUser", (user) => {
  cy.api({
    url: "/users",
    method: "POST",
    body: user,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("getUser", (id) => {
  cy.api({
    url: `/users/${id}`,
    method: "GET",
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("editUser", (user) => {
  cy.api({
    url: `/users/${user.id}`,
    method: "PUT",
    body: user,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("deleteUser", (id) => {
  cy.api({
    url: `/users/${id}`,
    method: "DELETE",
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});
