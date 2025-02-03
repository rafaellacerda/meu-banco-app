import { test, expect } from '@playwright/test';

test('validate required fields', async ({ page }) => {
	await page.goto('http://localhost:5173');

	await page.getByRole('button', { name: 'ENTRAR' }).click();

	await expect(page.getByText('Usuário é obrigatório')).toBeVisible();
	await expect(page.getByText('Senha é obrigatória')).toBeVisible();
});

test('validate only letters', async ({ page }) => {
	await page.goto('http://localhost:5173');

	await page.getByRole('textbox', { name: 'Usuário' }).fill('tide123');

	await page.getByRole('button', { name: 'ENTRAR' }).click();
	await expect(page.getByText('Somente letras são permitidas')).toBeVisible();
});

test('validate wrong user', async ({ page }) => {
	await page.goto('http://localhost:5173');

	await page.getByRole('textbox', { name: 'Usuário' }).fill('teste');
	await page.getByRole('textbox', { name: 'Senha' }).fill('teste');

	await page.getByRole('button', { name: 'ENTRAR' }).click();
	await expect(page.getByText('Usuário ou senha inválidos!')).toBeVisible();
});

test('login', async ({ page }) => {
	await page.goto('http://localhost:5173');

	await page.getByRole('textbox', { name: 'Usuário' }).fill('tidec');
	await page.getByRole('textbox', { name: 'Senha' }).fill('Tide123!');

	await page.getByRole('button', { name: 'ENTRAR' }).click();

	await page.waitForURL('http://localhost:5173/dashboard', { timeout: 5000 });

	await expect(page.getByText('Bem-vindo')).toBeVisible();
});
