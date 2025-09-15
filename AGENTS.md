# AGENTS.md - Cross-Platform Login App

## Project Overview
Build a simple, secure login application that works seamlessly across iOS, Android, and web platforms using Expo and Firebase Authentication.

## Tech Stack
- **Framework**: Expo (React Native)
- **Authentication**: Firebase Authentication
- **Platforms**: iOS, Android, Web
- **Repository**: GitHub
- **Package Manager**: npm/yarn

## Project Structure
```
expo-login-app/
├── App.js
├── app.json
├── package.json
├── firebase.config.js
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── SignUpForm.js
│   │   └── LoadingSpinner.js
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── SignUpScreen.js
│   │   ├── HomeScreen.js
│   │   └── ProfileScreen.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── services/
│   │   └── authService.js
│   └── utils/
│       └── validation.js
├── assets/
│   ├── images/
│   └── fonts/
└── web-build/
```

## Setup Instructions

### 1. Initialize Expo Project
```bash
npx create-expo-app expo-login-app --template blank
cd expo-login-app
```

### 2. Install Required Dependencies
```bash
# Core dependencies
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install firebase
npm install @expo/vector-icons

# Expo specific
npx expo install expo-status-bar
npx expo install expo-constants
npx expo install expo-linking
npx expo install expo-splash-screen
```

### 3. Firebase Setup
1. Create a new Firebase project at https://console.firebase.google.com
2. Enable Authentication and Email/Password provider
3. Add iOS, Android, and Web apps to your Firebase project
4. Download configuration files:
   - `google-services.json` for Android
   - `GoogleService-Info.plist` for iOS
   - Web config object for web

### 4. Configure Firebase
Create `firebase.config.js`:
```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
```

## Core Features Implementation

### Authentication Context
Create a global authentication state using React Context:

**src/context/AuthContext.js**
- Manage user authentication state
- Provide login, logout, and signup functions
- Handle authentication persistence
- Loading states for auth operations

### Key Components

#### LoginForm Component
- Email and password input fields
- Form validation
- Login button with loading state
- "Forgot Password" link
- Navigation to signup screen

#### SignUpForm Component
- Email, password, and confirm password fields
- Input validation (email format, password strength)
- Account creation functionality
- Terms of service acceptance
- Navigation back to login

#### Navigation Setup
- Stack navigator for auth flow
- Conditional rendering based on auth state
- Smooth transitions between screens

### Screen Components

#### LoginScreen
- Welcome message and branding
- LoginForm component integration
- "Don't have an account?" link to signup
- Error handling and user feedback

#### SignUpScreen
- User registration interface
- SignUpForm component integration
- "Already have an account?" link to login
- Success messaging after registration

#### HomeScreen
- Welcome message for authenticated users
- User profile information display
- Logout functionality
- Navigation to other protected screens

#### ProfileScreen
- Display user email and account info
- Account management options
- Logout button
- Future: Edit profile functionality

## Firebase Authentication Features

### Email/Password Authentication
```javascript
// Login
import { signInWithEmailAndPassword } from 'firebase/auth';

// Signup
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Logout
import { signOut } from 'firebase/auth';

// Password Reset
import { sendPasswordResetEmail } from 'firebase/auth';
```

### Authentication State Management
- Listen to auth state changes
- Persist login across app restarts
- Handle authentication errors gracefully
- Implement proper loading states

## Platform-Specific Configurations

### iOS Configuration
Update `app.json`:
```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.yourcompany.expologinapp",
      "googleServicesFile": "./GoogleService-Info.plist"
    }
  }
}
```

### Android Configuration
Update `app.json`:
```json
{
  "expo": {
    "android": {
      "package": "com.yourcompany.expologinapp",
      "googleServicesFile": "./google-services.json"
    }
  }
}
```

### Web Configuration
- Ensure Firebase is properly configured for web
- Test web-specific authentication flows
- Handle web-specific navigation patterns

## Security Best Practices

