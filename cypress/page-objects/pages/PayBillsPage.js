import BasePage from './BasePage';
import AccountTabs from '../components/AccountTabs';

export default class PayBillsPage extends BasePage {
	static clickPayBillsTab() {
		AccountTabs.gotoPayBills();
	}

	static selectPayee(payee) {
		cy.get('#sp_payee').select(payee);
	}

	static selectAccount(account) {
		cy.get('#sp_account').select(account);
	}

	static fillAmount(amount) {
		cy.get('#sp_amount').type(amount);
	}

	static fillDate(date) {
		cy.get('#sp_date').type(`${date} {enter}`);
	}

	static fillDescription(comment) {
		cy.get('#sp_description').type(comment);
	}

	static submitPay() {
		cy.get('.btn-primary[value="Pay"]').click();
	}
}
