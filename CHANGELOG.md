# Changelog

All notable changes to the Dictionary Game will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.1] - 2026-01-30

### Added
- **Configuration Page**: New centralized configuration view for game hosts
  - Access via "⚙️ Configuration" button in setup screen (host only)
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
  - Replaced "⚙️ Scoring" with "⚙️ Configuration" button
  - Better organization for multiple configuration options
  - Prepares for future expandability

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

- **1.3.1** (2026-01-30) - Configuration Page with Centralized Settings
- **1.3.0** (2026-01-30) - Custom Scoring Per Game
- **1.2.3** (2026-01-30) - Game Timestamp Display with Date and Time
- **1.2.2** (2026-01-30) - What's New Page with Changelog Display
- **1.2.1** (2026-01-30) - Instructions Externalized to Markdown File
- **1.2.0** (2026-01-30) - Direct Link Sharing & URL Auto-Join
- **1.1.1** (2026-01-30) - Expanded Background Words
- **1.1.0** (2026-01-29) - Word History Management, Bonus Points, Voter Info
- **1.0.0** (2026-01-25) - Initial Release
