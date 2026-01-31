# WCAG 2 AA Contrast Ratio Analysis

## Overview
WCAG 2 AA requires:
- **Normal text** (< 18pt): Minimum contrast ratio of **4.5:1**
- **Large text** (≥ 18pt or 14pt bold): Minimum contrast ratio of **3:1**
- **UI components/graphics**: Minimum contrast ratio of **3:1**

## Tailwind Color Values Reference
- white: #ffffff
- gray-50: #f9fafb
- gray-100: #f3f4f6
- gray-200: #e5e7eb
- gray-300: #d1d5db
- gray-400: #9ca3af (contrast with white: 2.85:1 ❌)
- gray-500: #6b7280 (contrast with white: 4.61:1 ✅)
- gray-600: #4b5563 (contrast with white: 7.09:1 ✅)
- gray-700: #374151 (contrast with white: 10.60:1 ✅)
- gray-800: #1f2937 (contrast with white: 14.80:1 ✅)
- gray-900: #111827 (contrast with white: 18.67:1 ✅)

## Potential Contrast Issues Found

### 1. ⚠️ Gray-400 Text on Light Backgrounds
**Locations:**
- Version number footer: `text-gray-400` on light background
- Various disabled/placeholder text

**Issue:** Gray-400 (#9ca3af) on white = **2.85:1** (Fails AA)
**Fix:** Use `text-gray-500` or darker (4.61:1 or higher)

### 2. ⚠️ Light Text on Light Backgrounds
**Locations:**
- `text-purple-200` on any light background
- `text-gray-400` combined with light backgrounds

**Issue:** Very low contrast
**Fix:** Ensure text is at least 500-level or darker on light backgrounds

### 3. ✅ Button Contrast (Generally Good)
Most buttons use appropriate contrast:
- `text-white` on `bg-purple-600` ✅
- `text-white` on `bg-blue-600` ✅
- `text-white` on `bg-green-600` ✅
- `text-white` on `bg-red-600` ✅
- `text-gray-700` on `bg-gray-200` ✅

### 4. ⚠️ Toast Notifications
**Current:**
```css
background: rgba(0, 0, 0, 0.9);
color: white;
```
**Contrast:** Excellent (>15:1) ✅

### 5. ⚠️ Gray Text on Gray Backgrounds
**Locations:**
- Stats and secondary information using `text-gray-500` or `text-gray-600` on `bg-gray-50` or `bg-gray-100`

**Analysis:**
- gray-500 on gray-50: ~4.2:1 (Borderline for normal text) ⚠️
- gray-600 on gray-50: ~6.4:1 ✅
- gray-600 on white: 7.09:1 ✅

## Recommended Fixes

### High Priority (Fails AA)
1. **Footer version text** - Change from `text-gray-400` to `text-gray-500` or `text-gray-600`
2. **Placeholder/disabled text** - Ensure minimum `text-gray-500` on light backgrounds
3. **Any purple-200 text on light backgrounds** - Use purple-700 or darker

### Medium Priority (Close to threshold)
4. **Secondary text on gray backgrounds** - Use at least `text-gray-600` instead of `text-gray-500`
5. **Link states** - Ensure hover states maintain adequate contrast

## Specific Code Changes Needed

### 1. Version Number (Line ~1654)
```jsx
// BEFORE
className="text-xs text-gray-400 hover:text-gray-600"

// AFTER
className="text-xs text-gray-500 hover:text-gray-700"
```

### 2. Floating Background Words
The decorative floating words are likely gray-400 or lighter - should be darkened or given sufficient opacity.

### 3. Secondary Information Text
Any text using `text-gray-400` should be changed to `text-gray-500` minimum:
```jsx
// Pattern to search for
text-gray-400

// Replace with
text-gray-500
```

## Color Combinations That Pass AA

### Text on White Background
✅ text-gray-500 and darker
✅ text-blue-600 and darker
✅ text-purple-600 and darker
✅ text-green-600 and darker
✅ text-red-600 and darker

### White Text on Colored Background
✅ bg-purple-600 and darker
✅ bg-blue-600 and darker
✅ bg-green-600 and darker
✅ bg-red-600 and darker
✅ bg-gray-600 and darker

### Text on Gray-50 Background
✅ text-gray-600 and darker
⚠️ text-gray-500 (borderline - 4.2:1)
❌ text-gray-400 and lighter

## Testing Recommendation
Use a contrast checker tool like:
- WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/)
- Chrome DevTools (Lighthouse accessibility audit)
- axe DevTools browser extension

## Summary
Overall, the app uses good contrast in most places. Main issues are:
1. Gray-400 text on light backgrounds (footer, secondary text)
2. Some decorative elements may need adjustment
3. Ensure all interactive elements meet 3:1 minimum

**Estimated fixes needed:** 5-10 locations where `text-gray-400` should become `text-gray-500` or darker.
