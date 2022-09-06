describe('Nasdaq E2E test - explore page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Show layout successfully', () => {
    cy.location('pathname').should('include', '/');
    cy.get('[data-testid="layout"]').within(() => {
      cy.get('[data-testid = "header-wrapper"]');
      cy.get('[data-testid = "explore-page"]');
      cy.get('[data-testid = "footer-wrapper"]');
    });

    cy.get('[data-testid="explore-page"]').within(() => {
      cy.get('[data-testid = "explore-title"]');
      cy.get('[data-testid = "explore-search"]');
      cy.get('[data-testid = "infinite-scroll"]');
    });

    cy.get('[data-testid = "infinite-scroll"]').within(() => {
      cy.get('[data-testid = "cards-wrapper"]')
        .children()
        .should('have.length', 15);
    });
  });

  it('Show search result successfully', () => {
    cy.get('[data-testid = "explore-search-input"]').type('A');
    cy.get('[data-testid = "cards-wrapper"]')
      .children()
      .should('have.length', 1);
  });

  it('Show search no result message successfully', () => {
    cy.get('[data-testid = "explore-search-input"]').type('x');
    cy.contains(
      '[data-testid="no-search-res"]',
      'No available stock to be shown in the Search Result For the key "x"'
    );
  });

  it('Clear search res/no result message successfully', () => {
    cy.get('[data-testid = "explore-search-input"]')
      .type('x')
      .then(() => {
        cy.get('[data-testid = "clear-explore-search-input"]').should(
          'be.visible'
        );
        cy.get('[data-testid = "clear-explore-search-input"]').click();
        cy.get('[data-testid = "cards-wrapper"]')
          .children()
          .should('have.length', 15);
      });
  });

  // it('Shows more stocks when scroll', () => {
  //   cy.get('[data-testid="infinite-scroll"]')
  //     .scrollTo(850, 0)
  //     .then(() => {
  //       cy.get('[data-testid = "cards-wrapper"]')
  //         .children()
  //         .should('have.length', 30);
  //     });
  // });

  it('Show more details successfully', () => {
    cy.get('div[data-testid^="card-"]')
      .invoke('attr', 'id')
      .as('dataTestIdValue');

    cy.get('@dataTestIdValue').then((idValue) => {
      cy.log('dataId : ', idValue);
      cy.contains(
        `[data-testid="card-btn-${idValue}"]`,
        'Show more details..'
      ).click();
      cy.location('pathname').should('include', '/StockDetails');
    });
  });
});

describe('Nasdaq E2E test - stock details page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-testid^="card-"]')
      .invoke('attr', 'id')
      .as('dataTestIdValue');

    cy.get('@dataTestIdValue').then((idValue) => {
      cy.log('dataId : ', idValue);
      cy.contains(
        `[data-testid="card-btn-${idValue}"]`,
        'Show more details..'
      ).click();
      cy.location('pathname').should('include', '/StockDetails');
    });
  });

  it('Show stock details page successfully', () => {
    cy.get('[data-testid="stock-details-wrapper"]').within(() => {
      cy.get('[data-testid = "stock-back-btn-wrapper"]');
      cy.get('[data-testid = "stock-logo"]');
      cy.get('[data-testid = "stock-info-wrapper"]');
      cy.get('[data-testid = "stock-statistics-wrapper"]');
      cy.get('[data-testid = "stock-additional-info-wrapper"]');
    });
  });

  it('Show stock statistics based on request response successfully', () => {
    cy.get('[data-testid="stock-details-wrapper"]').then(
      (stockStatisticsDetails) => {
        if (stockStatisticsDetails.find('[data-error="error"]')) {
          stockStatisticsDetails.has(
            '[data-testid="statistics-error-wrapper"]'
          );
        } else {
          cy.get('[data-testid="stock-details-wrapper"]')
            .children()
            .should('have.length', 5);
        }
      }
    );
  });

  it('Show stock additional based on request response successfully', () => {
    cy.get('[data-testid="stock-additional-info-wrapper"]').then(
      (stockAdditionalDetails) => {
        if (stockAdditionalDetails.find('[data-error="error"]')) {
          stockAdditionalDetails.has(
            '[data-testid="additional-info-error-wrapper"]'
          );
        } else {
          cy.get('[data-testid="stock-additional-info-wrapper"]')
            .children()
            .should('have.length', 3);
        }
      }
    );
  });
});
