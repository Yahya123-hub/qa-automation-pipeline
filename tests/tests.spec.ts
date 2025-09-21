import { test, expect } from '@playwright/test';

test('Playwright homepage has correct title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Navigation bar is visible', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('header')).toBeVisible();
});

test('Docs link is present', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('text=Docs')).toBeVisible();
});

test('Get started button exists', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('text=Get started')).toBeVisible();
});

test('Footer contains Playwright text', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('footer')).toContainText('Playwright');
});
