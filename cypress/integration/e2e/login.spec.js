import { url, login_username, login_password } from '../../../config';
import Navbar from '../../page-objects/components/Navbar';
import LoginPage from '../../page-objects/pages/LoginPage';

describe('Login Failure Test', () => {
	before(function () {
		cy.visit(url);
		Navbar.clickSignIn();
	});

	it('should try to login with invalid credentials', () => {
		LoginPage.login('invalid', 'testing');
	});

	it('should display error message', () => {
		LoginPage.displayErrorMessage();
	});
});

describe('Login Success Test', () => {
	before(() => {
		cy.visit(url);
		Navbar.clickSignIn();
	});

	it('should try to login with valid credentials', () => {
		LoginPage.login(login_username, login_password);
	});

	it('should verify successful login', () => {
		LoginPage.verifySuccessfulLogin();
	});

	it('should logout from application', () => {
		Navbar.logout();
		Navbar.displaySignInButton();
	});
});
