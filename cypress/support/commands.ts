Cypress.Commands.add('login', (email, password) => {
  console.log('login command')
})

declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
    drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
  }
}
