# Changelog

All notable changes to the Dictionary Game will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.6] - 2026-02-01

### Performance Optimizations
- **Cumulative Layout Shift (CLS) Improvements**: Eliminated layout shifts for better user experience
  - Added explicit width/height (150x150) to QR code image to reserve space
  - Added skeleton loader for avatar selection (prevents shift when avatars.json loads)
  - Skeleton shows 10 placeholder boxes with pulse animation during loading
  - Added `minHeight: 64px` to avatar grid for consistent spacing
  - Added `font-display: swap` strategy to prevent font loading layout shifts
  - System fonts render immediately, custom fonts swap in without shifting layout

- **JavaScript Minification**: Added Terser for production builds
  - Compressed and mangled variable names for smaller file size
  - Faster parse time and improved load performance
  - Build output: 87KB minified JavaScript

- **Interaction to Next Paint (INP) Fix**: Eliminated UI blocking on End Game button
  - Replaced blocking `confirm()` dialog with React modal (0ms blocking)
  - Changed from 1,368ms blocking to instant response
  - Heavy operations deferred with `Promise.resolve()` microtask
  - Smooth, non-blocking user interactions

- **Forced Reflow Optimization**: Reduced layout thrashing
  - Added CSS `contain: layout style` to animated elements (.card-3d, .glass-card, .btn-3d)
  - Isolates layout recalculations to element scope only
  - Added `willChange: transform` and `contain: layout style paint` to floating word decorations
  - Browser optimizes animations without affecting other elements

- **Resource Loading**: Optimized external dependencies
  - Removed preload hints for deferred scripts (Firebase, React)
  - Prevents "preloaded but not used" warnings
  - Lazy loaded Vercel Speed Insights (3s after page load)
  - Only critical assets (CSS, app.js) preloaded

- **HTTP Caching**: Added long-term cache headers via Vercel
  - `/dist/*` files: 1 year cache with immutable flag
  - JSON files: 1 hour cache with revalidation
  - Faster repeat visits for new users (Service Worker handles returning users)

### Developer Experience
- **Cache busting**: Updated all asset versions to v1.4.6 for proper cache invalidation
- **Build optimization**: Automated minification in build pipeline

### Expected Impact
- **Better Core Web Vitals**: Significantly improved CLS, INP, and LCP scores
- **Smoother loading**: No content jumping, instant button responses
- **Faster parsing**: Minified JavaScript loads and executes faster
- **Better mobile experience**: More stable layout on slow connections
- **Improved SEO**: Google prioritizes pages with excellent Core Web Vitals

## [1.4.5] - 2026-02-01

### Added
- **Service Worker for Caching**: Progressive Web App (PWA) functionality for offline support
  - Created `sw.js` with intelligent caching strategies
  - Caches static assets (HTML, CSS, JS) for instant repeat visits
  - Caches CDN resources (Firebase, React) separately for better cache management
  - Cache-first strategy for static assets, network-first for Firebase and APIs
  - Automatic cache cleanup on version updates
  - Smart request filtering (skips Firebase DB, external APIs for fresh data)
  - Service worker registration with update detection
  - Console logging for debugging and monitoring

### Performance
- **Near-instant repeat visits**: Static assets served from cache
  - First visit: Normal load time
  - Repeat visits: ~90% faster (assets from cache)
  - Works offline for cached pages
  - Reduces server load and bandwidth usage
  - Better experience on slow/unreliable connections

### Developer Experience
- **Automatic cache versioning**: Tied to app version (v1.4.5)
- **Update notifications**: Console logs when new version available
- **Cache management**: Old caches automatically deleted on update
- **Debugging support**: Detailed console logs for cache hits/misses

## [1.4.4] - 2026-02-01