### Input Validation
- Validate email format using regex
- Enforce password strength requirements
- Sanitize all user inputs
- Implement client-side validation with server-side backup

### Error Handling
- Don't expose sensitive error information
- Provide user-friendly error messages
- Log errors for debugging without exposing details
- Handle network connectivity issues

### Data Protection
- Never store passwords in plain text
- Use Firebase's built-in security features
- Implement proper session management
- Follow OWASP mobile security guidelines

## Development Workflow

### 1. Core Authentication Setup
- [ ] Set up Firebase project and configuration
- [ ] Implement AuthContext with basic auth functions
- [ ] Create login and signup forms
- [ ] Test authentication flow on all platforms

### 2. UI/UX Implementation
- [ ] Design consistent UI across platforms
- [ ] Implement responsive layouts
- [ ] Add loading states and error handling
- [ ] Create smooth navigation transitions

### 3. Platform Testing
- [ ] Test on iOS simulator/device
- [ ] Test on Android emulator/device
- [ ] Test web version in multiple browsers
- [ ] Verify authentication persistence

### 4. Security and Validation
- [ ] Implement comprehensive input validation
- [ ] Add password strength indicators
- [ ] Test error scenarios and edge cases
- [ ] Security audit and testing

## GitHub Repository Setup

### Repository Structure
```
.gitignore              # Expo and Node.js gitignore
README.md              # Project documentation
AGENTS.md              # This file
package.json           # Dependencies and scripts
app.json               # Expo configuration
```

### Important .gitignore Entries
```
# Firebase
google-services.json
GoogleService-Info.plist
firebase.config.js

# Environment
.env
.env.local

# Expo
.expo/
dist/
web-build/

# Dependencies
node_modules/
```

### README.md Template
Include setup instructions, platform-specific build commands, and contribution guidelines.

## Deployment and Distribution

### Expo Development Build
```bash
# Install Expo CLI
npm install -g @expo/cli

# Start development server
npx expo start

# Build for different platforms
npx expo build:ios
npx expo build:android
npx expo build:web
```

### Testing Commands
```bash
# Run on iOS
npx expo start --ios

# Run on Android
npx expo start --android

# Run on Web
npx expo start --web
```

## Future Enhancements

### Phase 2 Features
- Social login (Google, Apple, Facebook)
- Biometric authentication
- Profile picture upload
- Password strength meter
- Remember me functionality

### Phase 3 Features
- Multi-factor authentication
- Account verification via email
- Password reset functionality
- User profile management
- Dark mode support

## Testing Strategy

### Unit Testing
- Test authentication functions
- Validate form inputs
- Test error handling

### Integration Testing
- Test complete authentication flows
- Verify Firebase integration
- Test navigation between screens

### Platform Testing
- iOS specific testing
- Android specific testing
- Web browser compatibility
- Responsive design verification

## Performance Considerations

### Optimization Strategies
- Lazy load screens and components
- Optimize bundle size for web
- Implement proper loading states
- Cache user authentication state
- Minimize Firebase reads/writes

### Monitoring
- Track authentication success rates
- Monitor app performance across platforms
- Log and analyze user authentication patterns
- Set up error tracking and reporting

## Support and Maintenance

### Documentation
- Keep AGENTS.md updated with changes
- Document API endpoints and configurations
- Maintain troubleshooting guides
- Create user guides for each platform

### Version Control
- Use semantic versioning
- Tag releases appropriately
- Maintain changelog
- Create platform-specific release notes

---

## Quick Start Commands

1. **Clone and Setup**
   ```bash
   git clone <your-repo-url>
   cd expo-login-app
   npm install
   ```

2. **Configure Firebase**
   - Add your Firebase configuration to `firebase.config.js`
   - Place platform-specific config files in root directory

3. **Start Development**
   ```bash
   npx expo start
   ```

4. **Test on Platforms**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator  
   - Press `w` for web browser

This AGENTS.md file provides a comprehensive roadmap for building your cross-platform login app with Expo and Firebase. Follow the sections sequentially for the best development experience!