Cypress.Commands.add('autoSSOLogin', () => {
  // 1. Posjeti login URL da dobiješ sesijske cookie-e
  cy.request({
    method: 'GET',
    url: 'https://secure.booking.com/login.html?aid=2311236&lang=en-gb',
    followRedirect: true
  }).then((response) => {
    // 2. Uhvatiti set-cookie zaglavlja iz odgovora
    const cookies = response.headers['set-cookie']

    cookies.forEach(cookieString => {
      const cookieParts = cookieString.split(';')[0].split('=')
      const name = cookieParts[0]
      const value = cookieParts[1]
      cy.setCookie(name, value)
    })

    // 3. Posjeti stranicu gdje želiš biti autentikovan
    cy.visit('https://www.booking.com/searchresults.en-gb.html?aid=2311236&auth_success=1')
  })
})