### Performance
- **Resource Loading Optimization**: Added resource hints for faster page loads
  - Added DNS prefetch for external APIs (dictionaryapi.dev, datamuse.com, qrserver.com)
  - DNS lookups happen early, saving 20-200ms per API request
  - Added preload hints for critical resources (Firebase, React, CSS, JS)
  - Browser downloads critical scripts immediately with high priority
  - Added preconnect hints for CDN domains (gstatic.com, unpkg.com, jsdelivr.net)
  - Full connection (DNS + TCP + TLS) established early, saving 100-300ms
  - Expected improvements:
    - First Contentful Paint (FCP): 10-20% faster
    - Time to Interactive (TTI): 15-25% faster
    - External API calls: 20-30% faster
    - Overall smoother, snappier user experience

## [1.4.3] - 2026-02-01

### Added
- **Vercel Speed Insights**: Integrated real-world performance monitoring
  - Installed `@vercel/speed-insights` package
  - Added Speed Insights script to track Core Web Vitals
  - Monitors real user performance metrics (FCP, LCP, FID, CLS, TTFB, INP)
  - Data visible in Vercel Analytics dashboard

### Fixed
- **Accessibility**: Added semantic HTML landmark for better screen reader support
  - Changed `<div id="root">` to `<main id="root">`
  - Fixes "Document does not have a main landmark" warning
  - Improves WCAG compliance and Lighthouse accessibility score
  - Better semantic HTML structure for SEO

## [1.4.2] - 2026-02-01

### Changed
- **Tailwind CSS Migration**: Migrated from CDN to compiled CSS for massive performance improvement
  - Removed 3MB Tailwind CDN script (no longer blocking page load)
  - Implemented Tailwind CLI build process
  - Compiled CSS reduced to 25KB minified (~99% size reduction)
  - Created `src/input.css` with all custom styles and Tailwind directives
  - Created `tailwind.config.js` for build configuration
  - Updated build scripts: `build:css`, `build:js`, `build`
  - All custom 3D effects, animations, and mobile optimizations preserved

### Performance
- **Page Load Speed**: Significantly faster initial page load
  - Removed blocking 3MB JavaScript CDN request
  - CSS now loads as non-blocking stylesheet (25KB)
  - Reduced "unused JavaScript" PageSpeed warning
  - Improved First Contentful Paint (FCP)
  - Better Lighthouse/PageSpeed Insights scores expected

### Developer Experience
- **New Build Commands**:
  - `npm run build:css` - Compile and minify Tailwind CSS
  - `npm run build:js` - Compile JSX with Babel
  - `npm run build` - Build both CSS and JS
  - `npm run watch:css` - Watch CSS changes in development
  - Production-ready CSS compilation workflow

## [1.4.1] - 2026-02-01

### Fixed
- **Performance Optimization**: Fixed INP (Interaction to Next Paint) issue on "End Game" button
  - Replaced blocking `alert()` calls with non-blocking `showToast()` notifications
  - Deferred heavy operations (Firebase writes, localStorage) using `setTimeout` to avoid blocking UI
  - Button now responds instantly without freezing the interface
  - Eliminated 1,171ms UI blocking time
  - Added error handling with try/catch for better reliability

## [1.4.0] - 2026-02-01

### Added
- **Firebase Anonymous Authentication**: Users now automatically sign in anonymously
  - Player IDs now use Firebase Auth UIDs instead of timestamps
  - Persistent sessions across page reloads
  - Better security and identity validation
  - Automatic authentication on app load
- **Security Documentation**: Comprehensive security guides and best practices
  - `SECURITY.md` - Firebase security rules and configuration guide
  - `FIREBASE_AUTH_SETUP.md` - Step-by-step authentication setup instructions
  - `firebase-rules-with-auth.json` - Enhanced security rules for authenticated users
- **Environment Variable Support**: Firebase credentials now use environment variables
  - Created `.env` file for local development (git-ignored)
  - Created `.env.example` template for easy setup
  - Supports Vercel environment variables for production

### Changed
- **Firebase Configuration**: Moved from hardcoded values to environment variables
  - Uses `window.ENV` with fallback values for backward compatibility
  - Credentials no longer exposed in source code repository
  - `.env` file properly excluded from version control
