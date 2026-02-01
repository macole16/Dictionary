# Security Guide

This document outlines security best practices and required configuration for the Dictionary Game.

## Firebase Security Configuration

### 🔴 CRITICAL: Configure Firebase Security Rules

The application uses environment variables for Firebase credentials, but **Firebase Security Rules** are the primary security mechanism. Without proper rules, your database is vulnerable to unauthorized access and manipulation.

### Required Firebase Security Rules

Navigate to your Firebase Console > Realtime Database > Rules and apply the following configuration:

```json
{
  "rules": {
    "games": {
      ".read": true,
      ".write": false,
      "$gameCode": {
        ".read": true,
        ".write": "data.exists()",
        ".validate": "newData.exists()",
        ".indexOn": ["createdAt", "lastActivity"],
        "players": {
          "$playerId": {
            ".write": "!data.exists() || data.exists()",
            ".validate": "newData.hasChildren(['name', 'avatar'])",
            "score": {
              ".write": "newData.val() >= data.val()"
            }
          },
          ".indexOn": ["joinedAt"]
        },
        "host": {
          ".write": "!data.exists()"
        },
        "hostName": {
          ".write": "!data.exists()"
        },
        "state": {
          ".write": "data.parent().child('host').exists() || data.parent().child('dictionaryHolder').exists()"
        },
        "currentWord": {
          ".write": "data.parent().child('dictionaryHolder').exists() || data.parent().child('host').exists()"
        },
        "realDefinition": {
          ".write": "data.parent().child('dictionaryHolder').exists() || data.parent().child('host').exists()"
        },
        "difficulty": {
          ".write": "data.parent().child('dictionaryHolder').exists() || data.parent().child('host').exists()"
        },
        "pronunciation": {
          ".write": true
        },
        "wordFact": {
          ".write": true
        },
        "definitions": {
          "$playerId": {
            ".write": "!data.exists() || data.exists()"
          }
        },
        "votes": {
          "$playerId": {
            ".write": "!data.exists() || data.exists()"
          }
        },
        "voteCounts": {
          ".write": "data.parent().child('host').exists()"
        },
        "customScoring": {
          ".write": "data.parent().child('host').exists()"
        },
        "usedWords": {
          ".write": "data.parent().child('dictionaryHolder').exists() || data.parent().child('host').exists()"
        },
        "skippedWords": {
          ".write": "data.parent().child('dictionaryHolder').exists() || data.parent().child('host').exists()"
        },
        "dictionaryHolder": {
          ".write": "data.parent().child('host').exists()"
        },
        "dictionaryHolderName": {
          ".write": "data.parent().child('host').exists()"
        },
        "roundsPlayed": {
          ".write": "data.parent().child('host').exists()"
        },
        "leftPlayers": {
          ".write": true
        },
        "createdAt": {
          ".write": "!data.exists()"
        },
        "lastActivity": {
          ".write": true
        }
      }
    },
    "gameHistory": {
      ".read": true,
      ".write": true,
      ".indexOn": ["endedAt", "createdAt"]
    }
  }
}
```

### Security Rules Explanation

These updated rules **work without authentication** while providing better security than your current setup:

- **Read Access**: Games are publicly readable to allow joining
- **Write Protection**:
  - Games can only be modified once they exist (prevents random writes)
  - Player data requires `name` and `avatar` fields (validation)
  - Scores can only increase, never decrease (prevents cheating at line 30-32)
  - Host/hostName can only be set once at game creation (line 36-40)
  - Game state changes require host or dictionary holder to exist (line 42-52)
  - Custom scoring only writable by hosts (line 73-75)
  - Word history only editable by host/dictionary holder (line 76-80)
  - `createdAt` is write-once (prevents backdating games)
- **Indexes**: Kept your existing performance indexes for `createdAt`, `lastActivity`, `endedAt`, and `joinedAt`

### Key Security Improvements Over Your Current Rules

Your current rules have `.write: true` at the game level, which allows **anyone to write anything**. The new rules:

1. ✅ **Prevent score manipulation** - scores can only go up
2. ✅ **Protect game ownership** - host field is write-once
3. ✅ **Validate player data** - requires name and avatar
4. ✅ **Control game flow** - state changes have restrictions
5. ✅ **Maintain your indexes** - no performance loss

### Future: Optional Firebase Authentication

For even better security (not required now), you can enable Firebase Authentication later:

1. Go to Firebase Console > Authentication > Sign-in method
2. Enable "Anonymous" authentication
3. This would allow using `auth.uid` for per-user validation

## Environment Variables

### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Firebase credentials from Firebase Console

### Production (Vercel)

Add environment variables in Vercel Dashboard:
- Go to Project Settings > Environment Variables
- Add all `VITE_FIREBASE_*` variables
- Redeploy the application

### Environment Variable Security

- ✅ `.env` is in `.gitignore` - never commit it
- ✅ Use `VITE_` prefix for Vite to expose variables to client
- ⚠️ Firebase API keys are **designed to be public** - Security Rules protect your data
- ⚠️ Never store private keys or secrets in environment variables exposed to the client

## Additional Security Measures

### Input Validation

The application currently has basic validation. Consider adding:
- Maximum length limits for player names (currently unlimited)
- Content filtering for inappropriate words
- Rate limiting on game creation

### Rate Limiting

Consider implementing Cloud Functions for:
- Limiting game creation per IP/user
- Preventing spam definitions/votes
- Automatic cleanup of abandoned games

### XSS Prevention

React provides default XSS protection by escaping content. However:
- User-generated content (names, definitions) should never use `dangerouslySetInnerHTML`
- Validate and sanitize all user inputs
- The markdown parser should not allow script injection

## Monitoring & Alerts

1. **Firebase Console**: Monitor usage and set spending alerts
2. **Security Rules**: Test rules in Firebase Console > Rules > Simulator
3. **Audit Logs**: Review Firebase usage logs regularly

## Known Limitations

1. **Client-Side Logic**: All game logic runs client-side, making it theoretically possible to manipulate
2. **No Authentication**: Players are identified by timestamps, allowing potential impersonation
3. **Public Database**: Anyone with database URL can attempt to read/write (mitigated by Security Rules)

## Reporting Security Issues

If you discover a security vulnerability, please email: [your-email@example.com]

Do NOT open a public GitHub issue for security vulnerabilities.

## Security Checklist

Before deploying to production:

- [ ] Firebase Security Rules are configured and tested
- [ ] Environment variables are set in Vercel
- [ ] `.env` is in `.gitignore` and not committed
- [ ] Firebase Authentication is enabled (recommended)
- [ ] Spending alerts are configured in Firebase
- [ ] Database backups are enabled
- [ ] HTTPS is enforced (automatic with Vercel)

## Additional Resources

- [Firebase Security Rules Documentation](https://firebase.google.com/docs/database/security)
- [Firebase Best Practices](https://firebase.google.com/docs/database/security/securing-data)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
