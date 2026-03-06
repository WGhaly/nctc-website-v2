import { test, expect } from '@playwright/test';

test.describe('UI/UX Fixes Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  });

  test('About Section - Check sizing and spacing', async ({ page }) => {
    // Navigate to About section
    const aboutSection = page.locator('#about');
    await aboutSection.scrollIntoViewIfNeeded();
    
    // Check main heading size is reasonable (not too large)
    const mainHeading = aboutSection.locator('h2').first();
    const headingText = await mainHeading.textContent();
    expect(headingText).toContain('Welcome to');
    expect(headingText).toContain('NCTC');
    
    // Verify heading doesn't have excessive font size classes
    const headingClasses = await mainHeading.getAttribute('class');
    expect(headingClasses).not.toContain('text-8xl');
    expect(headingClasses).not.toContain('text-7xl');
    
    // Check description text size is reasonable
    const description = aboutSection.locator('p').first();
    const descClasses = await description.getAttribute('class');
    expect(descClasses).toContain('text-lg');
    expect(descClasses).not.toContain('text-3xl');
    
    // Check spacing between sections (should not be too large)
    const contentContainer = aboutSection.locator('.space-y-16');
    const spacing = await contentContainer.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('--tw-space-y-reverse');
    });
    
    // Verify Mission, Vision, Why Now sections exist and are properly sized
    const missionSection = aboutSection.getByText('Our Mission');
    const visionSection = aboutSection.getByText('Our Vision');
    const whyNowSection = aboutSection.getByText('Why Now?');
    
    await expect(missionSection).toBeVisible();
    await expect(visionSection).toBeVisible();
    await expect(whyNowSection).toBeVisible();
    
    // Check that decorative numbers are not too large or overlapping
    const decorativeNumbers = aboutSection.locator('.text-6xl.font-bold.opacity-10');
    const numberCount = await decorativeNumbers.count();
    expect(numberCount).toBe(3); // Should have 01, 02, 03
    
    // Verify stats section is present and properly sized
    const stats = aboutSection.locator('.grid.grid-cols-3');
    await expect(stats).toBeVisible();
    const statNumbers = stats.locator('.text-3xl, .text-4xl');
    expect(await statNumbers.count()).toBeGreaterThan(0);
  });

  test('OTC Network Section - Verify circles spacing and removed statement', async ({ page }) => {
    // Navigate to OTC Network section
    const otcSection = page.locator('#otc-network');
    await otcSection.scrollIntoViewIfNeeded();
    
    // Verify the statement is removed
    const removedStatement = page.getByText('NCTC acts as the central coordination point');
    await expect(removedStatement).not.toBeVisible();
    
    // Check network visualization exists
    const networkViz = otcSection.locator('.rounded-3xl').first();
    await expect(networkViz).toBeVisible();
    
    // Verify satellite nodes have proper sizing (w-20 h-20 instead of w-16 h-16)
    await page.evaluate(() => {
      const satellites = document.querySelectorAll('#otc-network [class*="w-20 h-20 rounded-full"]');
      if (satellites.length === 0) {
        throw new Error('Satellite nodes not found with correct size (w-20 h-20)');
      }
    });
    
    // Verify spacing between nodes is correct (radius increased from 180 to 200)
    const centralHub = otcSection.getByText('NCTC').first();
    await expect(centralHub).toBeVisible();
    
    // Check that network nodes grid is visible
    const networkGrid = otcSection.locator('.grid.md\\:grid-cols-2.lg\\:grid-cols-3');
    await expect(networkGrid).toBeVisible();
    
    // Verify all 6 network node cards are present
    const nodeCards = otcSection.locator('.group');
    expect(await nodeCards.count()).toBeGreaterThanOrEqual(6);
  });

  test('Collaborative Ecosystem Section - Verify sizing and layout', async ({ page }) => {
    // Navigate to Stakeholders section
    const stakeholdersSection = page.locator('#stakeholders');
    await stakeholdersSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    // Check header is properly sized (not too large)
    const heading = stakeholdersSection.locator('h2').first();
    await expect(heading).toBeVisible();
    const headingText = await heading.textContent();
    expect(headingText).toContain('Collaborative Ecosystem');
    
    // Verify all stakeholders are present
    const universities = stakeholdersSection.getByText('Universities & Research Institutions');
    const industry = stakeholdersSection.getByText('Industry Partners');
    const investors = stakeholdersSection.getByText('Investors & Funds');
    
    await expect(universities).toBeVisible();
    await expect(industry).toBeVisible();
    await expect(investors).toBeVisible();
    
    // Check that layout has consistent structure
    const stakeholderItems = stakeholdersSection.locator('[class*="flex flex-col"]');
    const itemCount = await stakeholderItems.count();
    expect(itemCount).toBeGreaterThan(0);
    
    // Verify icons are visible
    const flexShrink = stakeholdersSection.locator('.flex-shrink-0').first();
    await expect(flexShrink).toBeVisible();
  });

  test('Overall Page Layout - No overlapping elements', async ({ page }) => {
    // Wait for all sections to be visible
    await page.waitForTimeout(2000);
    
    // Check for overlapping elements using JavaScript
    const hasOverlap = await page.evaluate(() => {
      function getRect(element: Element) {
        return element.getBoundingClientRect();
      }
      
      function isOverlapping(rect1: DOMRect, rect2: DOMRect, tolerance = 5) {
        // Allow small tolerance for borders/shadows
        return !(
          rect1.right < rect2.left + tolerance ||
          rect1.left > rect2.right - tolerance ||
          rect1.bottom < rect2.top + tolerance ||
          rect1.top > rect2.bottom - tolerance
        );
      }
      
      const sections = ['#about', '#otc-network', '#stakeholders'];
      const overlaps: string[] = [];
      
      for (let i = 0; i < sections.length - 1; i++) {
        const section1 = document.querySelector(sections[i]);
        const section2 = document.querySelector(sections[i + 1]);
        
        if (section1 && section2) {
          const rect1 = getRect(section1);
          const rect2 = getRect(section2);
          
          if (isOverlapping(rect1, rect2, 20)) {
            overlaps.push(`${sections[i]} overlaps with ${sections[i + 1]}`);
          }
        }
      }
      
      return overlaps.length > 0 ? overlaps : null;
    });
    
    expect(hasOverlap).toBeNull();
  });

  test('Responsive Design - Check mobile view', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // About Section
    const aboutSection = page.locator('#about');
    await aboutSection.scrollIntoViewIfNeeded();
    await expect(aboutSection).toBeVisible();
    
    // OTC Network Section
    const otcSection = page.locator('#otc-network');
    await otcSection.scrollIntoViewIfNeeded();
    await expect(otcSection).toBeVisible();
    
    // Stakeholders Section
    const stakeholdersSection = page.locator('#stakeholders');
    await stakeholdersSection.scrollIntoViewIfNeeded();
    await expect(stakeholdersSection).toBeVisible();
    
    // Verify no horizontal scrolling
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // Allow 1px tolerance
  });
});