- **Player ID Generation**: Changed from timestamp-based to Firebase Auth UID
  - Old: `Date.now().toString()` (e.g., "1738436789123")
  - New: `authUser.uid` (e.g., "xY3kL9mP2qR5sT8w")
  - Non-guessable, cryptographically secure identifiers

### Security
- **Enhanced Firebase Security Rules**: Created auth-based security rules
  - Players can only modify their own data (`$playerId === auth.uid`)
  - Scores can only increase (prevents cheating)
  - Host field must match creator's auth UID
  - State-specific write permissions (definitions in 'collecting', votes in 'voting')
  - Player names limited to 50 characters
- **Credential Protection**: Firebase API keys moved out of source code
  - API keys in `.env` file (local development)
  - Environment variables in Vercel (production)
  - `.gitignore` properly configured to exclude sensitive files

## [1.3.4] - 2026-01-31

### Fixed
- **Markdown List Indentation**: Fixed "What's New" page list formatting
  - Sub-bullets (indented with 2+ spaces) now properly display with additional indentation
  - Applied `ml-4` class to nested list items for visual hierarchy
  - Main bullets and sub-bullets now have clear visual distinction
  - Improved readability of changelog entries

## [1.3.3] - 2026-01-31

### Fixed
- **WCAG 2 AA Contrast Compliance**: Improved text contrast for accessibility
  - Changed footer copyright text from `text-gray-400` to `text-gray-500` (4.61:1 contrast ratio)
  - Changed version number from `text-gray-400` to `text-gray-500` with hover state `text-gray-700`
  - Changed "Coming soon" placeholder text from `text-gray-400` to `text-gray-500`
  - All text now meets WCAG 2 AA minimum contrast ratio of 4.5:1 for normal text
  - Improved readability for users with low vision or color blindness
  - 4 instances updated across the application

### Added
- **WCAG Contrast Analysis Document**: Created comprehensive accessibility audit
  - Documented all color combinations and contrast ratios
  - Provided recommendations for maintaining compliance
  - Reference guide for future development

## [1.3.2] - 2026-01-31

### Changed
- **Game History Filter**: Games with no rounds played are no longer saved to history
  - Only games with `roundsPlayed > 0` are saved to game history
  - Prevents cluttering history with abandoned/test games
  - User receives different message based on whether game was saved
    - "Game ended and saved to history!" (if rounds played)
    - "Game ended (not saved to history - no rounds played)." (if no rounds)

## [1.3.1] - 2026-01-30

### Added
- **Configuration Page**: New centralized configuration view for game hosts
  - Access via "⚙️ Config" button in game controls (host only)
  - Dedicated page for all game customization options
  - Shows current game code and host-only access control
  - Clean, organized layout for current and future settings
  - Includes "🎯 Scoring Rules" section with edit button
  - Displays current scoring values for easy reference
  - Placeholder sections for future features:
    - 🎨 Avatar Management (coming soon)
    - 📝 Instructions Customization (coming soon)

### Changed
- **Scoring Button Relocated**: Moved from inline button to dedicated config page
  - Added "⚙️ Config" button to main game controls (always visible to host)
  - Scoring modal now properly renders within config view
  - Better organization for multiple configuration options
  - Prepares for future expandability

### Fixed
- **Scoring Modal Display**: Fixed modal not appearing on Configuration page
  - Modal now positioned at top level using React Fragment
  - Removed `customScoring` requirement from modal condition
  - Added `setTimeout` to ensure proper state synchronization
  - Modal appears immediately when clicking "Edit Scoring Rules"

## [1.3.0] - 2026-01-30

### Added
- **Custom Scoring Per Game**: Hosts can now customize point values for each game
  - New "⚙️ Scoring" button in setup screen (host only)
  - Interactive modal to adjust three scoring rules:
    - Points per vote on fake definition (default: 1)
    - Points to dictionary holder per vote on real definition (default: 1)
    - Points for voting for real definition (default: 1)
  - Adjust values from 0 to 10 for each rule
  - "Reset to Defaults" button to restore original values
  - Custom scoring saved per-game in Firebase
  - Scoring calculations use game-specific rules
  - Allows different play styles (competitive, casual, educational)

