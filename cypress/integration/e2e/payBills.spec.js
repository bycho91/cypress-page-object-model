import { url, login_username, login_password } from '../../../config';
import Navbar from '../../page-objects/components/Navbar';
import PayBillsPage from '../../page-objects/pages/PayBillsPage';

describe('Testing Pay Bills', () => {
	before(() => {
		cy.visit(url);
		Navbar.clickSignIn();
		cy.login(login_username, login_password);
	});

	it('should goto Pay bills tab', () => {
		PayBillsPage.clickPayBillsTab();
	});

	it('should fill in the form', () => {
		PayBillsPage.selectPayee('Apple');
		PayBillsPage.selectAccount('Loan');
		PayBillsPage.fillAmount(3000);
		PayBillsPage.fillDate('2021-12-21');
		PayBillsPage.fillDescription('This is a test');
		PayBillsPage.submitPay();
	});
});
