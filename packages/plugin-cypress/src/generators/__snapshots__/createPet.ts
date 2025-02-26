export function createPets(data?: CreatePetsMutationResponse): Chainable<CreatePetsMutationResponse> {
  return cy.request('post', '/pets', data || undefined)
}