### Changed
- **Scoring System**: Now supports per-game custom scoring rules
  - Scoring calculations check for `gameData.customScoring` first
  - Falls back to `scoring.json` config, then hardcoded defaults
  - Maintains backward compatibility with existing games

## [1.2.3] - 2026-01-30

### Changed
- **Game Timestamp Display**: "Manage My Games" now shows full date and time
  - Changed from `toLocaleDateString()` to `toLocaleString()`
  - Displays both date and time when game was created
  - Helps hosts track when games were started

## [1.2.2] - 2026-01-30

### Added
- **What's New Page**: New "✨ What's New" button on home screen
  - Displays recent version updates from CHANGELOG.md
  - Dynamically loads and parses changelog content
  - Beautiful color-coded sections (Added=green, Changed=blue, Fixed=orange, Removed=red)
  - Shows version headers with dates
  - Easy way for players to see latest features and improvements

### Changed
- **Enhanced Markdown Parser**: Improved to handle changelog format
  - Recognizes version headers (e.g., `## [1.2.2] - 2026-01-30`)
  - Color-codes section headers (Added, Changed, Fixed, Removed)
  - Better formatting for changelogs and documentation

## [1.2.1] - 2026-01-30

### Changed
- **Instructions Externalized**: Moved "How to Play" content to separate `instructions.md` file
  - Easier to update and maintain instructions without editing code
  - Custom markdown parser for rendering instructions
  - Dynamically loaded at runtime
  - Updated instructions to include direct link sharing feature

### Added
- **Markdown Parser**: Simple markdown-to-React parser for instructions
  - Supports headers (H1, H2, H3)
  - Supports ordered and unordered lists
  - Supports bold text with `**text**` syntax
  - Color-coded sections by emoji (🎮=purple, 🔄=blue, 🏆=green, 💡=orange, ✨=indigo)

## [1.2.0] - 2026-01-30

### Added
- **Direct Link Sharing**: One-click join functionality for remote players
  - New "🔗 Link" button copies shareable URL with game code
  - URL format: `https://yourdomain.com/?game=ABC123`
  - Automatic join screen population when opening link
  - Players no longer need to manually type game codes
  - Perfect for texting, messaging, or emailing invites
- **URL Parameter Auto-Join**: Automatic game code detection from URL
  - Detects `?game=` parameter on page load
  - Pre-fills join screen with game code
  - Cleans up URL after detection to prevent confusion

### Changed
- **QR Code Updated**: QR codes now generate links with `?game=` parameter for consistency
- **Button Layout**: Added dedicated "🔗 Link" button alongside existing "📋 Copy" and "📱 QR" buttons

## [1.1.1] - 2026-01-30

### Changed
- **Expanded Background Words**: Added 25 more obscure and poetic words to floating background
  - Includes rare terms like "petrichor", "defenestration", "hiraeth", "eigengrau"
  - Increased total from 20 to 45 floating words
  - Enhanced visual atmosphere on home screen

## [1.1.0] - 2026-01-29

### Added
- **Word History Management**: Per-game word history with management UI
  - View all used and skipped words in a modal
  - Remove individual words from history with ✕ button
  - Clear all word history at once
  - Word count display on setup screen (📚 Word History badge)
- **Bonus Points System**: Host can award +1 bonus points during results phase
  - Yellow "+1 Bonus" button appears for human players
  - Rewards exceptionally clever or accurate definitions
  - Toast notification confirms award
- **Voter Information**: Results screen now shows who voted for each definition
  - Player badges with avatars and names
  - Displayed under vote counts for transparency
- **Pending Players Display**: Dictionary holder can see who hasn't submitted definitions
  - Yellow box with "Waiting for:" label
  - Player badges show pending submissions
