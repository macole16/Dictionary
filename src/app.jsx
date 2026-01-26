        const { useState, useEffect } = React;

        const firebaseConfig = {
            apiKey: "AIzaSyDFlzHW747uu1p1TdqWbdFM_omkjORRht4",
            authDomain: "dictionary-5fae9.firebaseapp.com",
            databaseURL: "https://dictionary-5fae9-default-rtdb.firebaseio.com",
            projectId: "dictionary-5fae9",
            storageBucket: "dictionary-5fae9.firebasestorage.app",
            messagingSenderId: "615496664058",
            appId: "1:615496664058:web:0ea7b1bd792d230cbf1a43"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const database = firebase.database();

        // Initialize Firebase App Check for DDoS protection
        // Site key registered at: https://www.google.com/recaptcha/admin
        const appCheck = firebase.appCheck();
        appCheck.activate(
            '6LeITVcsAAAAAA-XCxi4RoWWYCEwUc821d2kBipN',
            true // Pass true to allow auto-refresh of tokens
        );

        /* Firebase Database Index Configuration:
         * To improve performance, add this to your Firebase Database Rules:
         * {
         *   "rules": {
         *     "gameHistory": {
         *       ".indexOn": "endedAt"
         *     }
         *   }
         * }
         */

        // Logo Component - Open Dictionary Book
        const DictionaryLogo = ({ size = 64 }) => (
            <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Gradient for leather book cover */}
                    <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#7c3aed", stopOpacity: 1}} />
                        <stop offset="50%" style={{stopColor: "#6d28d9", stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: "#5b21b6", stopOpacity: 1}} />
                    </linearGradient>
                    {/* Gradient for pages */}
                    <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: "#fefefe", stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: "#f5f5f5", stopOpacity: 1}} />
                    </linearGradient>
                    {/* Shadow gradient */}
                    <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: "#000", stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: "#000", stopOpacity: 0}} />
                    </linearGradient>
                </defs>

                {/* Shadow beneath book */}
                <ellipse cx="100" cy="165" rx="70" ry="8" fill="url(#shadowGrad)" opacity="0.3"/>

                {/* Book cover - back */}
                <path d="M 35 40 L 35 155 Q 35 160 40 160 L 95 160 L 95 40 Z" fill="url(#bookCover)" stroke="#5b21b6" strokeWidth="1.5"/>

                {/* Book pages on left side */}
                <path d="M 38 43 L 38 156 L 92 156 L 92 43 Z" fill="url(#pageGradient)"/>
                <path d="M 41 46 L 41 153 L 89 153 L 89 46 Z" fill="#ffffff"/>

                {/* Text on left page */}
                <line x1="48" y1="60" x2="82" y2="60" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="48" y1="70" x2="80" y2="70" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="48" y1="80" x2="82" y2="80" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="48" y1="90" x2="75" y2="90" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="48" y1="100" x2="82" y2="100" stroke="#9333ea" strokeWidth="1.5" opacity="0.5"/>
                <line x1="48" y1="110" x2="78" y2="110" stroke="#9333ea" strokeWidth="1.5" opacity="0.5"/>

                {/* Book spine */}
                <path d="M 95 40 L 105 40 L 105 160 L 95 160 Z" fill="#5b21b6"/>
                <rect x="97" y="70" width="6" height="60" fill="#7c3aed" opacity="0.5" rx="1"/>

                {/* Book pages on right side */}
                <path d="M 108 43 L 108 156 L 162 156 L 162 43 Z" fill="url(#pageGradient)"/>
                <path d="M 111 46 L 111 153 L 159 153 L 159 46 Z" fill="#ffffff"/>

                {/* Text on right page */}
                <line x1="118" y1="60" x2="152" y2="60" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="118" y1="70" x2="150" y2="70" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="118" y1="80" x2="152" y2="80" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="118" y1="90" x2="145" y2="90" stroke="#9333ea" strokeWidth="1.5" opacity="0.7"/>
                <line x1="118" y1="100" x2="152" y2="100" stroke="#9333ea" strokeWidth="1.5" opacity="0.5"/>
                <line x1="118" y1="110" x2="148" y2="110" stroke="#9333ea" strokeWidth="1.5" opacity="0.5"/>

                {/* Book cover - front */}
                <path d="M 105 40 L 165 40 Q 170 40 170 45 L 170 155 Q 170 160 165 160 L 105 160 Z" fill="url(#bookCover)" stroke="#5b21b6" strokeWidth="1.5"/>

                {/* Decorative gold embossing on cover */}
                <path d="M 120 55 L 155 55 L 155 58 L 120 58 Z" fill="#fbbf24" opacity="0.8"/>
                <circle cx="137.5" cy="100" r="15" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M 137.5 90 L 137.5 110 M 127.5 100 L 147.5 100" stroke="#fbbf24" strokeWidth="2" opacity="0.6"/>

                {/* Book title embossing */}
                <text x="137.5" y="135" fontSize="10" fontWeight="bold" fill="#fbbf24" opacity="0.8" textAnchor="middle" fontFamily="serif">DICT</text>

                {/* Leather texture details */}
                <path d="M 110 50 Q 115 48 120 50" stroke="#5b21b6" strokeWidth="0.5" opacity="0.3"/>
                <path d="M 110 145 Q 115 143 120 145" stroke="#5b21b6" strokeWidth="0.5" opacity="0.3"/>
            </svg>
        );

        // Avatar options with emojis
        const avatarOptions = [
            { id: 'cat', emoji: '🐱', label: 'Cat' },
            { id: 'dog', emoji: '🐶', label: 'Dog' },
            { id: 'bird', emoji: '🐦', label: 'Bird' },
            { id: 'hat', emoji: '🎩', label: 'Hat' },
            { id: 'car', emoji: '🚗', label: 'Car' },
            { id: 'bulb', emoji: '💡', label: 'Light Bulb' },
            { id: 'snake', emoji: '🐍', label: 'Snake' },
            { id: 'scholar', emoji: '👨‍🎓', label: 'Scholar' },
            { id: 'school', emoji: '🏫', label: 'School' },
            { id: 'robot', emoji: '🤖', label: 'Robot' },
            { id: 'alien', emoji: '👽', label: 'Alien' },
            { id: 'unicorn', emoji: '🦄', label: 'Unicorn' },
            { id: 'dragon', emoji: '🐉', label: 'Dragon' },
            { id: 'wizard', emoji: '🧙', label: 'Wizard' },
            { id: 'ninja', emoji: '🥷', label: 'Ninja' },
            { id: 'pirate', emoji: '🏴‍☠️', label: 'Pirate' },
            { id: 'astronaut', emoji: '👨‍🚀', label: 'Astronaut' },
            { id: 'detective', emoji: '🕵️', label: 'Detective' },
            { id: 'artist', emoji: '🎨', label: 'Artist' },
            { id: 'musician', emoji: '🎸', label: 'Musician' },
            { id: 'chef', emoji: '👨‍🍳', label: 'Chef' },
            { id: 'brain', emoji: '🧠', label: 'Brain' },
            { id: 'book', emoji: '📚', label: 'Book' },
            { id: 'trophy', emoji: '🏆', label: 'Trophy' },
            { id: 'star', emoji: '⭐', label: 'Star' },
            { id: 'fire', emoji: '🔥', label: 'Fire' },
            { id: 'crown', emoji: '👑', label: 'Crown' },
            { id: 'rocket', emoji: '🚀', label: 'Rocket' },
            { id: 'gem', emoji: '💎', label: 'Gem' },
            { id: 'pizza', emoji: '🍕', label: 'Pizza' }
        ];

        function MultiplayerDictionaryGame() {
            const [view, setView] = useState('home');
            const [gameCode, setGameCode] = useState('');
            const [playerName, setPlayerName] = useState('');
            const [playerId, setPlayerId] = useState(null);
            const [gameData, setGameData] = useState(null);
            const [inputGameCode, setInputGameCode] = useState('');
            const [inputPlayerName, setInputPlayerName] = useState('');
            const [difficulty, setDifficulty] = useState('adult');
            const [currentWord, setCurrentWord] = useState('');
            const [realDefinition, setRealDefinition] = useState('');
            const [myDefinition, setMyDefinition] = useState('');
            const [myVote, setMyVote] = useState(null);
            const [loadingWord, setLoadingWord] = useState(false);
            const [loadingDefinition, setLoadingDefinition] = useState(false);
            const [usedWords, setUsedWords] = useState([]);
            const [skippedWords, setSkippedWords] = useState([]);
            const [availableGames, setAvailableGames] = useState([]);
            const [gameHistory, setGameHistory] = useState([]);
            const [selectedAvatar, setSelectedAvatar] = useState('cat');
            const [myCreatedGames, setMyCreatedGames] = useState([]);
            const [liveGames, setLiveGames] = useState([]);
            const [allGameHistory, setAllGameHistory] = useState([]);
            const [pronunciation, setPronunciation] = useState('');
            const [wordFact, setWordFact] = useState('');
            const [showPassDictionary, setShowPassDictionary] = useState(false);
            const [activeGames, setActiveGames] = useState([]);
            const [showReconnectModal, setShowReconnectModal] = useState(false);
            const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

            // Toast notification function
            const showToast = (message, type = 'info') => {
                setToast({ show: true, message, type });
                setTimeout(() => {
                    setToast({ show: false, message: '', type: 'info' });
                }, 3000);
            };

            // Try to restore session - check for multiple active games
            useEffect(() => {
                const savedPlayerName = localStorage.getItem('dictionaryGame_playerName');
                const savedGameHistory = JSON.parse(localStorage.getItem('dictionaryGame_history') || '[]');

                if (savedGameHistory.length > 0) {
                    // Check which games are still active
                    const checkGames = savedGameHistory.map(({ code, playerId, joinedAt }) =>
                        database.ref(`games/${code}`).once('value').then(snapshot => {
                            if (snapshot.exists()) {
                                const game = snapshot.val();
                                if (game.players && game.players[playerId]) {
                                    return {
                                        code,
                                        playerId,
                                        playerName: game.players[playerId].name,
                                        hostName: game.hostName,
                                        state: game.state,
                                        playerCount: Object.keys(game.players || {}).length,
                                        joinedAt,
                                        lastActivity: game.lastActivity
                                    };
                                }
                            }
                            return null;
                        })
                    );

                    Promise.all(checkGames).then(games => {
                        const activeGames = games.filter(g => g !== null)
                            .sort((a, b) => (b.lastActivity || b.joinedAt) - (a.lastActivity || a.joinedAt));

                        if (activeGames.length > 0) {
                            setActiveGames(activeGames);
                            setShowReconnectModal(true);
                        }
                    });
                }
            }, []);

            const generateGameCode = () => {
                return Math.random().toString(36).substring(2, 8).toUpperCase();
            };

            // Get session information
            const getSessionInfo = () => {
                const browserInfo = navigator.userAgent;
                const platform = navigator.platform;
                const language = navigator.language;

                return {
                    browser: browserInfo,
                    platform: platform,
                    language: language,
                    joinedAt: Date.now()
                };
            };

            const createGame = async () => {
                const code = generateGameCode();
                const newPlayerId = Date.now().toString();

                await database.ref(`games/${code}`).set({
                    host: newPlayerId,
                    hostName: playerName,
                    state: 'setup',
                    createdAt: Date.now(),
                    lastActivity: Date.now(),
                    players: {
                        [newPlayerId]: {
                            name: playerName,
                            score: 0,
                            isHost: true,
                            avatar: selectedAvatar,
                            sessionInfo: getSessionInfo()
                        }
                    }
                });

                // Save to localStorage for reconnection
                localStorage.setItem('dictionaryGame_code', code);
                localStorage.setItem('dictionaryGame_playerId', newPlayerId);
                localStorage.setItem('dictionaryGame_playerName', playerName);

                // Add to game history
                const gameHistory = JSON.parse(localStorage.getItem('dictionaryGame_history') || '[]');
                gameHistory.push({ code, playerId: newPlayerId, joinedAt: Date.now() });
                localStorage.setItem('dictionaryGame_history', JSON.stringify(gameHistory));

                // Add to created games list
                const createdGames = JSON.parse(localStorage.getItem('dictionaryGame_createdGames') || '[]');
                createdGames.push({ code, createdAt: Date.now(), playerName });
                localStorage.setItem('dictionaryGame_createdGames', JSON.stringify(createdGames));

                setGameCode(code);
                setPlayerId(newPlayerId);
                setView('game');
            };

            const joinGame = async () => {
                if (!inputGameCode || !inputPlayerName) {
                    showToast('Please enter both game code and your name', 'error');
                    return;
                }

                const code = inputGameCode.toUpperCase();
                const snapshot = await database.ref(`games/${code}`).once('value');

                if (!snapshot.exists()) {
                    showToast('Game not found', 'error');
                    return;
                }

                const game = snapshot.val();

                // Check for duplicate names
                const existingPlayers = Object.values(game.players || {});
                const nameTaken = existingPlayers.some(player =>
                    player.name.toLowerCase() === inputPlayerName.trim().toLowerCase()
                );

                if (nameTaken) {
                    showToast(`The name "${inputPlayerName}" is already taken`, 'error');
                    return;
                }

                const newPlayerId = Date.now().toString();

                await database.ref(`games/${code}/players/${newPlayerId}`).set({
                    name: inputPlayerName,
                    score: 0,
                    isHost: false,
                    avatar: selectedAvatar,
                    sessionInfo: getSessionInfo()
                });

                await database.ref(`games/${code}/lastActivity`).set(Date.now());

                // Save to localStorage for reconnection
                localStorage.setItem('dictionaryGame_code', code);
                localStorage.setItem('dictionaryGame_playerId', newPlayerId);
                localStorage.setItem('dictionaryGame_playerName', inputPlayerName);

                // Add to game history
                const gameHistory = JSON.parse(localStorage.getItem('dictionaryGame_history') || '[]');
                gameHistory.push({ code, playerId: newPlayerId, joinedAt: Date.now() });
                localStorage.setItem('dictionaryGame_history', JSON.stringify(gameHistory));

                setGameCode(code);
                setPlayerId(newPlayerId);
                setPlayerName(inputPlayerName);
                setView('game');
            };

            // Load available games
            useEffect(() => {
                if (view === 'join') {
                    const gamesRef = database.ref('games');

                    gamesRef.on('value', (snapshot) => {
                        const data = snapshot.val();
                        if (data) {
                            const games = Object.entries(data)
                                .filter(([code, game]) => {
                                    // Filter out old games (older than 24 hours)
                                    const age = Date.now() - (game.lastActivity || game.createdAt || 0);
                                    return age < 24 * 60 * 60 * 1000;
                                })
                                .map(([code, game]) => ({
                                    code,
                                    hostName: game.hostName,
                                    playerCount: Object.keys(game.players || {}).length,
                                    state: game.state,
                                    createdAt: game.createdAt
                                }))
                                .sort((a, b) => b.createdAt - a.createdAt);

                            setAvailableGames(games);
                        } else {
                            setAvailableGames([]);
                        }
                    });

                    return () => gamesRef.off();
                }
            }, [view]);

            // Load game history
            useEffect(() => {
                if (view === 'home' || view === 'join') {
                    const historyRef = database.ref('gameHistory');

                    historyRef.orderByChild('endedAt').limitToLast(10).on('value', (snapshot) => {
                        const data = snapshot.val();
                        if (data) {
                            const history = Object.values(data)
                                .sort((a, b) => b.endedAt - a.endedAt);
                            setGameHistory(history);
                        } else {
                            setGameHistory([]);
                        }
                    });

                    return () => historyRef.off();
                }
            }, [view]);

            useEffect(() => {
                if (gameCode && view === 'game') {
                    const gameRef = database.ref(`games/${gameCode}`);

                    gameRef.on('value', (snapshot) => {
                        const data = snapshot.val();
                        if (data) {
                            setGameData(data);
                            // Load word history
                            if (data.usedWords) {
                                setUsedWords(data.usedWords);
                            }
                            if (data.skippedWords) {
                                setSkippedWords(data.skippedWords);
                            }
                        }
                    });

                    return () => gameRef.off();
                }
            }, [gameCode, view]);

            const getRandomWord = async (retryCount = 0) => {
                setLoadingWord(true);
                try {
                    let word = null;
                    const maxRetries = 10;

                    // console.log('=== RANDOM WORD DEBUG ===');
                    // console.log('Difficulty:', difficulty);

                    // Helper function to check if word is valid
                    const isWordValid = (w) => {
                        const wordLower = w.toLowerCase();
                        return !usedWords.includes(wordLower) && !skippedWords.includes(wordLower);
                    };

                    if (difficulty === 'kids') {
                        const topics = ['animals', 'nature', 'school', 'food', 'sports', 'weather'];
                        const topic = topics[Math.floor(Math.random() * topics.length)];
                        const apiUrl = `https://api.datamuse.com/words?topics=${topic}&max=200`;

                        console.log('API URL:', apiUrl);

                        const response = await fetch(apiUrl);
                        const data = await response.json();
                        console.log('API Response length:', data?.length);

                        if (data && data.length > 0) {
                            // More flexible filtering for kids - 4-10 letters, prioritize common words
                            let filtered = data.filter(w =>
                                w.word.length >= 4 &&
                                w.word.length <= 10 &&
                                /^[a-z]+$/.test(w.word) && // Only letters, no hyphens or spaces
                                isWordValid(w.word)
                            );
                            console.log('Filtered words:', filtered.length);

                            if (filtered.length > 0) {
                                // Better randomization - use timestamp + random for unique selection
                                const randomSeed = Date.now() + Math.random();
                                const wordIndex = Math.floor((randomSeed % 1) * filtered.length);
                                word = filtered[wordIndex]?.word;
                            }
                        }

                        // Fallback to simple kid-friendly words
                        if (!word) {
                            let fallbackWords = [
                                'canopy', 'whimsy', 'gadget', 'mosaic', 'nimble', 'frolic', 'plume',
                                'burrow', 'ember', 'marvel', 'riddle', 'puzzle', 'fossil', 'crystal',
                                'habitat', 'mammal', 'reptile', 'migrate', 'gravity', 'energy'
                            ].filter(isWordValid);
                            if (fallbackWords.length > 0) {
                                const randomSeed = Date.now() + Math.random();
                                word = fallbackWords[Math.floor((randomSeed % 1) * fallbackWords.length)];
                            }
                            // console.log('Using fallback kid word');
                        }
                    } else if (difficulty === 'teen') {
                        const apiUrl = 'https://api.datamuse.com/words?sp=?????????*&md=f&max=200';
                        console.log('API URL:', apiUrl);

                        const response = await fetch(apiUrl);
                        const data = await response.json();
                        console.log('API Response length:', data?.length);

                        if (data && data.length > 0) {
                            let filtered = data.filter(w => {
                                const freq = w.tags?.[0]?.replace('f:', '') || '0';
                                return parseFloat(freq) < 20 && /^[a-z]+$/.test(w.word) && isWordValid(w.word);
                            });
                            console.log('Filtered to less common:', filtered.length);

                            if (filtered.length > 0) {
                                const randomSeed = Date.now() + Math.random();
                                word = filtered[Math.floor((randomSeed % 1) * filtered.length)]?.word;
                            }
                        }

                        // Fallback to teen-level words
                        if (!word) {
                            let fallbackWords = [
                                'ambiguous', 'benevolent', 'candor', 'diligent', 'ephemeral', 'facetious',
                                'gregarious', 'haphazard', 'impetuous', 'juxtapose', 'loquacious', 'melancholy'
                            ].filter(isWordValid);
                            if (fallbackWords.length > 0) {
                                const randomSeed = Date.now() + Math.random();
                                word = fallbackWords[Math.floor((randomSeed % 1) * fallbackWords.length)];
                            }
                            // console.log('Using fallback teen word');
                        }
                    } else {
                        // For adults, use curated obscure words since APIs don't provide truly bizarre words
                        let obscureWords = [
                            'absquatulate', 'bumfuzzle', 'callipygian', 'defenestrate', 'erinaceous',
                            'floccinaucinihilipilification', 'gobemouche', 'higgler', 'impignorate',
                            'jentacular', 'kakistocracy', 'lollygag', 'malarkey', 'nudiustertian',
                            'octothorpe', 'pauciloquent', 'quomodocunquize', 'rhadamanthine',
                            'smellfungus', 'taradiddle', 'ulotrichous', 'vomitory', 'wabbit',
                            'xertz', 'yarborough', 'zenzizenzizenzic', 'borborygmus', 'collywobbles',
                            'donnybrook', 'fartlek', 'gardyloo', 'hobbledehoy', 'kerfuffle',
                            'snollygoster', 'bumbershoot', 'cattywampus', 'discombobulate', 'flibbertigibbet',
                            'gobbledygook', 'hullabaloo', 'lackadaisical', 'persnickety', 'shenanigans',
                            'whippersnapper', 'brouhaha', 'cantankerous', 'curmudgeon', 'dillydally'
                        ].filter(isWordValid);

                        if (obscureWords.length > 0) {
                            const randomSeed = Date.now() + Math.random();
                            word = obscureWords[Math.floor((randomSeed % 1) * obscureWords.length)];
                        }
                        // console.log('Using curated obscure word for adults');
                    }

                    // console.log('Selected word:', word);
                    // console.log('======================');

                    if (word) {
                        setCurrentWord(word);
                    } else {
                        alert('Could not get a word. Please try again or enter one manually.');
                    }
                } catch (error) {
                    console.error('Error getting word:', error);
                    alert('Error fetching word. Please try again or enter one manually.');
                }
                setLoadingWord(false);
            };

            const getDefinition = async () => {
                if (!currentWord.trim()) {
                    alert('Please enter a word first');
                    return;
                }

                setLoadingDefinition(true);
                try {
                    let definition = null;
                    let phonetic = '';

                    // Try API 1: Free Dictionary API
                    // console.log('Trying Free Dictionary API...');
                    try {
                        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentWord.toLowerCase()}`);

                        if (response.ok) {
                            const data = await response.json();
                            if (data && data[0]) {
                                if (data[0].meanings && data[0].meanings[0]) {
                                    definition = data[0].meanings[0].definitions[0].definition;
                                    // console.log('Found definition in Free Dictionary API');
                                }
                                // Get phonetic pronunciation
                                if (data[0].phonetic) {
                                    phonetic = data[0].phonetic;
                                } else if (data[0].phonetics && data[0].phonetics[0]?.text) {
                                    phonetic = data[0].phonetics[0].text;
                                }
                                // Extract word origin if available
                                if (data[0].origin) {
                                    setWordFact(`Origin: ${data[0].origin}`);
                                }
                            }
                        }
                    } catch (e) {
                        console.log('Free Dictionary API failed:', e);
                    }

                    // Try API 2: Wiktionary via MediaWiki API
                    if (!definition) {
                        console.log('Trying Wiktionary API...');
                        try {
                            const response = await fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(currentWord.toLowerCase())}`);

                            if (response.ok) {
                                const data = await response.json();
                                if (data && data.en && data.en[0] && data.en[0].definitions && data.en[0].definitions[0]) {
                                    definition = data.en[0].definitions[0].definition;
                                    // Clean up Wiktionary HTML/wiki markup
                                    definition = definition.replace(/<[^>]*>/g, '').replace(/\[\[([^\]]+)\]\]/g, '$1');
                                    console.log('Found definition in Wiktionary');
                                }
                            }
                        } catch (e) {
                            console.log('Wiktionary API failed:', e);
                        }
                    }

                    // Try API 3: Dictionary API (dictionaryapi.com)
                    if (!definition) {
                        console.log('Trying DictionaryAPI.com...');
                        try {
                            const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${currentWord.toLowerCase()}?key=your-key-here`);
                            // Note: This requires an API key, but we'll try anyway in case it works
                            if (response.ok) {
                                const data = await response.json();
                                if (data && data[0] && data[0].shortdef && data[0].shortdef[0]) {
                                    definition = data[0].shortdef[0];
                                    console.log('Found definition in DictionaryAPI.com');
                                }
                            }
                        } catch (e) {
                            console.log('DictionaryAPI.com failed:', e);
                        }
                    }

                    if (definition) {
                        setRealDefinition(definition.charAt(0).toUpperCase() + definition.slice(1));
                        if (phonetic) {
                            setPronunciation(phonetic);
                        }
                        // Generate a fun fact if we don't have one from origin
                        if (!wordFact) {
                            const facts = [
                                `The word "${currentWord}" has ${currentWord.length} letters.`,
                                `This is a ${difficulty}-level word!`,
                                `Challenge your friends with this word.`
                            ];
                            setWordFact(facts[Math.floor(Math.random() * facts.length)]);
                        }
                    } else {
                        alert('Could not find definition for "' + currentWord + '" in any dictionary. Please enter the definition manually or search online (try Merriam-Webster.com or Dictionary.com).');
                    }
                } catch (error) {
                    console.error('Definition fetch error:', error);
                    alert('Error fetching definition. Please enter the definition manually or search online.');
                }
                setLoadingDefinition(false);
            };

            const speakWord = () => {
                if ('speechSynthesis' in window && currentWord) {
                    const utterance = new SpeechSynthesisUtterance(currentWord);
                    utterance.rate = 0.8;
                    utterance.pitch = 1;
                    window.speechSynthesis.speak(utterance);
                }
            };

            const startRound = async () => {
                if (!currentWord || !realDefinition) {
                    alert('Please enter word and definition');
                    return;
                }

                // Check if word was already used
                const wordLower = currentWord.toLowerCase().trim();
                if (usedWords.includes(wordLower)) {
                    if (!confirm(`"${currentWord}" has been used before. Use it anyway?`)) {
                        return;
                    }
                } else {
                    // Add to used words
                    const updatedUsedWords = [...usedWords, wordLower];
                    await database.ref(`games/${gameCode}/usedWords`).set(updatedUsedWords);
                }

                await database.ref(`games/${gameCode}`).update({
                    state: 'collecting',
                    currentWord: currentWord,
                    realDefinition: realDefinition,
                    difficulty: difficulty,
                    pronunciation: pronunciation || '',
                    wordFact: wordFact || '',
                    definitions: {},
                    votes: {}
                });
            };

            const skipWord = async () => {
                if (!currentWord.trim()) {
                    alert('Please enter a word first');
                    return;
                }

                const wordLower = currentWord.toLowerCase().trim();
                const updatedSkippedWords = [...skippedWords, wordLower];
                await database.ref(`games/${gameCode}/skippedWords`).set(updatedSkippedWords);

                setCurrentWord('');
                setRealDefinition('');
                alert(`"${currentWord}" has been marked as skipped`);
            };

            const clearWordHistory = async () => {
                if (confirm('Clear all word history (used and skipped)? This cannot be undone.')) {
                    await database.ref(`games/${gameCode}`).update({
                        usedWords: [],
                        skippedWords: []
                    });
                    setUsedWords([]);
                    setSkippedWords([]);
                    alert('Word history cleared!');
                }
            };

            const endGame = async () => {
                if (!confirm('End this game and save to history? This will close the game for all players.')) {
                    return;
                }

                const players = gameData.players || {};
                const leftPlayers = gameData.leftPlayers || {};

                // Combine active and left players
                const allPlayers = [
                    ...Object.entries(players).map(([id, player]) => ({
                        name: player.name,
                        score: player.score,
                        active: true
                    })),
                    ...Object.entries(leftPlayers).map(([id, player]) => ({
                        name: player.name,
                        score: player.score,
                        active: false
                    }))
                ].sort((a, b) => b.score - a.score);

                // Save to history
                const historyId = `${gameCode}_${Date.now()}`;
                await database.ref(`gameHistory/${historyId}`).set({
                    gameCode,
                    players: allPlayers,
                    winner: allPlayers[0],
                    endedAt: Date.now(),
                    hostName: gameData.hostName,
                    roundsPlayed: gameData.roundsPlayed || 0
                });

                // Delete active game
                await database.ref(`games/${gameCode}`).remove();

                // Remove from created games list
                const createdGames = JSON.parse(localStorage.getItem('dictionaryGame_createdGames') || '[]');
                const updatedCreatedGames = createdGames.filter(game => game.code !== gameCode);
                localStorage.setItem('dictionaryGame_createdGames', JSON.stringify(updatedCreatedGames));

                // Clear localStorage
                localStorage.removeItem('dictionaryGame_code');
                localStorage.removeItem('dictionaryGame_playerId');
                localStorage.removeItem('dictionaryGame_playerName');

                alert('Game ended and saved to history!');
                setView('home');
            };

            const quickJoinGame = (code) => {
                setInputGameCode(code);
            };

            const submitDefinition = async () => {
                if (!myDefinition.trim()) {
                    alert('Please enter a definition');
                    return;
                }

                await database.ref(`games/${gameCode}/definitions/${playerId}`).set({
                    text: myDefinition.trim()
                });

                setMyDefinition('');
            };

            const startVoting = async () => {
                await database.ref(`games/${gameCode}`).update({
                    state: 'voting'
                });
            };

            const castVote = async (defId) => {
                await database.ref(`games/${gameCode}/votes/${playerId}`).set(defId);
                setMyVote(defId);
            };

            const showResults = async () => {
                const votes = gameData.votes || {};
                const definitions = gameData.definitions || {};
                const players = gameData.players || {};
                const dictionaryHolderId = gameData.dictionaryHolder || gameData.host;

                const voteCounts = {};
                Object.values(votes).forEach(defId => {
                    voteCounts[defId] = (voteCounts[defId] || 0) + 1;
                });

                const updates = {};

                // Award points to players whose definitions were voted for
                Object.keys(definitions).forEach(defPlayerId => {
                    if (voteCounts[defPlayerId]) {
                        const currentScore = players[defPlayerId]?.score || 0;
                        updates[`players/${defPlayerId}/score`] = currentScore + voteCounts[defPlayerId];
                    }
                });

                // Award points to dictionary holder for each vote on the real definition
                if (voteCounts['real']) {
                    const currentScore = players[dictionaryHolderId]?.score || 0;
                    updates[`players/${dictionaryHolderId}/score`] = currentScore + voteCounts['real'];
                }

                // Award 1 point to each player who voted for the real definition
                Object.entries(votes).forEach(([voterId, defId]) => {
                    if (defId === 'real') {
                        const currentScore = players[voterId]?.score || 0;
                        updates[`players/${voterId}/score`] = (updates[`players/${voterId}/score`] || currentScore) + 1;
                    }
                });

                updates.state = 'results';
                updates.voteCounts = voteCounts;

                await database.ref(`games/${gameCode}`).update(updates);
            };

            const newRound = async () => {
                await database.ref(`games/${gameCode}`).update({
                    state: 'setup',
                    currentWord: null,
                    realDefinition: null,
                    definitions: null,
                    votes: null,
                    voteCounts: null,
                    roundsPlayed: (gameData.roundsPlayed || 0) + 1,
                    lastActivity: Date.now()
                });
                setCurrentWord('');
                setRealDefinition('');
                setMyDefinition('');
                setMyVote(null);
            };

            const restartRound = async () => {
                if (confirm('Restart this round? All definitions and votes will be lost.')) {
                    await database.ref(`games/${gameCode}`).update({
                        state: 'setup',
                        currentWord: null,
                        realDefinition: null,
                        definitions: null,
                        votes: null,
                        voteCounts: null
                    });
                    setCurrentWord('');
                    setRealDefinition('');
                    setMyDefinition('');
                    setMyVote(null);
                }
            };

            const changeDictionaryHolder = async (newHolderId) => {
                await database.ref(`games/${gameCode}`).update({
                    dictionaryHolder: newHolderId,
                    dictionaryHolderName: players[newHolderId]?.name
                });
            };

            const copyGameCode = () => {
                navigator.clipboard.writeText(gameCode);
                showToast('Game code copied!', 'success');
            };

            const [showQRCode, setShowQRCode] = useState(false);

            const shareGameCode = () => {
                setShowQRCode(!showQRCode);
            };

            const addBotPlayers = async () => {
                const numBots = prompt('How many bots would you like to add? (1-8)', '4');
                if (!numBots) return;

                const count = Math.min(Math.max(parseInt(numBots) || 4, 1), 8);

                const botNames = [
                    'Shakespeare', 'Einstein', 'Cleopatra', 'Tesla',
                    'Darwin', 'Curie', 'Napoleon', 'Socrates'
                ];
                const botAvatars = ['scholar', 'dog', 'bird', 'snake', 'cat', 'hat', 'car', 'tree'];

                for (let i = 0; i < count; i++) {
                    const botId = `bot_${Date.now()}_${i}`;
                    await database.ref(`games/${gameCode}/players/${botId}`).set({
                        name: botNames[i],
                        score: 0,
                        isHost: false,
                        avatar: botAvatars[i],
                        isBot: true
                    });
                    // Small delay to ensure unique timestamps
                    await new Promise(resolve => setTimeout(resolve, 10));
                }

                await database.ref(`games/${gameCode}/lastActivity`).set(Date.now());
            };

            // Bot AI - monitors game state and responds
            useEffect(() => {
                if (!gameCode || !gameData) return;

                const players = gameData.players || {};
                const bots = Object.entries(players).filter(([id, p]) => p.isBot);

                if (bots.length === 0) return;

                // Bots submit definitions
                if (gameData.state === 'collecting') {
                    const definitions = gameData.definitions || {};

                    bots.forEach(([botId, bot]) => {
                        if (!definitions[botId]) {
                            // Delay bot response to simulate thinking
                            setTimeout(async () => {
                                const word = gameData.currentWord;

                                // Get current definitions to avoid duplicates
                                const currentDefs = await database.ref(`games/${gameCode}/definitions`).once('value');
                                const existingDefs = currentDefs.val() || {};
                                const existingTexts = Object.values(existingDefs).map(d => d.text);

                                // Smarter definition templates based on word structure
                                const definitionTemplates = [
                                    // Noun templates
                                    `A ${['small', 'large', 'rare', 'common', 'unusual'][Math.floor(Math.random() * 5)]} object or substance used in ${['ancient', 'medieval', 'traditional', 'modern'][Math.floor(Math.random() * 4)]} ${['ceremonies', 'practices', 'crafts', 'medicine'][Math.floor(Math.random() * 4)]}`,
                                    `The ${['process', 'art', 'practice', 'technique'][Math.floor(Math.random() * 4)]} of ${['creating', 'producing', 'forming', 'shaping'][Math.floor(Math.random() * 4)]} something through ${['careful', 'precise', 'deliberate', 'systematic'][Math.floor(Math.random() * 4)]} means`,
                                    `A ${['medical', 'botanical', 'geological', 'astronomical'][Math.floor(Math.random() * 4)]} term for a ${['condition', 'phenomenon', 'formation', 'pattern'][Math.floor(Math.random() * 4)]} ${['characterized by', 'resulting from', 'associated with', 'marked by'][Math.floor(Math.random() * 4)]} ${['unusual', 'specific', 'distinct', 'particular'][Math.floor(Math.random() * 4)]} properties`,

                                    // Verb templates
                                    `To ${['carefully', 'deliberately', 'systematically', 'thoroughly'][Math.floor(Math.random() * 4)]} ${['arrange', 'organize', 'prepare', 'modify'][Math.floor(Math.random() * 4)]} something in a ${['specific', 'particular', 'prescribed', 'traditional'][Math.floor(Math.random() * 4)]} manner`,
                                    `The act of ${['moving', 'transferring', 'converting', 'transforming'][Math.floor(Math.random() * 4)]} something from one ${['state', 'form', 'position', 'condition'][Math.floor(Math.random() * 4)]} to another`,

                                    // Adjective templates
                                    `Having the ${['quality', 'characteristic', 'property', 'nature'][Math.floor(Math.random() * 4)]} of being ${['exceptionally', 'particularly', 'remarkably', 'notably'][Math.floor(Math.random() * 4)]} ${['complex', 'simple', 'delicate', 'robust'][Math.floor(Math.random() * 4)]}`,
                                    `${['Relating to', 'Pertaining to', 'Associated with', 'Connected with'][Math.floor(Math.random() * 4)]} ${['ancient', 'historical', 'traditional', 'cultural'][Math.floor(Math.random() * 4)]} ${['beliefs', 'practices', 'customs', 'traditions'][Math.floor(Math.random() * 4)]}`,

                                    // Professional/occupation templates
                                    `A person who ${['specializes in', 'practices', 'studies', 'engages in'][Math.floor(Math.random() * 4)]} the ${['art', 'science', 'craft', 'skill'][Math.floor(Math.random() * 4)]} of ${['creating', 'maintaining', 'analyzing', 'interpreting'][Math.floor(Math.random() * 4)]} ${['complex', 'intricate', 'detailed', 'specialized'][Math.floor(Math.random() * 4)]} ${['works', 'systems', 'structures', 'patterns'][Math.floor(Math.random() * 4)]}`,

                                    // Archaic/historical templates
                                    `An ${['archaic', 'obsolete', 'antiquated', 'historical'][Math.floor(Math.random() * 4)]} term ${['formerly', 'originally', 'traditionally', 'historically'][Math.floor(Math.random() * 4)]} used to ${['describe', 'denote', 'refer to', 'indicate'][Math.floor(Math.random() * 4)]} ${['persons', 'objects', 'practices', 'conditions'][Math.floor(Math.random() * 4)]} of ${['particular', 'special', 'significant', 'notable'][Math.floor(Math.random() * 4)]} importance`
                                ];

                                // Try to find a unique definition (max 10 attempts)
                                let randomDef;
                                let attempts = 0;
                                do {
                                    randomDef = definitionTemplates[Math.floor(Math.random() * definitionTemplates.length)];
                                    attempts++;
                                } while (existingTexts.includes(randomDef) && attempts < 10);

                                // If still duplicate after 10 tries, add bot name to make it unique
                                if (existingTexts.includes(randomDef)) {
                                    randomDef = `${randomDef} (variant interpretation)`;
                                }

                                await database.ref(`games/${gameCode}/definitions/${botId}`).set({
                                    text: randomDef
                                });
                            }, Math.random() * 3000 + 1000); // 1-4 seconds
                        }
                    });
                }

                // Bots cast votes
                if (gameData.state === 'voting') {
                    const votes = gameData.votes || {};
                    const definitions = gameData.definitions || {};

                    bots.forEach(([botId, bot]) => {
                        if (!votes[botId]) {
                            setTimeout(async () => {
                                // Get all available choices (other bots' definitions + real)
                                const availableChoices = [
                                    ...Object.entries(definitions).filter(([id]) => id !== botId).map(([id, def]) => ({
                                        id,
                                        text: def.text,
                                        // Score based on length and complexity markers
                                        score: def.text.length +
                                               (def.text.includes('characterized by') ? 10 : 0) +
                                               (def.text.includes('traditionally') ? 10 : 0) +
                                               (def.text.includes('archaic') ? 10 : 0) +
                                               (def.text.includes('obsolete') ? 10 : 0)
                                    })),
                                    {
                                        id: 'real',
                                        text: gameData.realDefinition || '',
                                        score: (gameData.realDefinition || '').length +
                                               ((gameData.realDefinition || '').includes('characterized by') ? 10 : 0) +
                                               ((gameData.realDefinition || '').includes('traditionally') ? 10 : 0)
                                    }
                                ];

                                // 70% of the time, pick a weighted random choice (smarter)
                                // 30% of the time, pick completely randomly (to add variety)
                                let choice;
                                if (Math.random() < 0.7) {
                                    // Weighted selection - prefer definitions with higher scores
                                    const totalScore = availableChoices.reduce((sum, c) => sum + c.score, 0);
                                    let random = Math.random() * totalScore;
                                    choice = availableChoices[0].id;
                                    for (const c of availableChoices) {
                                        random -= c.score;
                                        if (random <= 0) {
                                            choice = c.id;
                                            break;
                                        }
                                    }
                                } else {
                                    // Random selection
                                    choice = availableChoices[Math.floor(Math.random() * availableChoices.length)].id;
                                }

                                await database.ref(`games/${gameCode}/votes/${botId}`).set(choice);
                            }, Math.random() * 3000 + 1000); // 1-4 seconds
                        }
                    });
                }
            }, [gameData?.state, gameData?.definitions, gameData?.votes, gameCode]);

            const leaveGame = async () => {
                if (!confirm('Are you sure you want to leave this game? This cannot be undone.')) {
                    return;
                }

                const players = gameData.players || {};
                const isHost = gameData.host === playerId;
                const playerCount = Object.keys(players).length;
                const leavingPlayer = players[playerId];

                // Store player info in leftPlayers for history
                const leftPlayers = gameData.leftPlayers || {};
                leftPlayers[playerId] = {
                    name: leavingPlayer.name,
                    score: leavingPlayer.score,
                    avatar: leavingPlayer.avatar,
                    leftAt: Date.now()
                };

                // Update game with left player info and remove from active players
                await database.ref(`games/${gameCode}/leftPlayers`).set(leftPlayers);
                await database.ref(`games/${gameCode}/players/${playerId}`).remove();
                await database.ref(`games/${gameCode}/lastActivity`).set(Date.now());

                // If the leaving player was the host, transfer host to another player or end game
                if (isHost && playerCount > 1) {
                    const remainingPlayers = Object.entries(players).filter(([id]) => id !== playerId);
                    if (remainingPlayers.length > 0) {
                        const [newHostId, newHostPlayer] = remainingPlayers[0];
                        await database.ref(`games/${gameCode}`).update({
                            host: newHostId,
                            hostName: newHostPlayer.name,
                            [`players/${newHostId}/isHost`]: true
                        });
                        console.log(`Host transferred to ${newHostPlayer.name}`);
                    }
                } else if (isHost && playerCount === 1) {
                    // Last player leaving, delete the game
                    await database.ref(`games/${gameCode}`).remove();
                } else if (playerCount === 1) {
                    // Last non-host player leaving, delete the game
                    await database.ref(`games/${gameCode}`).remove();
                }

                // Clear localStorage and return to home
                localStorage.removeItem('dictionaryGame_code');
                localStorage.removeItem('dictionaryGame_playerId');
                localStorage.removeItem('dictionaryGame_playerName');

                alert('You have left the game.');
                setView('home');
            };

            const passDictionary = async (newDictionaryHolderId) => {
                const players = gameData.players || {};
                const newHolder = players[newDictionaryHolderId];

                if (!newHolder) {
                    alert('Selected player not found.');
                    return;
                }

                await database.ref(`games/${gameCode}`).update({
                    dictionaryHolder: newDictionaryHolderId,
                    dictionaryHolderName: newHolder.name
                });

                setShowPassDictionary(false);
                alert(`Dictionary passed to ${newHolder.name}!`);
            };

            // Load created games for management
            useEffect(() => {
                if (view === 'manage') {
                    // Load all active games from Firebase
                    const gamesRef = database.ref('games');
                    gamesRef.once('value', (snapshot) => {
                        const data = snapshot.val();
                        // console.log('Manage Games - Firebase data:', data);
                        if (data) {
                            const games = Object.entries(data).map(([code, gameData]) => ({
                                code,
                                ...gameData,
                                playerCount: Object.keys(gameData.players || {}).length
                            }));
                            // console.log('Manage Games - Processed games:', games);
                            setMyCreatedGames(games);
                        } else {
                            // console.log('Manage Games - No data found');
                            setMyCreatedGames([]);
                        }
                    });
                }
            }, [view]);

            // Load live games and full history for stats view
            useEffect(() => {
                if (view === 'stats') {
                    // Load all active games
                    const gamesRef = database.ref('games');
                    gamesRef.on('value', (snapshot) => {
                        const data = snapshot.val();
                        if (data) {
                            const games = Object.entries(data).map(([code, game]) => ({
                                code,
                                ...game,
                                playerCount: Object.keys(game.players || {}).length
                            }));
                            setLiveGames(games);
                        } else {
                            setLiveGames([]);
                        }
                    });

                    // Load all game history
                    const historyRef = database.ref('gameHistory');
                    historyRef.on('value', (snapshot) => {
                        const data = snapshot.val();
                        if (data) {
                            const history = Object.values(data)
                                .sort((a, b) => b.endedAt - a.endedAt);
                            setAllGameHistory(history);
                        } else {
                            setAllGameHistory([]);
                        }
                    });

                    return () => {
                        gamesRef.off();
                        historyRef.off();
                    };
                }
            }, [view]);

            const resetAllData = async () => {
                if (!confirm('⚠️ DANGER: This will delete ALL games, game history, and localStorage data. This cannot be undone. Are you absolutely sure?')) {
                    return;
                }

                if (!confirm('Last chance! This will permanently delete everything. Continue?')) {
                    return;
                }

                try {
                    // Clear all Firebase data
                    await database.ref('games').remove();
                    await database.ref('gameHistory').remove();

                    // Clear all localStorage
                    localStorage.clear();

                    // Reset all state
                    setGameCode('');
                    setPlayerName('');
                    setPlayerId(null);
                    setGameData(null);
                    setAvailableGames([]);
                    setGameHistory([]);
                    setMyCreatedGames([]);
                    setView('home');

                    alert('✅ All data has been reset successfully!');
                } catch (error) {
                    console.error('Error resetting data:', error);
                    alert('❌ Error resetting data. Check console for details.');
                }
            };

            const terminateGame = async (gameCode, gameName) => {
                if (!confirm(`Are you sure you want to terminate the game "${gameCode}"? This will end the game for all players and cannot be undone.`)) {
                    return;
                }

                try {
                    // Get game data before deletion
                    const snapshot = await database.ref(`games/${gameCode}`).once('value');
                    if (snapshot.exists()) {
                        const gameData = snapshot.val();
                        const players = gameData.players || {};
                        const sortedPlayers = Object.entries(players)
                            .map(([id, player]) => ({ name: player?.name || 'Unknown', score: player?.score || 0 }))
                            .sort((a, b) => b.score - a.score);

                        // Save to history as terminated game
                        const historyId = `${gameCode}_terminated_${Date.now()}`;
                        const historyData = {
                            gameCode,
                            players: sortedPlayers,
                            winner: sortedPlayers[0] || null,
                            endedAt: Date.now(),
                            roundsPlayed: gameData.roundsPlayed || 0,
                            terminated: true
                        };

                        // Only add hostName if it exists
                        if (gameData.hostName) {
                            historyData.hostName = gameData.hostName;
                        }

                        await database.ref(`gameHistory/${historyId}`).set(historyData);
                    }

                    // Delete the game
                    await database.ref(`games/${gameCode}`).remove();

                    // Remove from created games list
                    const createdGames = JSON.parse(localStorage.getItem('dictionaryGame_createdGames') || '[]');
                    const updatedCreatedGames = createdGames.filter(game => game.code !== gameCode);
                    localStorage.setItem('dictionaryGame_createdGames', JSON.stringify(updatedCreatedGames));

                    // Refresh the list
                    setMyCreatedGames(prev => prev.filter(game => game.code !== gameCode));

                    alert(`Game ${gameCode} has been terminated successfully.`);
                } catch (error) {
                    console.error('Error terminating game:', error);
                    alert('Error terminating game. Please try again.');
                }
            };

            if (view === 'home') {
                return (
                    <>
                    <div className="min-h-screen gradient-bg-animated flex items-center justify-center p-4">
                        {/* Reconnect Modal */}
                        {showReconnectModal && activeGames.length > 0 && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                                <div className="bg-white rounded-lg shadow-2xl p-6 max-w-lg w-full card-3d">
                                    <h2 className="text-2xl font-bold text-purple-900 mb-4">Welcome Back!</h2>
                                    <p className="text-gray-600 mb-4">You have {activeGames.length} active game{activeGames.length > 1 ? 's' : ''}. Would you like to rejoin?</p>

                                    <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                                        {activeGames.map((game, idx) => (
                                            <button
                                                key={game.code}
                                                onClick={() => {
                                                    setGameCode(game.code);
                                                    setPlayerId(game.playerId);
                                                    setPlayerName(game.playerName);
                                                    setView('game');
                                                    setShowReconnectModal(false);
                                                }}
                                                className={`w-full text-left p-4 rounded-lg border-2 transition-all btn-3d ${
                                                    idx === 0
                                                        ? 'border-purple-500 bg-purple-50'
                                                        : 'border-gray-200 hover:border-purple-300'
                                                }`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <span className="font-mono font-bold text-lg text-purple-900">{game.code}</span>
                                                        {idx === 0 && <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">Most Recent</span>}
                                                    </div>
                                                    <span className="text-sm text-gray-500">{game.playerCount} players</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Host: {game.hostName}</p>
                                                <p className="text-xs text-purple-600 mt-1">State: {game.state}</p>
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setShowReconnectModal(false)}
                                        className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
                                    >
                                        Start New Game Instead
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="glass-card rounded-2xl shadow-2xl p-8 max-w-md w-full card-3d fade-in">
                            <div className="text-center mb-8">
                                <div className="flex justify-center mb-4 float-animation">
                                    <DictionaryLogo size={80} />
                                </div>
                                <h1 className="text-3xl font-bold text-purple-900 mb-2 gradient-text">Dictionary Game</h1>
                                <p className="text-gray-600">Multiplayer word bluffing game</p>
                            </div>

                            <div className="space-y-4">
                                <button onClick={() => setView('host')} className="w-full px-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-lg btn-3d fade-in-delay-1">
                                    Host New Game
                                </button>

                                <button onClick={() => setView('join')} className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg btn-3d fade-in-delay-2">
                                    Join Game
                                </button>

                                <button onClick={() => setView('manage')} className="w-full px-6 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold text-lg btn-3d fade-in-delay-3">
                                    Manage My Games
                                </button>

                                <button onClick={() => setView('stats')} className="w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-lg btn-3d fade-in-delay-4">
                                    📊 Game Stats
                                </button>
                            </div>

                            {/* Hidden Admin Reset Button - Hold Shift and click the logo 3 times to show */}
                            <div className="mt-8 text-center">
                                <button
                                    onClick={(e) => {
                                        if (e.shiftKey) {
                                            const clickCount = parseInt(e.target.dataset.clicks || '0') + 1;
                                            e.target.dataset.clicks = clickCount;
                                            if (clickCount >= 3) {
                                                if (confirm('Show admin reset button?')) {
                                                    const resetBtn = document.createElement('button');
                                                    resetBtn.textContent = '🔥 RESET ALL DATA';
                                                    resetBtn.className = 'mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-bold';
                                                    resetBtn.onclick = resetAllData;
                                                    e.target.parentNode.appendChild(resetBtn);
                                                    e.target.dataset.clicks = '0';
                                                }
                                            }
                                        }
                                    }}
                                    className="text-xs text-gray-400 hover:text-gray-600"
                                >
                                    v1.0
                                </button>
                            </div>

                            {gameHistory.length > 0 && (
                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Recent Games</h2>
                                    <div className="space-y-2 max-h-64 overflow-y-auto">
                                        {gameHistory.map((game, idx) => (
                                            <div key={idx} className="bg-gray-50 p-3 rounded text-sm">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-semibold text-purple-900">🏆 {game.winner?.name}</span>
                                                    <span className="text-xs text-gray-500">{new Date(game.endedAt).toLocaleDateString()}</span>
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    {game.players?.slice(0, 3).map(p => `${p.name} (${p.score})`).join(', ')}
                                                    {game.players?.length > 3 && '...'}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Toast Notification */}
                    {toast.show && (
                        <div className={`toast show ${toast.type}`}>
                            {toast.message}
                        </div>
                    )}
                    </>
                );
            }

            if (view === 'host') {
                return (
                    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full card-3d">
                            <div className="flex items-center gap-3 mb-6">
                                <DictionaryLogo size={48} />
                                <h2 className="text-2xl font-bold text-purple-900">Host New Game</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Your Name</label>
                                    <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Choose Your Avatar</label>
                                    <div className="grid grid-cols-5 gap-2">
                                        {avatarOptions.map((avatar) => (
                                            <button
                                                key={avatar.id}
                                                onClick={() => setSelectedAvatar(avatar.id)}
                                                className={`p-3 text-3xl rounded-lg border-2 transition ${
                                                    selectedAvatar === avatar.id
                                                        ? 'border-purple-600 bg-purple-50'
                                                        : 'border-gray-200 hover:border-purple-300'
                                                }`}
                                                title={avatar.label}
                                            >
                                                {avatar.emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={createGame} disabled={!playerName.trim()} className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 btn-3d">
                                    Create Game
                                </button>

                                <button onClick={() => setView('home')} className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d">
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                                );
            }

            if (view === 'manage') {
                return (
                    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full card-3d">
                            <div className="flex items-center gap-3 mb-6">
                                <DictionaryLogo size={48} />
                                <h2 className="text-2xl font-bold text-purple-900">Manage My Games</h2>
                            </div>

                            {myCreatedGames.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-600 mb-4">You haven't created any active games yet.</p>
                                    <button onClick={() => setView('host')} className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 btn-3d">
                                        Create Your First Game
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <p className="text-gray-600 mb-4">All active games ({myCreatedGames.length}):</p>
                                    {myCreatedGames.map((game) => (
                                        <div key={game.code} className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 depth-layer-2">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="font-mono font-bold text-xl text-orange-900">{game.code}</span>
                                                        <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">
                                                            {game.state || 'setup'}
                                                        </span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                                        <div>
                                                            <span className="font-medium">Players:</span> {game.playerCount}
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Host:</span> {game.hostName}
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Created:</span> {new Date(game.createdAt).toLocaleDateString()}
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Rounds:</span> {game.roundsPlayed || 0}
                                                        </div>
                                                    </div>
                                                    {game.currentWord && (
                                                        <div className="mt-2 text-sm">
                                                            <span className="font-medium text-purple-700">Current Word:</span>
                                                            <span className="text-purple-900 font-bold ml-1">{game.currentWord}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex gap-2 ml-4">
                                                    <button
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(game.code);
                                                            alert('Game code copied!');
                                                        }}
                                                        className="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                                                        title="Copy game code"
                                                    >
                                                        Copy Code
                                                    </button>
                                                    <button
                                                        onClick={() => terminateGame(game.code, game.hostName)}
                                                        className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                                                        title="Terminate this game"
                                                    >
                                                        Terminate
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-6 space-y-2">
                                <button onClick={() => setView('home')} className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d">
                                    Back to Home
                                </button>

                                <button
                                    onClick={resetAllData}
                                    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-bold"
                                    title="Delete all games and data - cannot be undone!"
                                >
                                    🔥 Reset All Data (DANGER)
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }

            if (view === 'join') {
                return (
                    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full card-3d">
                            <div className="flex items-center gap-3 mb-6">
                                <DictionaryLogo size={48} />
                                <h2 className="text-2xl font-bold text-purple-900">Join Game</h2>
                            </div>

                            {availableGames.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Active Games:</h3>
                                    <div className="space-y-2 max-h-48 overflow-y-auto">
                                        {availableGames.map((game) => (
                                            <button
                                                key={game.code}
                                                onClick={() => quickJoinGame(game.code)}
                                                className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span className="font-mono font-bold text-blue-900">{game.code}</span>
                                                        <span className="text-sm text-gray-600 ml-2">• Host: {game.hostName}</span>
                                                    </div>
                                                    <span className="text-sm text-gray-500">{game.playerCount} players</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Click a game to auto-fill the code</p>
                                </div>
                            )}

                            <div className="space-y-4">{availableGames.length > 0 && <p className="text-sm text-gray-600 text-center">Or enter code manually:</p>}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Game Code</label>
                                    <input type="text" value={inputGameCode} onChange={(e) => setInputGameCode(e.target.value.toUpperCase())} placeholder="Enter 6-digit code" maxLength="6" className="w-full px-4 py-2 border rounded-lg uppercase" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Your Name</label>
                                    <input type="text" value={inputPlayerName} onChange={(e) => setInputPlayerName(e.target.value)} placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Choose Your Avatar</label>
                                    <div className="grid grid-cols-5 gap-2">
                                        {avatarOptions.map((avatar) => (
                                            <button
                                                key={avatar.id}
                                                onClick={() => setSelectedAvatar(avatar.id)}
                                                className={`p-3 text-3xl rounded-lg border-2 transition ${
                                                    selectedAvatar === avatar.id
                                                        ? 'border-blue-600 bg-blue-50'
                                                        : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                                title={avatar.label}
                                            >
                                                {avatar.emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button onClick={joinGame} disabled={!inputGameCode.trim() || !inputPlayerName.trim()} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 btn-3d">
                                    Join Game
                                </button>

                                <button onClick={() => setView('home')} className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d">
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }

            if (view === 'stats') {
                return (
                    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-lg shadow-xl p-8 mb-4">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <DictionaryLogo size={48} />
                                        <h2 className="text-2xl font-bold text-purple-900">Game Stats</h2>
                                    </div>
                                    <button onClick={() => setView('home')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                                        Back to Home
                                    </button>
                                </div>

                                {/* Live Games Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-purple-900 mb-4">🎮 Live Games ({liveGames.length})</h3>
                                    {liveGames.length === 0 ? (
                                        <p className="text-gray-600 text-center py-8">No active games right now</p>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {liveGames.map((game) => {
                                                const topPlayers = Object.entries(game.players || {})
                                                    .map(([id, p]) => ({ ...p, id }))
                                                    .sort((a, b) => (b.score || 0) - (a.score || 0))
                                                    .slice(0, 3);

                                                return (
                                                    <div key={game.code} className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-4 depth-layer-2">
                                                        <div className="flex justify-between items-start mb-3">
                                                            <div>
                                                                <span className="font-mono font-bold text-lg text-blue-900">{game.code}</span>
                                                                <p className="text-sm text-gray-600">Host: {game.hostName}</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                                    game.state === 'setup' ? 'bg-gray-200 text-gray-700' :
                                                                    game.state === 'collecting' ? 'bg-yellow-200 text-yellow-800' :
                                                                    game.state === 'voting' ? 'bg-blue-200 text-blue-800' :
                                                                    game.state === 'results' ? 'bg-green-200 text-green-800' : 'bg-gray-200'
                                                                }`}>
                                                                    {game.state}
                                                                </span>
                                                                <p className="text-xs text-gray-500 mt-1">{game.playerCount} players</p>
                                                            </div>
                                                        </div>

                                                        {game.currentWord && (
                                                            <div className="mb-3 p-2 bg-white rounded">
                                                                <p className="text-xs text-gray-600">Current Word:</p>
                                                                <p className="font-bold text-purple-700">{game.currentWord}</p>
                                                            </div>
                                                        )}

                                                        <div className="space-y-1">
                                                            <p className="text-xs font-semibold text-gray-700">Top Players:</p>
                                                            {topPlayers.map((player, idx) => (
                                                                <div key={player.id} className="flex justify-between text-sm">
                                                                    <span className="flex items-center gap-1">
                                                                        {idx === 0 && '🥇'} {idx === 1 && '🥈'} {idx === 2 && '🥉'}
                                                                        {player.name}
                                                                        {player.isBot && '🤖'}
                                                                    </span>
                                                                    <span className="font-bold text-purple-700">{player.score || 0}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="mt-3 text-xs text-gray-500">
                                                            Rounds: {game.roundsPlayed || 0}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Game History Section */}
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-900 mb-4">📜 Game History ({allGameHistory.length})</h3>
                                    {allGameHistory.length === 0 ? (
                                        <p className="text-gray-600 text-center py-8">No completed games yet</p>
                                    ) : (
                                        <div className="space-y-3 max-h-96 overflow-y-auto">
                                            {allGameHistory.map((game, idx) => (
                                                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-mono font-bold text-purple-900">{game.gameCode}</span>
                                                                {game.terminated && (
                                                                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Terminated</span>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-gray-600">Host: {game.hostName}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-xs text-gray-500">{new Date(game.endedAt).toLocaleDateString()}</p>
                                                            <p className="text-xs text-gray-500">{new Date(game.endedAt).toLocaleTimeString()}</p>
                                                        </div>
                                                    </div>

                                                    {game.winner && (
                                                        <div className="mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                                                            <p className="text-sm">
                                                                <span className="font-semibold text-yellow-900">🏆 Winner: {game.winner.name}</span>
                                                                <span className="text-gray-600 ml-2">({game.winner.score} points)</span>
                                                            </p>
                                                        </div>
                                                    )}

                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                                                        {game.players?.slice(0, 6).map((player, pIdx) => (
                                                            <div key={pIdx} className="flex justify-between bg-white p-2 rounded">
                                                                <span className="truncate">{player.name}</span>
                                                                <span className="font-semibold text-purple-700">{player.score}</span>
                                                            </div>
                                                        ))}
                                                        {game.players?.length > 6 && (
                                                            <div className="text-xs text-gray-500 p-2">
                                                                +{game.players.length - 6} more
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="mt-2 text-xs text-gray-500">
                                                        Rounds played: {game.roundsPlayed || 0}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

            if (view === 'game' && gameData) {
                const isHost = gameData.host === playerId;
                const isDictionaryHolder = (gameData.dictionaryHolder || gameData.host) === playerId;
                const dictionaryHolderName = gameData.dictionaryHolderName || gameData.hostName;
                const players = gameData.players || {};
                const definitions = gameData.definitions || {};
                const votes = gameData.votes || {};

                // Check if current player still exists in the game
                if (!players[playerId]) {
                    return (
                        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
                            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
                                <h2 className="text-2xl font-bold text-red-600 mb-4">Disconnected</h2>
                                <p className="text-gray-600 mb-4">You have been removed from this game or the game has ended.</p>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('dictionaryGame_code');
                                        localStorage.removeItem('dictionaryGame_playerId');
                                        localStorage.removeItem('dictionaryGame_playerName');
                                        setView('home');
                                    }}
                                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 btn-3d"
                                >
                                    Return to Home
                                </button>
                            </div>
                        </div>
                    );
                }

                return (
                    <div className="min-h-screen gradient-bg-animated">
                        <div className="max-w-4xl mx-auto">
                            {/* Sticky Header */}
                            <div className="sticky-header glass-card rounded-b-2xl p-4 mb-4 fade-in">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-xl font-bold text-purple-900">Dictionary Game</h1>
                                        <p className="text-xs text-gray-600">{isHost ? '👑 Host' : `Host: ${gameData.hostName}`}</p>
                                        <p className="text-xs text-purple-600 font-medium">
                                            📖 {isDictionaryHolder ? 'You hold the dictionary' : dictionaryHolderName}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-lg mb-2">
                                            <span className="font-mono font-bold text-purple-900 text-xl">{gameCode}</span>
                                            <button onClick={copyGameCode} className="text-purple-600 hover:text-purple-800 text-sm font-semibold btn-3d px-2 py-1">📋 Copy</button>
                                            <button onClick={shareGameCode} className="text-purple-600 hover:text-purple-800 text-sm font-semibold btn-3d px-2 py-1">🔗 QR</button>
                                        </div>
                                        {showQRCode && (
                                            <div className="mb-2 p-3 bg-white rounded-lg shadow-lg depth-layer-3">
                                                <img
                                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.origin + '?join=' + gameCode)}`}
                                                    alt="QR Code"
                                                    className="mx-auto"
                                                />
                                                <p className="text-xs text-gray-600 mt-2 text-center">Scan to join game</p>
                                            </div>
                                        )}
                                        <div className="flex gap-2 flex-wrap justify-end">
                                            {isHost && gameData.state === 'setup' && (
                                                <button onClick={addBotPlayers} className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 btn-3d">
                                                    🤖 Add Bots
                                                </button>
                                            )}
                                            {isDictionaryHolder && gameData.state === 'setup' && (
                                                <button onClick={restartRound} className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
                                                    Restart Round
                                                </button>
                                            )}
                                            {isDictionaryHolder && Object.keys(players).length > 1 && (
                                                <button onClick={() => setShowPassDictionary(true)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                                                    📖 Pass Dictionary
                                                </button>
                                            )}
                                            {isHost && (
                                                <button onClick={endGame} className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                                                    End Game
                                                </button>
                                            )}
                                            <button onClick={leaveGame} className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
                                                Leave Game
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl shadow-lg p-6 mb-4 slide-in">
                                <h2 className="text-lg font-semibold mb-3">Players ({Object.keys(players).length})</h2>
                                {isHost && gameData.state === 'setup' && (
                                    <div className="mb-3 p-3 bg-blue-50 rounded">
                                        <label className="block text-sm font-medium mb-2">Change Dictionary Holder:</label>
                                        <select
                                            value={gameData.dictionaryHolder || gameData.host}
                                            onChange={(e) => changeDictionaryHolder(e.target.value)}
                                            className="w-full px-3 py-2 border rounded"
                                        >
                                            {Object.entries(players).map(([id, player]) => (
                                                <option key={id} value={id}>{player.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(players)
                                        .sort(([, a], [, b]) => (b.score || 0) - (a.score || 0))
                                        .map(([id, player], index) => {
                                        const avatar = avatarOptions.find(a => a.id === player.avatar);
                                        const isMe = id === playerId;
                                        const medals = ['🥇', '🥈', '🥉'];
                                        return (
                                            <div key={id} className={`flex justify-between items-center p-3 rounded ${isMe ? 'bg-purple-100 border-2 border-purple-400' : 'bg-purple-50'}`}>
                                                <div className="flex items-center gap-2">
                                                    {index < 3 && player.score > 0 && <span className="text-xl">{medals[index]}</span>}
                                                    <span className="text-2xl">{avatar?.emoji || '👤'}</span>
                                                    <span className={`font-medium ${isMe ? 'text-purple-900' : ''}`}>
                                                        {player.name}
                                                        {player.isBot && <span className="ml-1 text-xs text-gray-500">🤖</span>}
                                                    </span>
                                                </div>
                                                <span className="text-purple-700 font-bold">{player.score || 0}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {isDictionaryHolder && gameData.state === 'setup' && (
                                <div className="glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in">
                                    <h2 className="text-xl font-semibold mb-4">Setup Round</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Difficulty</label>
                                            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full px-3 py-2 border rounded">
                                                <option value="kids">Kids (8-12)</option>
                                                <option value="teen">Teens</option>
                                                <option value="adult">Adults</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Word</label>
                                            <div className="flex gap-2 mb-2">
                                                <input type="text" value={currentWord} onChange={(e) => setCurrentWord(e.target.value)} placeholder="Enter word" className="flex-1 px-3 py-2 border rounded" />
                                                <button onClick={getRandomWord} disabled={loadingWord} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                                                    {loadingWord ? 'Loading...' : 'Random'}
                                                </button>
                                                {currentWord && (
                                                    <button onClick={speakWord} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" title="Pronounce word">
                                                        🔊
                                                    </button>
                                                )}
                                            </div>
                                            {pronunciation && (
                                                <p className="text-sm text-purple-600 mb-2">📢 Pronunciation: <span className="font-mono">{pronunciation}</span></p>
                                            )}
                                            {wordFact && (
                                                <p className="text-sm text-blue-600 mb-2">💡 {wordFact}</p>
                                            )}
                                            {currentWord && usedWords.includes(currentWord.toLowerCase().trim()) && (
                                                <p className="text-sm text-orange-600 mb-2">⚠️ This word has been used before</p>
                                            )}
                                            {currentWord && skippedWords.includes(currentWord.toLowerCase().trim()) && (
                                                <p className="text-sm text-red-600 mb-2">⚠️ This word was previously skipped</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">Real Definition</label>
                                            <div className="space-y-2">
                                                <textarea value={realDefinition} onChange={(e) => setRealDefinition(e.target.value)} placeholder="Enter the real definition" className="w-full px-3 py-2 border rounded h-24" />
                                                <button onClick={getDefinition} disabled={loadingDefinition || !currentWord.trim()} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400">
                                                    {loadingDefinition ? 'Loading...' : 'Get Definition'}
                                                </button>
                                                <p className="text-xs text-gray-500">Click "Get Definition" to auto-fill from online dictionary</p>
                                            </div>
                                        </div>

                                        <button onClick={startRound} className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                            Start Collecting Definitions
                                        </button>

                                        <button onClick={skipWord} disabled={!currentWord.trim()} className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-400">
                                            Skip Word (Too Easy/Already Known)
                                        </button>

                                        {(usedWords.length > 0 || skippedWords.length > 0) && (
                                            <div className="mt-4 p-3 bg-gray-50 rounded">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium text-gray-700">
                                                        Word History: {usedWords.length} used, {skippedWords.length} skipped
                                                    </span>
                                                    <button onClick={clearWordHistory} className="text-xs text-red-600 hover:text-red-700 underline">
                                                        Clear History
                                                    </button>
                                                </div>
                                                {usedWords.length > 0 && (
                                                    <div className="mb-2">
                                                        <p className="text-xs font-semibold text-gray-600">Used:</p>
                                                        <p className="text-xs text-gray-600">{usedWords.slice(-10).reverse().join(', ')}{usedWords.length > 10 && '...'}</p>
                                                    </div>
                                                )}
                                                {skippedWords.length > 0 && (
                                                    <div>
                                                        <p className="text-xs font-semibold text-gray-600">Skipped:</p>
                                                        <p className="text-xs text-gray-600">{skippedWords.slice(-10).reverse().join(', ')}{skippedWords.length > 10 && '...'}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {!isDictionaryHolder && gameData.state === 'setup' && (
                                <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-center">
                                    <p className="text-gray-600">Waiting for host to start the round...</p>
                                </div>
                            )}

                            {gameData.state === 'collecting' && (
                                <div className="glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in">
                                    <h2 className="text-xl font-semibold mb-2">{isDictionaryHolder ? 'Definitions Coming In' : 'Submit Your Definition'}</h2>
                                    <div className="mb-4">
                                        <p className="text-gray-600">Word: <span className="font-bold text-lg">{gameData.currentWord}</span></p>
                                        {gameData.pronunciation && (
                                            <p className="text-sm text-purple-600 mt-1">📢 {gameData.pronunciation}</p>
                                        )}
                                        {gameData.wordFact && (
                                            <p className="text-sm text-blue-600 mt-1">💡 {gameData.wordFact}</p>
                                        )}
                                    </div>

                                    {!isDictionaryHolder && !definitions[playerId] && (
                                        <div className="space-y-3">
                                            <textarea value={myDefinition} onChange={(e) => setMyDefinition(e.target.value)} placeholder="Write a fake definition..." className="w-full px-3 py-2 border rounded h-24" />
                                            <button onClick={submitDefinition} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                                Submit Definition
                                            </button>
                                        </div>
                                    )}

                                    {!isDictionaryHolder && definitions[playerId] && (
                                        <div className="bg-green-50 p-4 rounded">
                                            <p className="text-green-800 font-semibold">✓ Your definition submitted!</p>
                                        </div>
                                    )}

                                    {isDictionaryHolder && (
                                        <div className="space-y-3">
                                            <p className="text-sm text-gray-600">
                                                Definitions received: {Object.keys(definitions).length} / {Object.keys(players).length - 1}
                                            </p>
                                            {Object.keys(definitions).map((defId, idx) => (
                                                <div key={defId} className="bg-gray-50 p-3 rounded depth-layer-1">
                                                    <p className="text-sm font-medium text-gray-600">Definition {idx + 1}</p>
                                                    <p className="text-gray-800">{definitions[defId].text}</p>
                                                </div>
                                            ))}
                                            {Object.keys(definitions).length > 0 && (
                                                <button onClick={startVoting} className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                                    Start Voting
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {gameData.state === 'voting' && (
                                <div className="glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in">
                                    <h2 className="text-xl font-semibold mb-2">Vote for the Real Definition</h2>
                                    <div className="mb-4">
                                        <p className="text-gray-600">Word: <span className="font-bold text-lg">{gameData.currentWord}</span></p>
                                        {gameData.pronunciation && (
                                            <p className="text-sm text-purple-600 mt-1">📢 {gameData.pronunciation}</p>
                                        )}
                                        {gameData.wordFact && (
                                            <p className="text-sm text-blue-600 mt-1">💡 {gameData.wordFact}</p>
                                        )}
                                    </div>

                                    {!isDictionaryHolder && (
                                        <div className="space-y-3">
                                            {[...Object.entries(definitions).filter(([id]) => id !== playerId), ['real', { text: gameData.realDefinition }]]
                                                .sort(() => Math.random() - 0.5)
                                                .map(([id, def]) => {
                                                    const voted = myVote === id;
                                                    const player = id === 'real' ? null : players[id];
                                                    const avatar = player ? avatarOptions.find(a => a.id === player.avatar) : null;
                                                    return (
                                                        <button key={id} onClick={() => castVote(id)} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${voted ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-purple-300 hover:shadow-md'} btn-3d`}>
                                                            <div className="flex items-start gap-3">
                                                                {id === 'real' ? (
                                                                    <span className="text-3xl flex-shrink-0">📖</span>
                                                                ) : (
                                                                    <span className="text-3xl flex-shrink-0">{avatar?.emoji || '👤'}</span>
                                                                )}
                                                                <div className="flex-1">
                                                                    {id !== 'real' && player && (
                                                                        <p className="text-xs text-gray-500 mb-1 font-semibold">{player.name}</p>
                                                                    )}
                                                                    <p className="text-gray-800">{def.text}</p>
                                                                </div>
                                                                {voted && <span className="ml-2 text-green-600 font-semibold text-xl flex-shrink-0">✓</span>}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                        </div>
                                    )}

                                    {isDictionaryHolder && (
                                        <div className="space-y-3">
                                            <p className="text-sm text-gray-600">
                                                Votes cast: {Object.keys(votes).length} / {Object.keys(players).length - 1}
                                            </p>
                                            {Object.keys(votes).length >= Object.keys(players).length - 1 && (
                                                <button onClick={showResults} className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                                    Show Results
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {gameData.state === 'results' && (
                                <div className="glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in">
                                    <h2 className="text-xl font-semibold mb-4">Round Results</h2>

                                    <div className="mb-6 p-4 bg-green-50 rounded-lg depth-layer-2">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="text-3xl">📖</span>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-green-900 mb-2">Real Definition:</h3>
                                                <p className="text-gray-800">{gameData.realDefinition}</p>
                                            </div>
                                        </div>
                                        {(() => {
                                            const totalVotes = Object.values(gameData.voteCounts || {}).reduce((a, b) => a + b, 0) || 1;
                                            const voteCount = gameData.voteCounts?.real || 0;
                                            const percentage = (voteCount / totalVotes * 100).toFixed(0);
                                            return (
                                                <div className="mt-3">
                                                    <div className="flex justify-between text-sm text-green-700 mb-1">
                                                        <span>Votes: {voteCount}</span>
                                                        <span>{percentage}%</span>
                                                    </div>
                                                    <div className="w-full bg-green-200 rounded-full h-3 overflow-hidden">
                                                        <div
                                                            className="bg-green-600 h-full rounded-full transition-all duration-1000 ease-out"
                                                            style={{width: `${percentage}%`}}
                                                        ></div>
                                                    </div>
                                                </div>
                                            );
                                        })()}
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <h3 className="font-semibold">Player Definitions:</h3>
                                        {Object.entries(definitions).map(([defId, def]) => {
                                            const playerInfo = players[defId];
                                            const avatar = playerInfo ? avatarOptions.find(a => a.id === playerInfo.avatar) : null;
                                            const voteCount = gameData.voteCounts?.[defId] || 0;
                                            const totalVotes = Object.values(gameData.voteCounts || {}).reduce((a, b) => a + b, 0) || 1;
                                            const percentage = (voteCount / totalVotes * 100).toFixed(0);
                                            return (
                                                <div key={defId} className="p-4 bg-purple-50 rounded-lg depth-layer-2">
                                                    <div className="flex items-start gap-3 mb-2">
                                                        <span className="text-3xl">{avatar?.emoji || '👤'}</span>
                                                        <div className="flex-1">
                                                            <p className="font-semibold text-purple-900">{playerInfo?.name}:</p>
                                                            <p className="text-gray-800 mt-1">{def.text}</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3">
                                                        <div className="flex justify-between text-sm text-purple-700 mb-1">
                                                            <span>Votes: {voteCount}</span>
                                                            <span>{percentage}%</span>
                                                        </div>
                                                        <div className="w-full bg-purple-200 rounded-full h-3 overflow-hidden">
                                                            <div
                                                                className="bg-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                                                                style={{width: `${percentage}%`}}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {isHost && (
                                        <button onClick={newRound} className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                            New Round
                                        </button>
                                    )}

                                    {!isHost && (
                                        <p className="text-center text-gray-600">Waiting for host to start next round...</p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Pass Dictionary Modal */}
                        {showPassDictionary && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                                <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">📖 Pass Dictionary</h3>
                                    <p className="text-gray-600 mb-4">Select a player to become the new Dictionary Holder:</p>
                                    <div className="space-y-2 mb-6 max-h-64 overflow-y-auto">
                                        {Object.entries(players).filter(([id, player]) =>
                                            id !== playerId && !player.isBot
                                        ).map(([id, player]) => {
                                            const avatar = avatarOptions.find(a => a.id === player.avatar);
                                            return (
                                                <button
                                                    key={id}
                                                    onClick={() => passDictionary(id)}
                                                    className="w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-left flex items-center gap-3 transition-colors"
                                                >
                                                    <span className="text-2xl">{avatar?.emoji || '👤'}</span>
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{player.name}</p>
                                                        <p className="text-sm text-gray-600">Score: {player.score}</p>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                        {Object.entries(players).filter(([id, player]) =>
                                            id !== playerId && !player.isBot
                                        ).length === 0 && (
                                            <p className="text-center text-gray-500 py-4">No other human players available</p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setShowPassDictionary(false)}
                                        className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                        {/* Toast Notification */}
                        {toast.show && (
                            <div className={`toast show ${toast.type}`}>
                                {toast.message}
                            </div>
                        )}
                    </div>
                );
            }

            return (
                <div>
                    <div className="min-h-screen flex items-center justify-center">
                        <p className="text-gray-600">Loading...</p>
                    </div>
                    {/* Toast Notification */}
                    {toast.show && (
                        <div className={`toast show ${toast.type}`}>
                            {toast.message}
                        </div>
                    )}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<MultiplayerDictionaryGame />);
