export default class AccountTabs {
	static gotoAccountSummary() {
		cy.get('#account_summary_tab').click();
	}
	static gotoAccountActivity() {
		cy.get('#account_activity_tab').click();
	}
	static gotoTransferFunds() {
		cy.get('#transfer_funds_tab').click();
	}
	static gotoPayBills() {
		cy.get('#pay_bills_tab').click();
	}
	static gotoMoneyMap() {
		cy.get('#money_map_tab').click();
	}
	static gotoOnlineStatements() {
		cy.get('#online_statements_tab').click();
	}
}