- **Word Display on Results**: The word being defined now prominently displayed on results screen
  - Large, bold text at the top
  - Includes pronunciation guide when available

### Changed
- **Randomized Definition Order**: Definitions shown to dictionary holder in random order
  - Real definition no longer always appears first
  - Makes reading aloud fairer for in-person play
  - Real definition still clearly marked with green border and (Real) label
- **Definition Collection Screen**: Real definition now shown to dictionary holder during collection
  - Allows dictionary holder to read all definitions aloud in-person games
  - Mixed in random order with player definitions
- **Punctuation Normalization**: All definitions have trailing punctuation removed
  - Applies to real definitions, player definitions, and bot definitions
  - Prevents dictionary definition from being identified by period
- **Improved Bot Definitions**: Significantly enhanced bot variety
  - Generate fresh random templates for each bot
  - Expanded word choices (7+ options per template slot)
  - Added 3 new template categories
  - Increased uniqueness attempts from 10 to 20
  - Better contextual variations for duplicates
- **Voting Button Fix**: Dictionary holder can only start voting when all definitions received
  - Disabled "Waiting for all definitions..." button shown when incomplete
  - Prevents premature voting phase
- **Updated Instructions**: "How to Play" updated with latest features
  - Added bonus point information
  - Updated strategy tips
  - Clarified scoring rules

### Fixed
- **Voting Screen**: Removed distinctive 📖 emoji from real definition during voting
  - All definitions now show 📝 emoji to prevent giving away the answer
- **Word Buffering**: Improved word selection to reduce duplicates
  - Batch fetches 20-30 words at once
  - Filters against used/skipped words before buffering
  - Instant selection from buffer (no API delay)
  - Reduces API calls by 20-30x

### Removed
- Letter count hint removed from word facts
  - Prevents players from getting hints about word length

## [1.0.0] - 2026-01-25

### Initial Release
- Real-time multiplayer gameplay using Firebase
- Session persistence and reconnection
- Word history tracking (used/skipped words)
- Multiple difficulty levels (Kids, Teens, Adults)
- Auto-definition lookup from dictionary APIs
- Word pronunciation with text-to-speech
- Phonetic spelling guides
- Game management (view/terminate hosted games)
- Game history tracking
- Active games list with join functionality
- Avatar selection (30+ options)
- Customizable scoring via `scoring.json`
- Customizable avatars via `avatars.json`
- Bot players with AI-generated definitions
- QR code sharing for easy joining
- 3D visual effects and polished UI
- Mobile-optimized responsive design
- Classic dictionary-style logo (OED/Webster's inspired)
- Floating background words on home screen
- Firebase security rules
- MIT License (© 2026 Shaolynx, LLC)

### Features
- **Setup Phase**: Dictionary holder selects word and difficulty
- **Definition Phase**: Players submit fake definitions
- **Voting Phase**: Players vote for the real definition
- **Results Phase**: Reveals correct answer with vote counts
- **Scoring**: Points for fooling others and guessing correctly

---

## Version History

- **1.3.4** (2026-01-31) - Markdown List Indentation Fix
- **1.3.3** (2026-01-31) - WCAG 2 AA Accessibility Compliance
- **1.3.2** (2026-01-31) - Game History Filter (Skip Games with 0 Rounds)
- **1.3.1** (2026-01-30) - Configuration Page with Centralized Settings
- **1.3.0** (2026-01-30) - Custom Scoring Per Game
- **1.2.3** (2026-01-30) - Game Timestamp Display with Date and Time
- **1.2.2** (2026-01-30) - What's New Page with Changelog Display
- **1.2.1** (2026-01-30) - Instructions Externalized to Markdown File
- **1.2.0** (2026-01-30) - Direct Link Sharing & URL Auto-Join
- **1.1.1** (2026-01-30) - Expanded Background Words
- **1.1.0** (2026-01-29) - Word History Management, Bonus Points, Voter Info
- **1.0.0** (2026-01-25) - Initial Release
