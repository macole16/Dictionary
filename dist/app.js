const {
  useState,
  useEffect
} = React;
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

// Logo Component - Classic Dictionary Book (OED/Webster's style)
const DictionaryLogo = ({
  size = 64
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 200 200",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "bookCover",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "100%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  style: {
    stopColor: "#7f1d1d",
    stopOpacity: 1
  }
}), /*#__PURE__*/React.createElement("stop", {
  offset: "50%",
  style: {
    stopColor: "#991b1b",
    stopOpacity: 1
  }
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  style: {
    stopColor: "#7f1d1d",
    stopOpacity: 1
  }
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "pageGradient",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "0%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  style: {
    stopColor: "#fef9e7",
    stopOpacity: 1
  }
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  style: {
    stopColor: "#faf5e4",
    stopOpacity: 1
  }
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "shadowGrad",
  x1: "0%",
  y1: "0%",
  x2: "0%",
  y2: "100%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  style: {
    stopColor: "#000",
    stopOpacity: 0.4
  }
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  style: {
    stopColor: "#000",
    stopOpacity: 0
  }
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "goldFoil",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "100%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  style: {
    stopColor: "#ffd700",
    stopOpacity: 1
  }
}), /*#__PURE__*/React.createElement("stop", {
  offset: "50%",
  style: {
    stopColor: "#ffed4e",
    stopOpacity: 1
  }
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  style: {
    stopColor: "#ffd700",
    stopOpacity: 1
  }
}))), /*#__PURE__*/React.createElement("ellipse", {
  cx: "100",
  cy: "168",
  rx: "75",
  ry: "10",
  fill: "url(#shadowGrad)",
  opacity: "0.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 30 35 L 30 158 Q 30 165 37 165 L 95 165 L 95 35 Z",
  fill: "url(#bookCover)",
  stroke: "#5e1414",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 33 38 L 33 161 L 92 161 L 92 38 Z",
  fill: "url(#pageGradient)"
}), /*#__PURE__*/React.createElement("line", {
  x1: "35",
  y1: "38",
  x2: "35",
  y2: "161",
  stroke: "#d4c5a0",
  strokeWidth: "0.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "37",
  y1: "38",
  x2: "37",
  y2: "161",
  stroke: "#d4c5a0",
  strokeWidth: "0.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "39",
  y1: "38",
  x2: "39",
  y2: "161",
  stroke: "#d4c5a0",
  strokeWidth: "0.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "42",
  y: "45",
  width: "45",
  height: "110",
  fill: "#fffef8"
}), /*#__PURE__*/React.createElement("text", {
  x: "45",
  y: "58",
  fontSize: "7",
  fontWeight: "bold",
  fill: "#2c1810",
  fontFamily: "serif"
}, "DICTIONARY"), /*#__PURE__*/React.createElement("line", {
  x1: "45",
  y1: "62",
  x2: "84",
  y2: "62",
  stroke: "#2c1810",
  strokeWidth: "0.3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "45",
  y1: "70",
  x2: "82",
  y2: "70",
  stroke: "#2c1810",
  strokeWidth: "0.3",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "45",
  y1: "75",
  x2: "80",
  y2: "75",
  stroke: "#2c1810",
  strokeWidth: "0.3",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "45",
  y1: "80",
  x2: "84",
  y2: "80",
  stroke: "#2c1810",
  strokeWidth: "0.3",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "45",
  y1: "85",
  x2: "78",
  y2: "85",
  stroke: "#2c1810",
  strokeWidth: "0.3",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 95 35 L 105 35 L 105 165 L 95 165 Z",
  fill: "#5e1414"
}), /*#__PURE__*/React.createElement("rect", {
  x: "96",
  y: "50",
  width: "8",
  height: "100",
  fill: "#7f1d1d",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("text", {
  x: "100",
  y: "95",
  fontSize: "6",
  fontWeight: "bold",
  fill: "url(#goldFoil)",
  textAnchor: "middle",
  fontFamily: "serif",
  writingMode: "tb"
}, "DICTIONARY"), /*#__PURE__*/React.createElement("path", {
  d: "M 108 38 L 108 161 L 167 161 L 167 38 Z",
  fill: "url(#pageGradient)"
}), /*#__PURE__*/React.createElement("line", {
  x1: "165",
  y1: "38",
  x2: "165",
  y2: "161",
  stroke: "#d4c5a0",
  strokeWidth: "0.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "163",
  y1: "38",
  x2: "163",
  y2: "161",
  stroke: "#d4c5a0",
  strokeWidth: "0.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "161",
  y1: "38",
  x2: "161",
  y2: "161",
  stroke: "#d4c5a0",
  strokeWidth: "0.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "113",
  y: "45",
  width: "45",
  height: "110",
  fill: "#fffef8"
}), /*#__PURE__*/React.createElement("text", {
  x: "116",
  y: "58",
  fontSize: "6",
  fontWeight: "bold",
  fill: "#2c1810",
  fontFamily: "serif"
}, "def\xB7i\xB7ni\xB7tion"), /*#__PURE__*/React.createElement("text", {
  x: "116",
  y: "66",
  fontSize: "5",
  fill: "#666",
  fontFamily: "serif",
  fontStyle: "italic"
}, "/\u02CCdef\u0259\u02C8niSH(\u0259)n/"), /*#__PURE__*/React.createElement("line", {
  x1: "116",
  y1: "70",
  x2: "155",
  y2: "70",
  stroke: "#2c1810",
  strokeWidth: "0.3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "116",
  y1: "75",
  x2: "152",
  y2: "75",
  stroke: "#2c1810",
  strokeWidth: "0.3",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "116",
  y1: "80",
  x2: "154",
  y2: "80",
  stroke: "#2c1810",
  strokeWidth: "0.3",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "116",
  y1: "85",
  x2: "150",
  y2: "85",
  stroke: "#2c1810",
  strokeWidth: "0.3",
  opacity: "0.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 105 35 L 170 35 Q 175 35 175 40 L 175 160 Q 175 165 170 165 L 105 165 Z",
  fill: "url(#bookCover)",
  stroke: "#5e1414",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "108",
  y: "38",
  width: "64",
  height: "3",
  fill: "#5e1414",
  opacity: "0.3"
}), /*#__PURE__*/React.createElement("rect", {
  x: "108",
  y: "159",
  width: "64",
  height: "3",
  fill: "#5e1414",
  opacity: "0.3"
}), /*#__PURE__*/React.createElement("rect", {
  x: "115",
  y: "50",
  width: "50",
  height: "75",
  stroke: "url(#goldFoil)",
  strokeWidth: "1.5",
  fill: "none",
  opacity: "0.9"
}), /*#__PURE__*/React.createElement("rect", {
  x: "118",
  y: "53",
  width: "44",
  height: "69",
  stroke: "url(#goldFoil)",
  strokeWidth: "0.8",
  fill: "none",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("text", {
  x: "140",
  y: "75",
  fontSize: "11",
  fontWeight: "bold",
  fill: "url(#goldFoil)",
  textAnchor: "middle",
  fontFamily: "serif"
}, "THE"), /*#__PURE__*/React.createElement("text", {
  x: "140",
  y: "92",
  fontSize: "14",
  fontWeight: "bold",
  fill: "url(#goldFoil)",
  textAnchor: "middle",
  fontFamily: "serif"
}, "DICTIONARY"), /*#__PURE__*/React.createElement("text", {
  x: "140",
  y: "107",
  fontSize: "9",
  fill: "url(#goldFoil)",
  textAnchor: "middle",
  fontFamily: "serif"
}, "GAME"), /*#__PURE__*/React.createElement("path", {
  d: "M 125 65 L 155 65",
  stroke: "url(#goldFoil)",
  strokeWidth: "0.8",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 125 112 L 155 112",
  stroke: "url(#goldFoil)",
  strokeWidth: "0.8",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "122",
  cy: "58",
  r: "1.5",
  fill: "url(#goldFoil)",
  opacity: "0.8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "158",
  cy: "58",
  r: "1.5",
  fill: "url(#goldFoil)",
  opacity: "0.8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "122",
  cy: "117",
  r: "1.5",
  fill: "url(#goldFoil)",
  opacity: "0.8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "158",
  cy: "117",
  r: "1.5",
  fill: "url(#goldFoil)",
  opacity: "0.8"
}));

// Avatar options - will be loaded from avatars.json

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
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'info'
  });
  const [scoringConfig, setScoringConfig] = useState(null);
  const [avatarOptions, setAvatarOptions] = useState([]);
  const [wordBuffer, setWordBuffer] = useState([]);
  const [showWordHistory, setShowWordHistory] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [changelog, setChangelog] = useState('');
  const [showScoringModal, setShowScoringModal] = useState(false);
  const [customScoring, setCustomScoring] = useState(null);

  // Load avatar options
  useEffect(() => {
    fetch('/avatars.json').then(response => response.json()).then(config => setAvatarOptions(config.avatars)).catch(error => {
      console.error('Failed to load avatar options:', error);
      // Default avatar if file cannot be loaded
      setAvatarOptions([{
        id: 'cat',
        emoji: '🐱',
        label: 'Cat'
      }]);
    });
  }, []);

  // Load scoring configuration
  useEffect(() => {
    fetch('/scoring.json').then(response => response.json()).then(config => setScoringConfig(config)).catch(error => {
      console.error('Failed to load scoring config:', error);
      // Default scoring if file cannot be loaded
      setScoringConfig({
        rules: {
          votesForFakeDefinition: {
            points: 1
          },
          votesForRealDefinition: {
            points: 1
          },
          votingForRealDefinition: {
            points: 1
          }
        }
      });
    });
  }, []);

  // Load instructions
  useEffect(() => {
    fetch('/instructions.md').then(response => response.text()).then(text => setInstructions(text)).catch(error => {
      console.error('Failed to load instructions:', error);
      setInstructions('# How to Play\n\nInstructions could not be loaded.');
    });
  }, []);

  // Load changelog
  useEffect(() => {
    fetch('/CHANGELOG.md').then(response => response.text()).then(text => {
      // Extract only recent versions (up to 1.0.0)
      const lines = text.split('\n');
      const startIdx = lines.findIndex(line => line.startsWith('## [1.'));
      const endIdx = lines.findIndex(line => line.startsWith('## Version History'));
      if (startIdx !== -1 && endIdx !== -1) {
        setChangelog(lines.slice(startIdx, endIdx).join('\n'));
      } else {
        setChangelog(text);
      }
    }).catch(error => {
      console.error('Failed to load changelog:', error);
      setChangelog('# What\'s New\n\nChangelog could not be loaded.');
    });
  }, []);

  // Simple markdown parser for instructions
  const parseMarkdown = markdown => {
    if (!markdown) return null;
    const lines = markdown.split('\n');
    const elements = [];
    let currentList = null;
    let currentListType = null;
    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        elements.push(/*#__PURE__*/React.createElement("h1", {
          key: index,
          className: "text-4xl font-bold text-purple-900 mb-2"
        }, line.substring(2)));
      } else if (line.startsWith('## ')) {
        if (currentList) {
          elements.push(currentList);
          currentList = null;
        }
        // Check if it's a version header like "## [1.2.0] - 2026-01-30"
        const versionMatch = line.match(/^##\s+\[(\d+\.\d+\.\d+)\]\s+-\s+(.+)$/);
        if (versionMatch) {
          elements.push(/*#__PURE__*/React.createElement("div", {
            key: index,
            className: "border-l-4 border-purple-500 pl-4 mb-6 mt-6"
          }, /*#__PURE__*/React.createElement("h2", {
            className: "text-2xl font-bold text-purple-900 mb-1"
          }, "Version ", versionMatch[1]), /*#__PURE__*/React.createElement("p", {
            className: "text-sm text-gray-500 mb-3"
          }, versionMatch[2])));
        } else {
          const icon = line.substring(3, 5);
          const text = line.substring(5).trim();
          const colors = {
            '🎮': 'purple',
            '🔄': 'blue',
            '🏆': 'green',
            '💡': 'orange',
            '✨': 'indigo'
          };
          const color = colors[icon] || 'purple';
          elements.push(/*#__PURE__*/React.createElement("div", {
            key: index,
            className: `border-l-4 border-${color}-500 pl-4 mb-6`
          }, /*#__PURE__*/React.createElement("h2", {
            className: `text-2xl font-bold text-${color}-900 mb-3`
          }, icon, " ", text)));
        }
      } else if (line.startsWith('### ')) {
        if (currentList) {
          elements.push(currentList);
          currentList = null;
        }
        const sectionColors = {
          'Added': 'text-green-800 bg-green-50 border-green-200',
          'Changed': 'text-blue-800 bg-blue-50 border-blue-200',
          'Fixed': 'text-orange-800 bg-orange-50 border-orange-200',
          'Removed': 'text-red-800 bg-red-50 border-red-200'
        };
        const sectionName = line.substring(4).trim();
        const colorClass = sectionColors[sectionName] || 'text-gray-800';
        elements.push(/*#__PURE__*/React.createElement("h3", {
          key: index,
          className: `text-lg font-semibold mb-2 mt-4 px-3 py-1 rounded border ${colorClass}`
        }, sectionName));
      }
      // Lists
      else if (line.match(/^\d+\.\s/)) {
        const content = line.replace(/^\d+\.\s/, '');
        const boldMatch = content.match(/\*\*(.*?)\*\*/);
        if (!currentList || currentListType !== 'ol') {
          if (currentList) elements.push(currentList);
          currentList = /*#__PURE__*/React.createElement("ol", {
            key: `list-${index}`,
            className: "list-decimal list-inside space-y-2 text-gray-700 mb-4"
          });
          currentListType = 'ol';
        }
        currentList = React.cloneElement(currentList, {
          children: [...(currentList.props.children || []), /*#__PURE__*/React.createElement("li", {
            key: index
          }, boldMatch ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, boldMatch[1]), content.replace(/\*\*(.*?)\*\*/, '').substring(boldMatch[1].length)) : content)]
        });
      } else if (line.match(/^-\s/)) {
        const content = line.substring(2);
        const boldMatch = content.match(/\*\*(.*?)\*\*/g);
        if (!currentList || currentListType !== 'ul') {
          if (currentList) elements.push(currentList);
          currentList = /*#__PURE__*/React.createElement("ul", {
            key: `list-${index}`,
            className: "list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4"
          });
          currentListType = 'ul';
        }
        let parsedContent = content;
        if (boldMatch) {
          parsedContent = content.split(/(\*\*.*?\*\*)/).map((part, i) => part.startsWith('**') && part.endsWith('**') ? /*#__PURE__*/React.createElement("strong", {
            key: i
          }, part.slice(2, -2)) : part);
        }
        currentList = React.cloneElement(currentList, {
          children: [...(currentList.props.children || []), /*#__PURE__*/React.createElement("li", {
            key: index
          }, parsedContent)]
        });
      }
      // Paragraphs
      else if (line.trim() && !line.startsWith('#')) {
        if (currentList) {
          elements.push(currentList);
          currentList = null;
        }
        elements.push(/*#__PURE__*/React.createElement("p", {
          key: index,
          className: "text-gray-600 mb-3"
        }, line));
      }
      // Empty lines
      else if (!line.trim() && currentList) {
        elements.push(currentList);
        currentList = null;
        currentListType = null;
      }
    });
    if (currentList) elements.push(currentList);
    return elements;
  };

  // Toast notification function
  const showToast = (message, type = 'info') => {
    setToast({
      show: true,
      message,
      type
    });
    setTimeout(() => {
      setToast({
        show: false,
        message: '',
        type: 'info'
      });
    }, 3000);
  };

  // Check for game code in URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('game');
    if (codeFromUrl) {
      // Store the code and set view to join
      setInputGameCode(codeFromUrl.toUpperCase());
      setView('join');
      // Clean up URL without reload
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Try to restore session - check for multiple active games
  useEffect(() => {
    const savedPlayerName = localStorage.getItem('dictionaryGame_playerName');
    const savedGameHistory = JSON.parse(localStorage.getItem('dictionaryGame_history') || '[]');
    if (savedGameHistory.length > 0) {
      // Check which games are still active
      const checkGames = savedGameHistory.map(({
        code,
        playerId,
        joinedAt
      }) => database.ref(`games/${code}`).once('value').then(snapshot => {
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
      }));
      Promise.all(checkGames).then(games => {
        const activeGames = games.filter(g => g !== null).sort((a, b) => (b.lastActivity || b.joinedAt) - (a.lastActivity || a.joinedAt));
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
    gameHistory.push({
      code,
      playerId: newPlayerId,
      joinedAt: Date.now()
    });
    localStorage.setItem('dictionaryGame_history', JSON.stringify(gameHistory));

    // Add to created games list
    const createdGames = JSON.parse(localStorage.getItem('dictionaryGame_createdGames') || '[]');
    createdGames.push({
      code,
      createdAt: Date.now(),
      playerName
    });
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
    const nameTaken = existingPlayers.some(player => player.name.toLowerCase() === inputPlayerName.trim().toLowerCase());
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
    gameHistory.push({
      code,
      playerId: newPlayerId,
      joinedAt: Date.now()
    });
    localStorage.setItem('dictionaryGame_history', JSON.stringify(gameHistory));
    setGameCode(code);
    setPlayerId(newPlayerId);
    setPlayerName(inputPlayerName);
    setView('game');
  };

  // Load available games
  useEffect(() => {
    if (view === 'join') {
      console.log('Loading available games...');
      const gamesRef = database.ref('games');
      gamesRef.on('value', snapshot => {
        const data = snapshot.val();
        console.log('Games data from Firebase:', data);
        if (data) {
          const allGames = Object.entries(data);
          console.log('Total games found:', allGames.length);
          const games = allGames.filter(([code, game]) => {
            // Filter out old games (older than 24 hours)
            const age = Date.now() - (game.lastActivity || game.createdAt || 0);
            const isRecent = age < 24 * 60 * 60 * 1000;
            console.log(`Game ${code}: age=${Math.round(age / 1000 / 60)} minutes, isRecent=${isRecent}`);
            return isRecent;
          }).map(([code, game]) => ({
            code,
            hostName: game.hostName,
            playerCount: Object.keys(game.players || {}).length,
            state: game.state,
            createdAt: game.createdAt
          })).sort((a, b) => b.createdAt - a.createdAt);
          console.log('Filtered available games:', games);
          setAvailableGames(games);
        } else {
          console.log('No games data in Firebase');
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
      historyRef.orderByChild('endedAt').limitToLast(10).on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
          const history = Object.values(data).sort((a, b) => b.endedAt - a.endedAt);
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
      gameRef.on('value', snapshot => {
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

      // Helper function to check if word is valid
      const isWordValid = w => {
        const wordLower = w.toLowerCase();
        return !usedWords.includes(wordLower) && !skippedWords.includes(wordLower);
      };

      // First, try to use a word from the buffer
      if (wordBuffer.length > 0) {
        const validBufferedWords = wordBuffer.filter(isWordValid);
        if (validBufferedWords.length > 0) {
          word = validBufferedWords[Math.floor(Math.random() * validBufferedWords.length)];
          // Remove used word from buffer
          setWordBuffer(prev => prev.filter(w => w !== word));
          setCurrentWord(word);
          setLoadingWord(false);
          return;
        }
      }

      // Buffer is empty or all words used, fetch new batch
      console.log('Fetching new batch of words for difficulty:', difficulty);
      let fetchedWords = [];
      if (difficulty === 'kids') {
        const topics = ['animals', 'nature', 'school', 'food', 'sports', 'weather', 'home', 'travel'];
        const topic = topics[Math.floor(Math.random() * topics.length)];
        const apiUrl = `https://api.datamuse.com/words?topics=${topic}&max=500`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data && data.length > 0) {
          // Filter for suitable kid words
          let filtered = data.filter(w => w.word.length >= 4 && w.word.length <= 10 && /^[a-z]+$/.test(w.word) && isWordValid(w.word));

          // Shuffle and take up to 30 words
          fetchedWords = filtered.sort(() => Math.random() - 0.5).slice(0, 30).map(w => w.word);
        }

        // Add fallback words if needed
        if (fetchedWords.length < 20) {
          let fallbackWords = ['canopy', 'whimsy', 'gadget', 'mosaic', 'nimble', 'frolic', 'plume', 'burrow', 'ember', 'marvel', 'riddle', 'puzzle', 'fossil', 'crystal', 'habitat', 'mammal', 'reptile', 'migrate', 'gravity', 'energy', 'journey', 'valley', 'meadow', 'beacon', 'harbor', 'vessel', 'crater', 'glacier', 'canyon', 'summit'].filter(isWordValid);
          fetchedWords = [...fetchedWords, ...fallbackWords].slice(0, 30);
        }
      } else if (difficulty === 'teen') {
        const apiUrl = 'https://api.datamuse.com/words?sp=?????????*&md=f&max=500';
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data && data.length > 0) {
          let filtered = data.filter(w => {
            const freq = w.tags?.[0]?.replace('f:', '') || '0';
            return parseFloat(freq) < 20 && /^[a-z]+$/.test(w.word) && isWordValid(w.word);
          });

          // Shuffle and take up to 30 words
          fetchedWords = filtered.sort(() => Math.random() - 0.5).slice(0, 30).map(w => w.word);
        }

        // Add fallback words if needed
        if (fetchedWords.length < 20) {
          let fallbackWords = ['ambiguous', 'benevolent', 'candor', 'diligent', 'ephemeral', 'facetious', 'gregarious', 'haphazard', 'impetuous', 'juxtapose', 'loquacious', 'melancholy', 'nefarious', 'ostentatious', 'pragmatic', 'quintessential', 'resilient', 'serendipity', 'tenacious', 'ubiquitous', 'verbose', 'whimsical', 'zealous', 'audacious', 'belligerent', 'conundrum', 'eloquent', 'frivolous', 'garrulous', 'innocuous'].filter(isWordValid);
          fetchedWords = [...fetchedWords, ...fallbackWords].slice(0, 30);
        }
      } else {
        // For adults, use curated obscure words since APIs don't provide truly bizarre words
        fetchedWords = ['absquatulate', 'bumfuzzle', 'callipygian', 'defenestrate', 'erinaceous', 'floccinaucinihilipilification', 'gobemouche', 'higgler', 'impignorate', 'jentacular', 'kakistocracy', 'lollygag', 'malarkey', 'nudiustertian', 'octothorpe', 'pauciloquent', 'quomodocunquize', 'rhadamanthine', 'smellfungus', 'taradiddle', 'ulotrichous', 'vomitory', 'wabbit', 'xertz', 'yarborough', 'zenzizenzizenzic', 'borborygmus', 'collywobbles', 'donnybrook', 'fartlek', 'gardyloo', 'hobbledehoy', 'kerfuffle', 'snollygoster', 'bumbershoot', 'cattywampus', 'discombobulate', 'flibbertigibbet', 'gobbledygook', 'hullabaloo', 'lackadaisical', 'persnickety', 'shenanigans', 'whippersnapper', 'brouhaha', 'cantankerous', 'curmudgeon', 'dillydally', 'rigmarole', 'bamboozle', 'hornswoggle', 'nincompoop', 'poppycock', 'skedaddle', 'skullduggery', 'widdershins', 'ninny', 'piffle'].filter(isWordValid);

        // Shuffle the words
        fetchedWords = fetchedWords.sort(() => Math.random() - 0.5);
      }
      console.log('Fetched words for buffer:', fetchedWords.length);

      // Store words in buffer and select one
      if (fetchedWords.length > 0) {
        word = fetchedWords[0];
        setWordBuffer(fetchedWords.slice(1)); // Store remaining words in buffer
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
          const facts = [`This is a ${difficulty}-level word!`, `Challenge your friends with this word.`];
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

    // Remove trailing punctuation from real definition for consistency
    const cleanedRealDefinition = realDefinition.trim().replace(/[.!?;,]+$/, '');
    await database.ref(`games/${gameCode}`).update({
      state: 'collecting',
      currentWord: currentWord,
      realDefinition: cleanedRealDefinition,
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
      showToast('Word history cleared!', 'success');
    }
  };
  const removeWordFromHistory = async (word, type) => {
    if (type === 'used') {
      const updated = usedWords.filter(w => w !== word);
      await database.ref(`games/${gameCode}/usedWords`).set(updated);
      setUsedWords(updated);
    } else {
      const updated = skippedWords.filter(w => w !== word);
      await database.ref(`games/${gameCode}/skippedWords`).set(updated);
      setSkippedWords(updated);
    }
    showToast(`"${word}" removed from ${type} words`, 'success');
  };
  const endGame = async () => {
    if (!confirm('End this game and save to history? This will close the game for all players.')) {
      return;
    }
    const players = gameData.players || {};
    const leftPlayers = gameData.leftPlayers || {};

    // Combine active and left players
    const allPlayers = [...Object.entries(players).map(([id, player]) => ({
      name: player.name,
      score: player.score,
      active: true
    })), ...Object.entries(leftPlayers).map(([id, player]) => ({
      name: player.name,
      score: player.score,
      active: false
    }))].sort((a, b) => b.score - a.score);

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
  const quickJoinGame = code => {
    setInputGameCode(code);
  };
  const submitDefinition = async () => {
    if (!myDefinition.trim()) {
      alert('Please enter a definition');
      return;
    }

    // Remove trailing punctuation for consistency
    const cleanedDefinition = myDefinition.trim().replace(/[.!?;,]+$/, '');
    await database.ref(`games/${gameCode}/definitions/${playerId}`).set({
      text: cleanedDefinition
    });
    setMyDefinition('');
  };
  const startVoting = async () => {
    await database.ref(`games/${gameCode}`).update({
      state: 'voting'
    });
  };
  const castVote = async defId => {
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

    // Get scoring configuration (game custom > default config > hardcoded defaults)
    const scoring = gameData.customScoring || scoringConfig?.rules || {
      votesForFakeDefinition: {
        points: 1
      },
      votesForRealDefinition: {
        points: 1
      },
      votingForRealDefinition: {
        points: 1
      }
    };

    // Award points to players whose definitions were voted for
    Object.keys(definitions).forEach(defPlayerId => {
      if (voteCounts[defPlayerId]) {
        const currentScore = players[defPlayerId]?.score || 0;
        updates[`players/${defPlayerId}/score`] = currentScore + voteCounts[defPlayerId] * scoring.votesForFakeDefinition.points;
      }
    });

    // Award points to dictionary holder for each vote on the real definition
    if (voteCounts['real']) {
      const currentScore = players[dictionaryHolderId]?.score || 0;
      updates[`players/${dictionaryHolderId}/score`] = currentScore + voteCounts['real'] * scoring.votesForRealDefinition.points;
    }

    // Award points to each player who voted for the real definition
    Object.entries(votes).forEach(([voterId, defId]) => {
      if (defId === 'real') {
        const currentScore = players[voterId]?.score || 0;
        updates[`players/${voterId}/score`] = (updates[`players/${voterId}/score`] || currentScore) + scoring.votingForRealDefinition.points;
      }
    });
    updates.state = 'results';
    updates.voteCounts = voteCounts;
    await database.ref(`games/${gameCode}`).update(updates);
  };
  const awardBonusPoint = async playerId => {
    if (!isHost) return;
    const currentScore = gameData.players[playerId]?.score || 0;
    await database.ref(`games/${gameCode}/players/${playerId}/score`).set(currentScore + 1);
    showToast(`Awarded bonus point to ${gameData.players[playerId]?.name}`, 'success');
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
  const changeDictionaryHolder = async newHolderId => {
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
  const copyShareLink = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?game=${gameCode}`;
    navigator.clipboard.writeText(shareUrl);
    showToast('Share link copied!', 'success');
  };
  const addBotPlayers = async () => {
    const numBots = prompt('How many bots would you like to add? (1-8)', '4');
    if (!numBots) return;
    const count = Math.min(Math.max(parseInt(numBots) || 4, 1), 8);
    const botNames = ['Shakespeare', 'Einstein', 'Cleopatra', 'Tesla', 'Darwin', 'Curie', 'Napoleon', 'Socrates'];
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

            // Helper to pick random from array
            const pick = arr => arr[Math.floor(Math.random() * arr.length)];

            // Generate unique definition templates (generates fresh each time)
            const generateDefinitionTemplates = () => [
            // Noun templates
            `A ${pick(['small', 'large', 'rare', 'common', 'unusual', 'peculiar', 'distinctive'])} object or substance used in ${pick(['ancient', 'medieval', 'traditional', 'modern', 'contemporary'])} ${pick(['ceremonies', 'practices', 'crafts', 'medicine', 'rituals', 'trades'])}`, `The ${pick(['process', 'art', 'practice', 'technique', 'method', 'procedure'])} of ${pick(['creating', 'producing', 'forming', 'shaping', 'fashioning', 'crafting'])} something through ${pick(['careful', 'precise', 'deliberate', 'systematic', 'meticulous', 'rigorous'])} means`, `A ${pick(['medical', 'botanical', 'geological', 'astronomical', 'nautical', 'architectural'])} term for a ${pick(['condition', 'phenomenon', 'formation', 'pattern', 'structure', 'occurrence'])} ${pick(['characterized by', 'resulting from', 'associated with', 'marked by', 'distinguished by', 'defined by'])} ${pick(['unusual', 'specific', 'distinct', 'particular', 'unique', 'notable'])} properties`,
            // Verb templates
            `To ${pick(['carefully', 'deliberately', 'systematically', 'thoroughly', 'methodically', 'precisely'])} ${pick(['arrange', 'organize', 'prepare', 'modify', 'adjust', 'configure'])} something in a ${pick(['specific', 'particular', 'prescribed', 'traditional', 'customary', 'established'])} manner`, `The act of ${pick(['moving', 'transferring', 'converting', 'transforming', 'shifting', 'transitioning'])} something from one ${pick(['state', 'form', 'position', 'condition', 'phase', 'stage'])} to another`,
            // Adjective templates
            `Having the ${pick(['quality', 'characteristic', 'property', 'nature', 'attribute', 'trait'])} of being ${pick(['exceptionally', 'particularly', 'remarkably', 'notably', 'distinctly', 'uncommonly'])} ${pick(['complex', 'simple', 'delicate', 'robust', 'intricate', 'elaborate'])}`, `${pick(['Relating to', 'Pertaining to', 'Associated with', 'Connected with', 'Concerning', 'Regarding'])} ${pick(['ancient', 'historical', 'traditional', 'cultural', 'ancestral', 'bygone'])} ${pick(['beliefs', 'practices', 'customs', 'traditions', 'conventions', 'ceremonies'])}`,
            // Professional/occupation templates
            `A person who ${pick(['specializes in', 'practices', 'studies', 'engages in', 'devotes themselves to', 'focuses on'])} the ${pick(['art', 'science', 'craft', 'skill', 'discipline', 'profession'])} of ${pick(['creating', 'maintaining', 'analyzing', 'interpreting', 'designing', 'constructing'])} ${pick(['complex', 'intricate', 'detailed', 'specialized', 'sophisticated', 'elaborate'])} ${pick(['works', 'systems', 'structures', 'patterns', 'compositions', 'arrangements'])}`,
            // Archaic/historical templates
            `An ${pick(['archaic', 'obsolete', 'antiquated', 'historical', 'outdated', 'bygone'])} term ${pick(['formerly', 'originally', 'traditionally', 'historically', 'previously', 'once'])} used to ${pick(['describe', 'denote', 'refer to', 'indicate', 'designate', 'signify'])} ${pick(['persons', 'objects', 'practices', 'conditions', 'situations', 'phenomena'])} of ${pick(['particular', 'special', 'significant', 'notable', 'considerable', 'exceptional'])} importance`,
            // Additional variety templates
            `A ${pick(['decorative', 'functional', 'ceremonial', 'symbolic', 'ornamental'])} ${pick(['implement', 'device', 'tool', 'instrument', 'apparatus'])} used primarily in ${pick(['rural', 'urban', 'coastal', 'mountain', 'desert'])} regions`, `The ${pick(['traditional', 'customary', 'habitual', 'routine', 'conventional'])} practice of ${pick(['celebrating', 'commemorating', 'observing', 'honoring', 'marking'])} ${pick(['seasonal', 'agricultural', 'religious', 'civic', 'social'])} events`, `A ${pick(['temporary', 'permanent', 'seasonal', 'periodic', 'intermittent'])} ${pick(['state', 'phase', 'condition', 'period', 'stage'])} of ${pick(['growth', 'decline', 'transition', 'development', 'maturation'])} in ${pick(['flora', 'fauna', 'geology', 'climate', 'society'])}`];

            // Try to find a unique definition (max 20 attempts with fresh templates each time)
            let randomDef;
            let attempts = 0;
            do {
              const templates = generateDefinitionTemplates();
              randomDef = pick(templates);
              attempts++;
            } while (existingTexts.includes(randomDef) && attempts < 20);

            // If still duplicate after 20 tries, add variation
            if (existingTexts.includes(randomDef)) {
              randomDef = `${randomDef.slice(0, -1)}, ${pick(['especially', 'particularly', 'notably'])} in ${pick(['various', 'certain', 'specific', 'numerous'])} contexts`;
            }

            // Remove trailing punctuation for consistency
            randomDef = randomDef.replace(/[.!?;,]+$/, '');
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
            const availableChoices = [...Object.entries(definitions).filter(([id]) => id !== botId).map(([id, def]) => ({
              id,
              text: def.text,
              // Score based on length and complexity markers
              score: def.text.length + (def.text.includes('characterized by') ? 10 : 0) + (def.text.includes('traditionally') ? 10 : 0) + (def.text.includes('archaic') ? 10 : 0) + (def.text.includes('obsolete') ? 10 : 0)
            })), {
              id: 'real',
              text: gameData.realDefinition || '',
              score: (gameData.realDefinition || '').length + ((gameData.realDefinition || '').includes('characterized by') ? 10 : 0) + ((gameData.realDefinition || '').includes('traditionally') ? 10 : 0)
            }];

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
  const passDictionary = async newDictionaryHolderId => {
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
      gamesRef.once('value', snapshot => {
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
      gamesRef.on('value', snapshot => {
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
      historyRef.on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
          const history = Object.values(data).sort((a, b) => b.endedAt - a.endedAt);
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
      // Note: Due to Firebase security rules, this function can only clear localStorage
      // To delete all Firebase data, you need to do it from the Firebase Console
      // or update your security rules to allow deletion of the root paths

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
      alert('✅ Local data has been cleared!\n\nNote: Firebase games data remains for security. To delete all games, use Firebase Console or the "Manage My Games" feature to terminate individual games.');
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
        const sortedPlayers = Object.entries(players).map(([id, player]) => ({
          name: player?.name || 'Unknown',
          score: player?.score || 0
        })).sort((a, b) => b.score - a.score);

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
    // Floating words for background animation
    const floatingWords = ['serendipity', 'ephemeral', 'quintessential', 'ubiquitous', 'mellifluous', 'enigma', 'paradox', 'luminous', 'euphoria', 'nostalgia', 'eloquent', 'whimsical', 'ethereal', 'labyrinth', 'cascade', 'harmony', 'solitude', 'renaissance', 'kaleidoscope', 'magnificent', 'ebullient', 'ineffable', 'petrichor', 'susurrus', 'phosphenes', 'vellichor', 'defenestration', 'apricity', 'hiraeth', 'eigengrau', 'sonder', 'onism', 'chrysalism', 'kenopsia', 'monachopsis', 'lachesism', 'exulansis', 'nodus tollens', 'anecdoche', 'ellipsism', 'jouska', 'liberosis', 'mauerbauertraurigkeit', 'occhiolism', 'opia'];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen gradient-bg-animated flex items-center justify-center p-4 overflow-hidden relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none"
    }, floatingWords.map((word, index) => /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "absolute text-purple-200 font-serif opacity-20 select-none",
      style: {
        fontSize: `${Math.random() * 20 + 15}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `rotate(${Math.random() * 30 - 15}deg)`
      }
    }, word))), showReconnectModal && activeGames.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-2xl p-6 max-w-lg w-full card-3d"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-purple-900 mb-4"
    }, "Welcome Back!"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 mb-4"
    }, "You have ", activeGames.length, " active game", activeGames.length > 1 ? 's' : '', ". Would you like to rejoin?"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 mb-4 max-h-96 overflow-y-auto"
    }, activeGames.map((game, idx) => /*#__PURE__*/React.createElement("button", {
      key: game.code,
      onClick: () => {
        setGameCode(game.code);
        setPlayerId(game.playerId);
        setPlayerName(game.playerName);
        setView('game');
        setShowReconnectModal(false);
      },
      className: `w-full text-left p-4 rounded-lg border-2 transition-all btn-3d ${idx === 0 ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-start mb-2"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold text-lg text-purple-900"
    }, game.code), idx === 0 && /*#__PURE__*/React.createElement("span", {
      className: "ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded"
    }, "Most Recent")), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-500"
    }, game.playerCount, " players")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600"
    }, "Host: ", game.hostName), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-purple-600 mt-1"
    }, "State: ", game.state)))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowReconnectModal(false),
      className: "w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
    }, "Start New Game Instead"))), /*#__PURE__*/React.createElement("div", {
      className: "glass-card rounded-2xl shadow-2xl p-8 max-w-md w-full card-3d fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center mb-4 float-animation"
    }, /*#__PURE__*/React.createElement(DictionaryLogo, {
      size: 80
    })), /*#__PURE__*/React.createElement("h1", {
      className: "text-3xl font-bold text-purple-900 mb-2 gradient-text"
    }, "Dictionary Game"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600"
    }, "Multiplayer Word Bluffing Game")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('host'),
      className: "w-full px-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-lg btn-3d fade-in-delay-1"
    }, "Host New Game"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('join'),
      className: "w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg btn-3d fade-in-delay-2"
    }, "Join Game"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('manage'),
      className: "w-full px-6 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold text-lg btn-3d fade-in-delay-3"
    }, "Manage My Games"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('stats'),
      className: "w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-lg btn-3d fade-in-delay-4"
    }, "\uD83D\uDCCA Game Stats"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('instructions'),
      className: "w-full px-6 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold text-lg btn-3d fade-in-delay-5"
    }, "\uD83D\uDCD6 How to Play"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('changelog'),
      className: "w-full px-6 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 font-semibold text-lg btn-3d fade-in-delay-6"
    }, "\u2728 What's New")), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 text-center space-y-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "\xA9 2026 Shaolynx, LLC"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-400"
    }, "Licensed under MIT License"), /*#__PURE__*/React.createElement("button", {
      onClick: e => {
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
      },
      className: "text-xs text-gray-400 hover:text-gray-600"
    }, "v1.3.0")), gameHistory.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mt-8"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-semibold text-gray-700 mb-3"
    }, "Recent Games"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 max-h-64 overflow-y-auto"
    }, gameHistory.map((game, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bg-gray-50 p-3 rounded text-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-start mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-purple-900"
    }, "\uD83C\uDFC6 ", game.winner?.name), /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-gray-500"
    }, new Date(game.endedAt).toLocaleDateString())), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-600"
    }, game.players?.slice(0, 3).map(p => `${p.name} (${p.score})`).join(', '), game.players?.length > 3 && '...'))))))), toast.show && /*#__PURE__*/React.createElement("div", {
      className: `toast show ${toast.type}`
    }, toast.message));
  }
  if (view === 'host') {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl p-8 max-w-md w-full card-3d"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement(DictionaryLogo, {
      size: 48
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-purple-900"
    }, "Host New Game")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Your Name"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: playerName,
      onChange: e => setPlayerName(e.target.value),
      placeholder: "Enter your name",
      className: "w-full px-4 py-2 border rounded-lg"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Choose Your Avatar"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-5 gap-2"
    }, avatarOptions.map(avatar => /*#__PURE__*/React.createElement("button", {
      key: avatar.id,
      onClick: () => setSelectedAvatar(avatar.id),
      className: `p-3 text-3xl rounded-lg border-2 transition ${selectedAvatar === avatar.id ? 'border-purple-600 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`,
      title: avatar.label
    }, avatar.emoji)))), /*#__PURE__*/React.createElement("button", {
      onClick: createGame,
      disabled: !playerName.trim(),
      className: "w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 btn-3d"
    }, "Create Game"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
    }, "Back"))));
  }
  if (view === 'manage') {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full card-3d"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement(DictionaryLogo, {
      size: 48
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-purple-900"
    }, "Manage My Games")), myCreatedGames.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "text-center py-8"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 mb-4"
    }, "You haven't created any active games yet."), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('host'),
      className: "px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 btn-3d"
    }, "Create Your First Game")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 mb-4"
    }, "All active games (", myCreatedGames.length, "):"), myCreatedGames.map(game => /*#__PURE__*/React.createElement("div", {
      key: game.code,
      className: "bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 depth-layer-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-start"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold text-xl text-orange-900"
    }, game.code), /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full"
    }, game.state || 'setup')), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-4 text-sm text-gray-600"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Players:"), " ", game.playerCount), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Host:"), " ", game.hostName), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Created:"), " ", new Date(game.createdAt).toLocaleString()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "font-medium"
    }, "Rounds:"), " ", game.roundsPlayed || 0)), game.currentWord && /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-sm"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-purple-700"
    }, "Current Word:"), /*#__PURE__*/React.createElement("span", {
      className: "text-purple-900 font-bold ml-1"
    }, game.currentWord))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 ml-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        navigator.clipboard.writeText(game.code);
        alert('Game code copied!');
      },
      className: "px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
      title: "Copy game code"
    }, "Copy Code"), /*#__PURE__*/React.createElement("button", {
      onClick: () => terminateGame(game.code, game.hostName),
      className: "px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600",
      title: "Terminate this game"
    }, "Terminate")))))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 space-y-2"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
    }, "Back to Home"), /*#__PURE__*/React.createElement("button", {
      onClick: resetAllData,
      className: "w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-bold",
      title: "Delete all games and data - cannot be undone!"
    }, "\uD83D\uDD25 Reset All Data (DANGER)"))));
  }
  if (view === 'join') {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl p-8 max-w-md w-full card-3d"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement(DictionaryLogo, {
      size: 48
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-purple-900"
    }, "Join Game")), availableGames.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-sm font-semibold text-gray-700 mb-2"
    }, "Active Games:"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 max-h-48 overflow-y-auto"
    }, availableGames.map(game => /*#__PURE__*/React.createElement("button", {
      key: game.code,
      onClick: () => quickJoinGame(game.code),
      className: "w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold text-blue-900"
    }, game.code), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-600 ml-2"
    }, "\u2022 Host: ", game.hostName)), /*#__PURE__*/React.createElement("span", {
      className: "text-sm text-gray-500"
    }, game.playerCount, " players"))))), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500 mt-2"
    }, "Click a game to auto-fill the code")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, availableGames.length > 0 && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600 text-center"
    }, "Or enter code manually:"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Game Code"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: inputGameCode,
      onChange: e => setInputGameCode(e.target.value.toUpperCase()),
      placeholder: "Enter 6-digit code",
      maxLength: "6",
      className: "w-full px-4 py-2 border rounded-lg uppercase"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Your Name"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: inputPlayerName,
      onChange: e => setInputPlayerName(e.target.value),
      placeholder: "Enter your name",
      className: "w-full px-4 py-2 border rounded-lg"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Choose Your Avatar"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-5 gap-2"
    }, avatarOptions.map(avatar => /*#__PURE__*/React.createElement("button", {
      key: avatar.id,
      onClick: () => setSelectedAvatar(avatar.id),
      className: `p-3 text-3xl rounded-lg border-2 transition ${selectedAvatar === avatar.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`,
      title: avatar.label
    }, avatar.emoji)))), /*#__PURE__*/React.createElement("button", {
      onClick: joinGame,
      disabled: !inputGameCode.trim() || !inputPlayerName.trim(),
      className: "w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 btn-3d"
    }, "Join Game"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
    }, "Back"))));
  }
  if (view === 'stats') {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-6xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl p-8 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement(DictionaryLogo, {
      size: 48
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-purple-900"
    }, "Game Stats")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
    }, "Back to Home")), /*#__PURE__*/React.createElement("div", {
      className: "mb-8"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-semibold text-purple-900 mb-4"
    }, "\uD83C\uDFAE Live Games (", liveGames.length, ")"), liveGames.length === 0 ? /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 text-center py-8"
    }, "No active games right now") : /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4"
    }, liveGames.map(game => {
      const topPlayers = Object.entries(game.players || {}).map(([id, p]) => ({
        ...p,
        id
      })).sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 3);
      return /*#__PURE__*/React.createElement("div", {
        key: game.code,
        className: "bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-4 depth-layer-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-start mb-3"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        className: "font-mono font-bold text-lg text-blue-900"
      }, game.code), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600"
      }, "Host: ", game.hostName)), /*#__PURE__*/React.createElement("div", {
        className: "text-right"
      }, /*#__PURE__*/React.createElement("span", {
        className: `px-2 py-1 rounded-full text-xs font-semibold ${game.state === 'setup' ? 'bg-gray-200 text-gray-700' : game.state === 'collecting' ? 'bg-yellow-200 text-yellow-800' : game.state === 'voting' ? 'bg-blue-200 text-blue-800' : game.state === 'results' ? 'bg-green-200 text-green-800' : 'bg-gray-200'}`
      }, game.state), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-500 mt-1"
      }, game.playerCount, " players"))), game.currentWord && /*#__PURE__*/React.createElement("div", {
        className: "mb-3 p-2 bg-white rounded"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-gray-600"
      }, "Current Word:"), /*#__PURE__*/React.createElement("p", {
        className: "font-bold text-purple-700"
      }, game.currentWord)), /*#__PURE__*/React.createElement("div", {
        className: "space-y-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-semibold text-gray-700"
      }, "Top Players:"), topPlayers.map((player, idx) => /*#__PURE__*/React.createElement("div", {
        key: player.id,
        className: "flex justify-between text-sm"
      }, /*#__PURE__*/React.createElement("span", {
        className: "flex items-center gap-1"
      }, idx === 0 && '🥇', " ", idx === 1 && '🥈', " ", idx === 2 && '🥉', player.name, player.isBot && '🤖'), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-purple-700"
      }, player.score || 0)))), /*#__PURE__*/React.createElement("div", {
        className: "mt-3 text-xs text-gray-500"
      }, "Rounds: ", game.roundsPlayed || 0));
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-semibold text-purple-900 mb-4"
    }, "\uD83D\uDCDC Game History (", allGameHistory.length, ")"), allGameHistory.length === 0 ? /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 text-center py-8"
    }, "No completed games yet") : /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 max-h-96 overflow-y-auto"
    }, allGameHistory.map((game, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bg-gray-50 border border-gray-200 rounded-lg p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-start mb-2"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold text-purple-900"
    }, game.gameCode), game.terminated && /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full"
    }, "Terminated")), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600"
    }, "Host: ", game.hostName)), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, new Date(game.endedAt).toLocaleDateString()), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, new Date(game.endedAt).toLocaleTimeString()))), game.winner && /*#__PURE__*/React.createElement("div", {
      className: "mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-yellow-900"
    }, "\uD83C\uDFC6 Winner: ", game.winner.name), /*#__PURE__*/React.createElement("span", {
      className: "text-gray-600 ml-2"
    }, "(", game.winner.score, " points)"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-3 gap-2 text-sm"
    }, game.players?.slice(0, 6).map((player, pIdx) => /*#__PURE__*/React.createElement("div", {
      key: pIdx,
      className: "flex justify-between bg-white p-2 rounded"
    }, /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, player.name), /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-purple-700"
    }, player.score))), game.players?.length > 6 && /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-gray-500 p-2"
    }, "+", game.players.length - 6, " more")), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-xs text-gray-500"
    }, "Rounds played: ", game.roundsPlayed || 0))))))));
  }
  if (view === 'instructions') {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl p-8 mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
    }, "\u2190 Back to Menu"), /*#__PURE__*/React.createElement("div", {
      className: "text-center mb-8"
    }, parseMarkdown(instructions)), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-lg btn-3d"
    }, "Ready to Play!")))));
  }
  if (view === 'changelog') {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl p-8 mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
    }, "\u2190 Back to Menu"), /*#__PURE__*/React.createElement("div", {
      className: "text-center mb-8"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold text-purple-900 mb-2"
    }, "\u2728 What's New"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600"
    }, "Recent updates and changes")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, parseMarkdown(changelog)), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('home'),
      className: "px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-lg btn-3d"
    }, "Back to Menu")))));
  }
  if (view === 'config' && gameData) {
    const isHost = gameData.host === playerId;
    if (!isHost) {
      return /*#__PURE__*/React.createElement("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "text-2xl font-bold text-red-600 mb-4"
      }, "Access Denied"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-600 mb-4"
      }, "Only the game host can access configuration."), /*#__PURE__*/React.createElement("button", {
        onClick: () => setView('game'),
        className: "px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 btn-3d"
      }, "Back to Game")));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl p-8 mb-6"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('game'),
      className: "mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 btn-3d"
    }, "\u2190 Back to Game"), /*#__PURE__*/React.createElement("div", {
      className: "text-center mb-8"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl font-bold text-purple-900 mb-2"
    }, "\u2699\uFE0F Game Configuration"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600"
    }, "Customize game settings (Host only)"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-500 mt-2"
    }, "Game Code: ", /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold"
    }, gameCode))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "border-l-4 border-green-500 pl-4"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-green-900 mb-3"
    }, "\uD83C\uDFAF Scoring Rules"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 mb-4"
    }, "Customize point values for different actions. Changes apply to this game only."), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setCustomScoring(gameData.customScoring || scoringConfig?.rules || {
          votesForFakeDefinition: {
            points: 1,
            description: 'Points per vote on fake definition'
          },
          votesForRealDefinition: {
            points: 1,
            description: 'Points to dictionary holder per vote on real definition'
          },
          votingForRealDefinition: {
            points: 1,
            description: 'Points for voting for real definition'
          }
        });
        setShowScoringModal(true);
      },
      className: "px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold btn-3d"
    }, "Edit Scoring Rules"), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 bg-green-50 p-4 rounded-lg"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-green-900 mb-2"
    }, "Current Rules:"), /*#__PURE__*/React.createElement("ul", {
      className: "text-sm text-gray-700 space-y-1"
    }, /*#__PURE__*/React.createElement("li", null, "\u2022 Votes on fake definition: ", /*#__PURE__*/React.createElement("strong", null, gameData.customScoring?.votesForFakeDefinition?.points || scoringConfig?.rules?.votesForFakeDefinition?.points || 1, " points")), /*#__PURE__*/React.createElement("li", null, "\u2022 Votes on real definition (to holder): ", /*#__PURE__*/React.createElement("strong", null, gameData.customScoring?.votesForRealDefinition?.points || scoringConfig?.rules?.votesForRealDefinition?.points || 1, " points")), /*#__PURE__*/React.createElement("li", null, "\u2022 Voting for real definition: ", /*#__PURE__*/React.createElement("strong", null, gameData.customScoring?.votingForRealDefinition?.points || scoringConfig?.rules?.votingForRealDefinition?.points || 1, " points"))))), /*#__PURE__*/React.createElement("div", {
      className: "border-l-4 border-gray-400 pl-4"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-gray-500 mb-3"
    }, "\uD83C\uDFA8 Avatar Management"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 mb-4"
    }, "Coming soon: Customize available avatars for players"), /*#__PURE__*/React.createElement("button", {
      disabled: true,
      className: "px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
    }, "Manage Avatars (Coming Soon)")), /*#__PURE__*/React.createElement("div", {
      className: "border-l-4 border-gray-400 pl-4"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-gray-500 mb-3"
    }, "\uD83D\uDCDD Instructions"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 mb-4"
    }, "Coming soon: Customize game instructions and rules"), /*#__PURE__*/React.createElement("button", {
      disabled: true,
      className: "px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
    }, "Edit Instructions (Coming Soon)"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 text-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('game'),
      className: "px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-lg btn-3d"
    }, "Back to Game")))));
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
      return /*#__PURE__*/React.createElement("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "text-2xl font-bold text-red-600 mb-4"
      }, "Disconnected"), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-600 mb-4"
      }, "You have been removed from this game or the game has ended."), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          localStorage.removeItem('dictionaryGame_code');
          localStorage.removeItem('dictionaryGame_playerId');
          localStorage.removeItem('dictionaryGame_playerName');
          setView('home');
        },
        className: "px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 btn-3d"
      }, "Return to Home")));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen gradient-bg-animated"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sticky-header glass-card rounded-b-2xl p-4 mb-4 fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-start"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "text-xl font-bold text-purple-900"
    }, "Dictionary Game"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600"
    }, isHost ? '👑 Host' : `Host: ${gameData.hostName}`), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-purple-600 font-medium"
    }, "\uD83D\uDCD6 ", isDictionaryHolder ? 'You hold the dictionary' : dictionaryHolderName)), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-lg mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-bold text-purple-900 text-xl"
    }, gameCode), /*#__PURE__*/React.createElement("button", {
      onClick: copyGameCode,
      className: "text-purple-600 hover:text-purple-800 text-sm font-semibold btn-3d px-2 py-1"
    }, "\uD83D\uDCCB Copy"), /*#__PURE__*/React.createElement("button", {
      onClick: copyShareLink,
      className: "text-purple-600 hover:text-purple-800 text-sm font-semibold btn-3d px-2 py-1"
    }, "\uD83D\uDD17 Link"), /*#__PURE__*/React.createElement("button", {
      onClick: shareGameCode,
      className: "text-purple-600 hover:text-purple-800 text-sm font-semibold btn-3d px-2 py-1"
    }, "\uD83D\uDCF1 QR")), showQRCode && /*#__PURE__*/React.createElement("div", {
      className: "mb-2 p-3 bg-white rounded-lg shadow-lg depth-layer-3"
    }, /*#__PURE__*/React.createElement("img", {
      src: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.origin + window.location.pathname + '?game=' + gameCode)}`,
      alt: "QR Code",
      className: "mx-auto"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600 mt-2 text-center"
    }, "Scan to join game")), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 flex-wrap justify-end"
    }, isHost && gameData.state === 'setup' && /*#__PURE__*/React.createElement("button", {
      onClick: addBotPlayers,
      className: "px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 btn-3d"
    }, "\uD83E\uDD16 Add Bots"), isDictionaryHolder && gameData.state === 'setup' && /*#__PURE__*/React.createElement("button", {
      onClick: restartRound,
      className: "px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
    }, "Restart Round"), isDictionaryHolder && Object.keys(players).length > 1 && /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowPassDictionary(true),
      className: "px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
    }, "\uD83D\uDCD6 Pass Dictionary"), isHost && /*#__PURE__*/React.createElement("button", {
      onClick: endGame,
      className: "px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700"
    }, "End Game"), /*#__PURE__*/React.createElement("button", {
      onClick: leaveGame,
      className: "px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
    }, "Leave Game"))))), /*#__PURE__*/React.createElement("div", {
      className: "glass-card rounded-2xl shadow-lg p-6 mb-4 slide-in"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-lg font-semibold mb-3"
    }, "Players (", Object.keys(players).length, ")"), isHost && gameData.state === 'setup' && /*#__PURE__*/React.createElement("div", {
      className: "mb-3 p-3 bg-blue-50 rounded"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Change Dictionary Holder:"), /*#__PURE__*/React.createElement("select", {
      value: gameData.dictionaryHolder || gameData.host,
      onChange: e => changeDictionaryHolder(e.target.value),
      className: "w-full px-3 py-2 border rounded"
    }, Object.entries(players).map(([id, player]) => /*#__PURE__*/React.createElement("option", {
      key: id,
      value: id
    }, player.name)))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2"
    }, Object.entries(players).sort(([, a], [, b]) => (b.score || 0) - (a.score || 0)).map(([id, player], index) => {
      const avatar = avatarOptions.find(a => a.id === player.avatar);
      const isMe = id === playerId;
      const medals = ['🥇', '🥈', '🥉'];
      return /*#__PURE__*/React.createElement("div", {
        key: id,
        className: `flex justify-between items-center p-3 rounded ${isMe ? 'bg-purple-100 border-2 border-purple-400' : 'bg-purple-50'}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, index < 3 && player.score > 0 && /*#__PURE__*/React.createElement("span", {
        className: "text-xl"
      }, medals[index]), /*#__PURE__*/React.createElement("span", {
        className: "text-2xl"
      }, avatar?.emoji || '👤'), /*#__PURE__*/React.createElement("span", {
        className: `font-medium ${isMe ? 'text-purple-900' : ''}`
      }, player.name, player.isBot && /*#__PURE__*/React.createElement("span", {
        className: "ml-1 text-xs text-gray-500"
      }, "\uD83E\uDD16"))), /*#__PURE__*/React.createElement("span", {
        className: "text-purple-700 font-bold"
      }, player.score || 0));
    }))), isDictionaryHolder && gameData.state === 'setup' && /*#__PURE__*/React.createElement("div", {
      className: "glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-4"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-semibold"
    }, "Setup Round"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, isHost && /*#__PURE__*/React.createElement("button", {
      onClick: () => setView('config'),
      className: "px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 btn-3d"
    }, "\u2699\uFE0F Configuration"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowWordHistory(true),
      className: "px-3 py-1 bg-indigo-500 text-white rounded text-sm hover:bg-indigo-600 btn-3d"
    }, "\uD83D\uDCDA Word History (", usedWords.length + skippedWords.length, ")"))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Difficulty"), /*#__PURE__*/React.createElement("select", {
      value: difficulty,
      onChange: e => setDifficulty(e.target.value),
      className: "w-full px-3 py-2 border rounded"
    }, /*#__PURE__*/React.createElement("option", {
      value: "kids"
    }, "Kids (8-12)"), /*#__PURE__*/React.createElement("option", {
      value: "teen"
    }, "Teens"), /*#__PURE__*/React.createElement("option", {
      value: "adult"
    }, "Adults"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Word"), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 mb-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: currentWord,
      onChange: e => setCurrentWord(e.target.value),
      placeholder: "Enter word",
      className: "flex-1 px-3 py-2 border rounded"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: getRandomWord,
      disabled: loadingWord,
      className: "px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
    }, loadingWord ? 'Loading...' : 'Random'), currentWord && /*#__PURE__*/React.createElement("button", {
      onClick: speakWord,
      className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
      title: "Pronounce word"
    }, "\uD83D\uDD0A")), pronunciation && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-purple-600 mb-2"
    }, "\uD83D\uDCE2 Pronunciation: ", /*#__PURE__*/React.createElement("span", {
      className: "font-mono"
    }, pronunciation)), wordFact && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-600 mb-2"
    }, "\uD83D\uDCA1 ", wordFact), currentWord && usedWords.includes(currentWord.toLowerCase().trim()) && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-orange-600 mb-2"
    }, "\u26A0\uFE0F This word has been used before"), currentWord && skippedWords.includes(currentWord.toLowerCase().trim()) && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-red-600 mb-2"
    }, "\u26A0\uFE0F This word was previously skipped")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-medium mb-2"
    }, "Real Definition"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, /*#__PURE__*/React.createElement("textarea", {
      value: realDefinition,
      onChange: e => setRealDefinition(e.target.value),
      placeholder: "Enter the real definition",
      className: "w-full px-3 py-2 border rounded h-24"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: getDefinition,
      disabled: loadingDefinition || !currentWord.trim(),
      className: "w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
    }, loadingDefinition ? 'Loading...' : 'Get Definition'), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-500"
    }, "Click \"Get Definition\" to auto-fill from online dictionary"))), /*#__PURE__*/React.createElement("button", {
      onClick: startRound,
      className: "w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
    }, "Start Collecting Definitions"), /*#__PURE__*/React.createElement("button", {
      onClick: skipWord,
      disabled: !currentWord.trim(),
      className: "w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-400"
    }, "Skip Word (Too Easy/Already Known)"), (usedWords.length > 0 || skippedWords.length > 0) && /*#__PURE__*/React.createElement("div", {
      className: "mt-4 p-3 bg-gray-50 rounded"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between items-center mb-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium text-gray-700"
    }, "Word History: ", usedWords.length, " used, ", skippedWords.length, " skipped"), /*#__PURE__*/React.createElement("button", {
      onClick: clearWordHistory,
      className: "text-xs text-red-600 hover:text-red-700 underline"
    }, "Clear History")), usedWords.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "mb-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-600"
    }, "Used:"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600"
    }, usedWords.slice(-10).reverse().join(', '), usedWords.length > 10 && '...')), skippedWords.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-semibold text-gray-600"
    }, "Skipped:"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600"
    }, skippedWords.slice(-10).reverse().join(', '), skippedWords.length > 10 && '...'))))), !isDictionaryHolder && gameData.state === 'setup' && /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-lg p-6 mb-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600"
    }, "Waiting for dictionary holder to start the round...")), gameData.state === 'collecting' && /*#__PURE__*/React.createElement("div", {
      className: "glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-semibold mb-2"
    }, isDictionaryHolder ? 'Definitions Coming In' : 'Submit Your Definition'), /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600"
    }, "Word: ", /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-lg"
    }, gameData.currentWord)), gameData.currentWord && /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(gameData.currentWord);
          utterance.rate = 0.8;
          utterance.pitch = 1;
          window.speechSynthesis.speak(utterance);
        }
      },
      className: "px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",
      title: "Pronounce word"
    }, "\uD83D\uDD0A")), gameData.pronunciation && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-purple-600 mt-1"
    }, "\uD83D\uDCE2 ", gameData.pronunciation), gameData.wordFact && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-600 mt-1"
    }, "\uD83D\uDCA1 ", gameData.wordFact)), !isDictionaryHolder && !definitions[playerId] && /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("textarea", {
      value: myDefinition,
      onChange: e => setMyDefinition(e.target.value),
      placeholder: "Write a fake definition...",
      className: "w-full px-3 py-2 border rounded h-24"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: submitDefinition,
      className: "w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    }, "Submit Definition")), !isDictionaryHolder && definitions[playerId] && /*#__PURE__*/React.createElement("div", {
      className: "bg-green-50 p-4 rounded"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-green-800 font-semibold"
    }, "\u2713 Your definition submitted!")), isDictionaryHolder && /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600"
    }, "Definitions received: ", Object.keys(definitions).length, " / ", Object.keys(players).length - 1), (() => {
      const pendingPlayers = Object.entries(players).filter(([pId, p]) => pId !== playerId && !definitions[pId]).map(([pId, p]) => p);
      if (pendingPlayers.length > 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3"
        }, /*#__PURE__*/React.createElement("p", {
          className: "text-xs font-semibold text-yellow-800 mb-2"
        }, "Waiting for:"), /*#__PURE__*/React.createElement("div", {
          className: "flex flex-wrap gap-2"
        }, pendingPlayers.map((player, idx) => {
          const avatar = avatarOptions.find(a => a.id === player.avatar);
          return /*#__PURE__*/React.createElement("span", {
            key: idx,
            className: "text-xs bg-yellow-100 px-2 py-1 rounded-full flex items-center gap-1"
          }, /*#__PURE__*/React.createElement("span", null, avatar?.emoji || '👤'), /*#__PURE__*/React.createElement("span", null, player.name));
        })));
      }
    })(), (() => {
      // Create array of all definitions including real one
      const allDefs = [{
        id: 'real',
        text: gameData.realDefinition,
        isReal: true
      }, ...Object.entries(definitions).map(([defId, def]) => ({
        id: defId,
        text: def.text,
        isReal: false
      }))];

      // Shuffle the array (using sort with random comparison)
      const shuffled = allDefs.sort(() => Math.random() - 0.5);
      return shuffled.map((def, idx) => /*#__PURE__*/React.createElement("div", {
        key: def.id,
        className: def.isReal ? "bg-green-50 p-3 rounded border-2 border-green-300 depth-layer-1" : "bg-gray-50 p-3 rounded depth-layer-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-sm font-medium text-gray-600 flex items-center gap-2"
      }, def.isReal && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCD6"), "Definition ", idx + 1, def.isReal && /*#__PURE__*/React.createElement("span", {
        className: "text-green-700 font-bold"
      }, "(Real)")), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 mt-1"
      }, def.text)));
    })(), Object.keys(definitions).length >= Object.keys(players).length - 1 ? /*#__PURE__*/React.createElement("button", {
      onClick: startVoting,
      className: "w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
    }, "Start Voting") : /*#__PURE__*/React.createElement("button", {
      disabled: true,
      className: "w-full px-4 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed"
    }, "Waiting for all definitions..."))), gameData.state === 'voting' && /*#__PURE__*/React.createElement("div", {
      className: "glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-semibold mb-2"
    }, "Vote for the Real Definition"), /*#__PURE__*/React.createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600"
    }, "Word: ", /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-lg"
    }, gameData.currentWord)), gameData.currentWord && /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(gameData.currentWord);
          utterance.rate = 0.8;
          utterance.pitch = 1;
          window.speechSynthesis.speak(utterance);
        }
      },
      className: "px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",
      title: "Pronounce word"
    }, "\uD83D\uDD0A")), gameData.pronunciation && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-purple-600 mt-1"
    }, "\uD83D\uDCE2 ", gameData.pronunciation), gameData.wordFact && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-blue-600 mt-1"
    }, "\uD83D\uDCA1 ", gameData.wordFact)), !isDictionaryHolder && /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, [...Object.entries(definitions).filter(([id]) => id !== playerId), ['real', {
      text: gameData.realDefinition
    }]].sort(() => Math.random() - 0.5).map(([id, def]) => {
      const voted = myVote === id;
      const player = id === 'real' ? null : players[id];
      const avatar = player ? avatarOptions.find(a => a.id === player.avatar) : null;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => castVote(id),
        className: `w-full text-left p-4 rounded-lg border-2 transition-all ${voted ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-purple-300 hover:shadow-md'} btn-3d`
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-3xl flex-shrink-0"
      }, "\uD83D\uDCDD"), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800"
      }, def.text)), voted && /*#__PURE__*/React.createElement("span", {
        className: "ml-2 text-green-600 font-semibold text-xl flex-shrink-0"
      }, "\u2713")));
    })), isDictionaryHolder && /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600"
    }, "Votes cast: ", Object.keys(votes).length, " / ", Object.keys(players).length - 1), Object.keys(votes).length >= Object.keys(players).length - 1 && /*#__PURE__*/React.createElement("button", {
      onClick: showResults,
      className: "w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
    }, "Show Results"))), gameData.state === 'results' && /*#__PURE__*/React.createElement("div", {
      className: "glass-card rounded-2xl shadow-lg p-6 mb-4 fade-in"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-semibold mb-4"
    }, "Round Results"), /*#__PURE__*/React.createElement("div", {
      className: "mb-4 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-2xl font-bold text-purple-900"
    }, gameData.currentWord), gameData.pronunciation && /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-purple-600 mt-1"
    }, "\uD83D\uDCE2 ", gameData.pronunciation)), /*#__PURE__*/React.createElement("div", {
      className: "mb-6 p-4 bg-green-50 rounded-lg depth-layer-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start gap-3 mb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-3xl"
    }, "\uD83D\uDCD6"), /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-green-900 mb-2"
    }, "Real Definition:"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-800"
    }, gameData.realDefinition))), (() => {
      const totalVotes = Object.values(gameData.voteCounts || {}).reduce((a, b) => a + b, 0) || 1;
      const voteCount = gameData.voteCounts?.real || 0;
      const percentage = (voteCount / totalVotes * 100).toFixed(0);
      const votersForReal = Object.entries(votes).filter(([voterId, defId]) => defId === 'real').map(([voterId]) => voterId);
      return /*#__PURE__*/React.createElement("div", {
        className: "mt-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between text-sm text-green-700 mb-1"
      }, /*#__PURE__*/React.createElement("span", null, "Votes: ", voteCount), /*#__PURE__*/React.createElement("span", null, percentage, "%")), /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-green-200 rounded-full h-3 overflow-hidden"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-green-600 h-full rounded-full transition-all duration-1000 ease-out",
        style: {
          width: `${percentage}%`
        }
      })), votersForReal.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 flex flex-wrap gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-green-700 font-semibold"
      }, "Voted by:"), votersForReal.map(voterId => {
        const voter = players[voterId];
        const voterAvatar = voter ? avatarOptions.find(a => a.id === voter.avatar) : null;
        return /*#__PURE__*/React.createElement("span", {
          key: voterId,
          className: "text-xs bg-green-100 px-2 py-1 rounded-full flex items-center gap-1"
        }, /*#__PURE__*/React.createElement("span", null, voterAvatar?.emoji || '👤'), /*#__PURE__*/React.createElement("span", null, voter?.name));
      })));
    })()), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 mb-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold"
    }, "Player Definitions:"), Object.entries(definitions).map(([defId, def]) => {
      const playerInfo = players[defId];
      const avatar = playerInfo ? avatarOptions.find(a => a.id === playerInfo.avatar) : null;
      const voteCount = gameData.voteCounts?.[defId] || 0;
      const totalVotes = Object.values(gameData.voteCounts || {}).reduce((a, b) => a + b, 0) || 1;
      const percentage = (voteCount / totalVotes * 100).toFixed(0);
      const votersForDef = Object.entries(votes).filter(([voterId, voteDefId]) => voteDefId === defId).map(([voterId]) => voterId);
      return /*#__PURE__*/React.createElement("div", {
        key: defId,
        className: "p-4 bg-purple-50 rounded-lg depth-layer-2"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-3 mb-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-3xl"
      }, avatar?.emoji || '👤'), /*#__PURE__*/React.createElement("div", {
        className: "flex-1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-between mb-1"
      }, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-purple-900"
      }, playerInfo?.name, ":"), isHost && !playerInfo?.isBot && /*#__PURE__*/React.createElement("button", {
        onClick: () => awardBonusPoint(defId),
        className: "px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-xs font-semibold btn-3d",
        title: "Award bonus point for excellent definition"
      }, "+1 Bonus")), /*#__PURE__*/React.createElement("p", {
        className: "text-gray-800 mt-1"
      }, def.text))), /*#__PURE__*/React.createElement("div", {
        className: "mt-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between text-sm text-purple-700 mb-1"
      }, /*#__PURE__*/React.createElement("span", null, "Votes: ", voteCount), /*#__PURE__*/React.createElement("span", null, percentage, "%")), /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-purple-200 rounded-full h-3 overflow-hidden"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-purple-600 h-full rounded-full transition-all duration-1000 ease-out",
        style: {
          width: `${percentage}%`
        }
      })), votersForDef.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 flex flex-wrap gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs text-purple-700 font-semibold"
      }, "Voted by:"), votersForDef.map(voterId => {
        const voter = players[voterId];
        const voterAvatar = voter ? avatarOptions.find(a => a.id === voter.avatar) : null;
        return /*#__PURE__*/React.createElement("span", {
          key: voterId,
          className: "text-xs bg-purple-100 px-2 py-1 rounded-full flex items-center gap-1"
        }, /*#__PURE__*/React.createElement("span", null, voterAvatar?.emoji || '👤'), /*#__PURE__*/React.createElement("span", null, voter?.name));
      }))));
    })), isHost && /*#__PURE__*/React.createElement("button", {
      onClick: newRound,
      className: "w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    }, "New Round"), !isHost && /*#__PURE__*/React.createElement("p", {
      className: "text-center text-gray-600"
    }, "Waiting for host to start next round..."))), showScoringModal && customScoring && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-2xl p-6 max-w-2xl w-full"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold text-gray-900 mb-4"
    }, "\u2699\uFE0F Customize Scoring"), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-gray-600 mb-4"
    }, "Adjust point values for different actions. Changes apply to this game only."), /*#__PURE__*/React.createElement("div", {
      className: "space-y-4 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-50 p-4 rounded-lg"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-semibold text-purple-900 mb-2"
    }, "Points per vote on fake definition"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600 mb-2"
    }, "Players earn this many points for each vote their fake definition receives"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "0",
      max: "10",
      value: customScoring.votesForFakeDefinition?.points || 0,
      onChange: e => setCustomScoring({
        ...customScoring,
        votesForFakeDefinition: {
          ...customScoring.votesForFakeDefinition,
          points: parseInt(e.target.value) || 0
        }
      }),
      className: "w-full px-4 py-2 border rounded-lg text-center text-lg font-bold"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-green-50 p-4 rounded-lg"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-semibold text-green-900 mb-2"
    }, "Points to dictionary holder per vote on real definition"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600 mb-2"
    }, "Dictionary holder earns this many points for each vote on the real definition"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "0",
      max: "10",
      value: customScoring.votesForRealDefinition?.points || 0,
      onChange: e => setCustomScoring({
        ...customScoring,
        votesForRealDefinition: {
          ...customScoring.votesForRealDefinition,
          points: parseInt(e.target.value) || 0
        }
      }),
      className: "w-full px-4 py-2 border rounded-lg text-center text-lg font-bold"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bg-blue-50 p-4 rounded-lg"
    }, /*#__PURE__*/React.createElement("label", {
      className: "block text-sm font-semibold text-blue-900 mb-2"
    }, "Points for voting for real definition"), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-gray-600 mb-2"
    }, "Players earn this many points when they correctly vote for the real definition"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "0",
      max: "10",
      value: customScoring.votingForRealDefinition?.points || 0,
      onChange: e => setCustomScoring({
        ...customScoring,
        votingForRealDefinition: {
          ...customScoring.votingForRealDefinition,
          points: parseInt(e.target.value) || 0
        }
      }),
      className: "w-full px-4 py-2 border rounded-lg text-center text-lg font-bold"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-3"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        // Reset to defaults
        setCustomScoring(scoringConfig?.rules || {
          votesForFakeDefinition: {
            points: 1
          },
          votesForRealDefinition: {
            points: 1
          },
          votingForRealDefinition: {
            points: 1
          }
        });
      },
      className: "flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
    }, "Reset to Defaults"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowScoringModal(false),
      className: "flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      onClick: async () => {
        await database.ref(`games/${gameCode}/customScoring`).set(customScoring);
        showToast('Scoring rules updated!', 'success');
        setShowScoringModal(false);
      },
      className: "flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
    }, "Save Changes")))), showWordHistory && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-2xl p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold text-gray-900 mb-4"
    }, "\uD83D\uDCDA Word History"), usedWords.length === 0 && skippedWords.length === 0 ? /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 text-center py-8"
    }, "No words in history yet") : /*#__PURE__*/React.createElement("div", {
      className: "space-y-6"
    }, usedWords.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-semibold text-green-900"
    }, "\u2713 Used Words (", usedWords.length, ")")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto"
    }, usedWords.map((word, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bg-green-50 border border-green-200 rounded p-2 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm truncate"
    }, word), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeWordFromHistory(word, 'used'),
      className: "ml-2 text-red-500 hover:text-red-700 text-xs",
      title: "Remove from history"
    }, "\u2715"))))), skippedWords.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-semibold text-orange-900"
    }, "\u23ED\uFE0F Skipped Words (", skippedWords.length, ")")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto"
    }, skippedWords.map((word, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bg-orange-50 border border-orange-200 rounded p-2 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm truncate"
    }, word), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeWordFromHistory(word, 'skipped'),
      className: "ml-2 text-red-500 hover:text-red-700 text-xs",
      title: "Remove from history"
    }, "\u2715")))))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 flex gap-3"
    }, (usedWords.length > 0 || skippedWords.length > 0) && /*#__PURE__*/React.createElement("button", {
      onClick: clearWordHistory,
      className: "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
    }, "Clear All History"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowWordHistory(false),
      className: "flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
    }, "Close")))), showPassDictionary && /*#__PURE__*/React.createElement("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg shadow-xl max-w-md w-full p-6"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold text-gray-900 mb-4"
    }, "\uD83D\uDCD6 Pass Dictionary"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-600 mb-4"
    }, "Select a player to become the new Dictionary Holder:"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 mb-6 max-h-64 overflow-y-auto"
    }, Object.entries(players).filter(([id, player]) => id !== playerId && !player.isBot).map(([id, player]) => {
      const avatar = avatarOptions.find(a => a.id === player.avatar);
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => passDictionary(id),
        className: "w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-left flex items-center gap-3 transition-colors"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-2xl"
      }, avatar?.emoji || '👤'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        className: "font-semibold text-gray-900"
      }, player.name), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-gray-600"
      }, "Score: ", player.score)));
    }), Object.entries(players).filter(([id, player]) => id !== playerId && !player.isBot).length === 0 && /*#__PURE__*/React.createElement("p", {
      className: "text-center text-gray-500 py-4"
    }, "No other human players available")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowPassDictionary(false),
      className: "w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
    }, "Cancel"))), toast.show && /*#__PURE__*/React.createElement("div", {
      className: `toast show ${toast.type}`
    }, toast.message));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600"
  }, "Loading...")), toast.show && /*#__PURE__*/React.createElement("div", {
    className: `toast show ${toast.type}`
  }, toast.message));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(MultiplayerDictionaryGame, null));