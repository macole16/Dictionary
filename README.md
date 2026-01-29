# Dictionary Game

A multiplayer word bluffing game where players create fake definitions to fool their friends!

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

You can customize point values by editing `scoring.json` in the root directory.

### Strategy Tips
- Write convincing fake definitions that sound like dictionary entries
- Use proper grammar and formal language to match real definitions
- Balance being believable with being creative
- Guess the real definition to earn bonus points

## Features

- **Real-time multiplayer** using Firebase
- **Session persistence** - Reconnects players if they refresh
- **Word history tracking** - Prevents duplicate words and tracks skipped words
- **Multiple difficulty levels** with curated word lists
- **Auto-definition lookup** from online dictionary APIs
- **Word pronunciation** - Text-to-speech for hearing word pronunciation
- **Phonetic spelling** - Shows pronunciation guide when available
- **Game management** - View and terminate your hosted games
- **Game history** - See past game results and winners
- **Active games list** - See and join games in progress
- **Avatar selection** - Choose from 30+ different player avatars
- **Customizable scoring** - Edit `scoring.json` to change point values
- **Customizable avatars** - Edit `avatars.json` to add/remove avatar options
- **Bot players** - Add AI bots to fill out your game
- **QR code sharing** - Easily share game codes via QR codes
- **3D visual effects** - Animated logo and polished UI
- **Mobile optimized** - Responsive design works on all devices

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

## Technology

Built with React, Firebase Realtime Database, and Tailwind CSS. Uses Babel for JSX compilation.

## License

MIT License - Copyright (c) 2026 Shaolynx, LLC

See [LICENSE](LICENSE) file for details.
