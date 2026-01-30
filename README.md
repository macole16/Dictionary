# Dictionary Game

A multiplayer word bluffing game where players create fake definitions to fool their friends!

**Current Version:** 1.1.0 | [Changelog](CHANGELOG.md)

## How to Play

### Setup
1. **Host a Game**: One player creates a new game and receives a 6-digit game code
2. **Join**: Other players join using the game code
3. **Dictionary Holder**: The host assigns a "Dictionary Holder" who manages each round (can be any player)

### Round Flow

#### 1. Setup Phase (Dictionary Holder)
- Select a difficulty level: Kids (8-12), Teens, or Adults
- Choose an obscure word (use "Random" button or enter manually)
- Enter or fetch the real definition from online dictionaries
- Start the round to begin collecting definitions

#### 2. Definition Phase (All Other Players)
- See the word
- Submit a fake definition that sounds plausible
- Try to fool other players into thinking your definition is real

#### 3. Voting Phase (All Players except Dictionary Holder)
- See all fake definitions plus the real definition (shuffled randomly)
- Vote for the definition you think is real
- Cannot vote for your own definition

#### 4. Results Phase
- Reveals which definition was real
- Shows who wrote each fake definition
- Displays vote counts and points earned
- Host starts the next round

## Scoring

Points are awarded at the end of each round. Scoring rules are customizable via `scoring.json`:

- **+1 point per vote** - Players earn 1 point for each vote their fake definition receives
- **+1 point for guessing correctly** - Players who vote for the real definition earn 1 point
- **+1 point per correct vote** - The Dictionary Holder earns 1 point for each player who votes for the real definition
- **+1 bonus point** - Host can award bonus points to players with exceptionally clever or accurate definitions (awarded manually during results)

You can customize point values by editing `scoring.json` in the root directory.

### Strategy Tips
- Write convincing fake definitions that sound like dictionary entries
- Use proper grammar and formal language to match real definitions
- Balance being believable with being creative
- Get close to the real definition to potentially earn bonus points from the host
- Vote for the real definition to earn points

## Features

### Core Gameplay
- **Real-time multiplayer** using Firebase
- **Session persistence** - Reconnects players if they refresh
- **Multiple difficulty levels** with curated word lists (Kids, Teens, Adults)
- **Bot players** - Add AI bots with realistic fake definitions to fill out your game
- **Mobile optimized** - Responsive design works on all devices

### Word Management
- **Word history tracking** - Prevents duplicate words and tracks skipped words
- **Word history management** - View, review, and clear used/skipped words per game
- **Auto-definition lookup** from online dictionary APIs
- **Word pronunciation** - Text-to-speech for hearing word pronunciation (🔊 button)
- **Phonetic spelling** - Shows pronunciation guide when available
- **Smart word buffering** - Fetches 20-30 words at once to reduce duplicates

### Game Management
- **Game management dashboard** - View and terminate your hosted games
- **Game history** - See past game results and winners
- **Active games list** - See and join games in progress
- **QR code sharing** - Easily share game codes via QR codes

### Customization
- **Customizable scoring** - Edit `scoring.json` to change point values
- **Customizable avatars** - Edit `avatars.json` to add/remove avatar options (30+ included)
- **Bonus point awards** - Host can manually award bonus points for excellent definitions

### Visual & UX
- **Classic dictionary logo** - OED/Webster's inspired design
- **3D visual effects** - Animated elements and polished UI
- **Floating background words** - Aesthetic word animations on home screen
- **Voter transparency** - See who voted for each definition in results
- **Pending players display** - Dictionary holder can see who hasn't submitted yet

## Configuration

### Scoring (`scoring.json`)
Customize point values for different actions:
- `votesForFakeDefinition`: Points per vote on a fake definition
- `votesForRealDefinition`: Points to dictionary holder per vote on real definition
- `votingForRealDefinition`: Points for correctly voting for real definition

### Avatars (`avatars.json`)
Add, remove, or modify player avatar options. Each avatar needs:
- `id`: Unique identifier
- `emoji`: The emoji character to display
- `label`: Display name for the avatar

## Installation & Setup

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the development server
npm run dev
```

The game will open in your browser at `http://localhost:8080`.

## Technology Stack

- **Frontend**: React 18
- **Database**: Firebase Realtime Database
- **Styling**: Tailwind CSS (CDN)
- **Build Tool**: Babel
- **Server**: http-server

## Project Structure

```
Dictionary/
├── src/
│   └── app.jsx           # Main React application
├── dist/
│   └── app.js            # Compiled JavaScript
├── index.html            # Entry point
├── scoring.json          # Scoring configuration
├── avatars.json          # Avatar options
├── package.json          # Dependencies and scripts
├── LICENSE               # MIT License
├── CHANGELOG.md          # Version history
└── README.md             # This file
```

## Contributing

This is an open-source project under the MIT License. Contributions are welcome!

## License

MIT License - Copyright (c) 2026 Shaolynx, LLC

See [LICENSE](LICENSE) file for details.

## Credits

Developed by Shaolynx, LLC
Game inspired by classic word bluffing games
