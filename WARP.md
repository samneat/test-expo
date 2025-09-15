# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React Native project built with **Expo SDK 54** using **expo-router** for file-based routing. The app uses TypeScript and includes both iOS and Android support, with experimental support for React Compiler and typed routes.

**Note**: There is an AGENTS.md file that contains planning for a Firebase Authentication login app. This may represent future development plans or a different project vision than the current codebase state.

### Key Architecture Details

- **Framework**: React Native (0.81.4) with Expo (54.0.7)
- **Routing**: File-based routing using expo-router with nested tab navigation
- **Navigation Stack**: Root layout with tabs containing Home and Explore screens, plus a modal screen
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to project root)
- **Theming**: Built-in light/dark mode support with themed components and color schemes
- **Animation**: Uses react-native-reanimated for animations and haptic feedback
- **Experimental Features**: React Compiler and typed routes are enabled

### Project Structure

```
app/                    # File-based routing (expo-router)
├── (tabs)/            # Tab group with nested routes
│   ├── _layout.tsx    # Tab navigator configuration
│   ├── index.tsx      # Home screen
│   └── explore.tsx    # Explore screen
├── _layout.tsx        # Root layout with navigation provider
└── modal.tsx          # Modal screen

components/            # Reusable UI components
├── ui/               # Core UI components (icons, collapsible)
├── themed-text.tsx   # Text with automatic theming
├── themed-view.tsx   # View with automatic theming
└── [other components]

constants/
└── theme.ts          # Color schemes and font definitions

hooks/                # Custom React hooks
├── use-color-scheme.ts    # Color scheme detection
└── use-theme-color.ts     # Theme color utilities
```

## Common Development Commands

### Development
```bash
# Start development server
npm start
# or
expo start

# Start for specific platform
npm run ios        # Start iOS simulator
npm run android    # Start Android emulator  
npm run web        # Start web version

# Reset project to blank state (removes example code)
npm run reset-project
```

### Code Quality
```bash
# Lint code
npm run lint
# or
expo lint

# TypeScript type checking
npx tsc --noEmit
```

### Expo-specific Commands
```bash
# Install dependencies and configure
npx expo install

# Run on device/simulator
npx expo run:ios
npx expo run:android

# Build for production
npx expo build
```

## Key Development Patterns

### File-based Routing
- Routes are defined by file structure in the `app/` directory
- Use `(tabs)` for grouped tab routes
- `_layout.tsx` files define layout components for route segments
- The root `_layout.tsx` configures navigation theme and global settings

### Theming System
- Use `ThemedText` and `ThemedView` components for consistent theming
- Colors are defined in `constants/theme.ts` with light/dark variants
- Hook into theme with `useColorScheme()` and `useThemeColor()`
- Platform-specific fonts available via `Fonts` export

### Navigation Structure
- Root Stack Navigator contains:
  - Tab Navigator (hidden header)
  - Modal screen with presentation style
- Tab Navigator has Home and Explore tabs with haptic feedback
- Use `expo-router` Link components or router.push/replace for navigation

### Component Organization
- Themed components in root `components/` directory
- UI primitives in `components/ui/`
- Custom hooks in dedicated `hooks/` directory
- All imports use `@/` alias for cleaner paths

## Development Notes

- **New Architecture**: Enabled with `"newArchEnabled": true` in app.json
- **Web Support**: Configured for static output with favicon support
- **Icons**: Uses expo-symbols for iOS SF Symbols and custom fallbacks
- **Splash Screen**: Configured with light/dark variants
- **TypeScript**: Strict mode enabled - maintain type safety
- **React Compiler**: Experimental feature enabled for performance optimization

## Development Workflow

### Current Project State
The codebase is currently a standard Expo template with:
- Tab navigation (Home and Explore screens)
- Basic theming system
- Example components and screens
- No authentication system implemented

### Planned Features (from AGENTS.md)
The AGENTS.md file indicates plans for:
- Firebase Authentication integration
- Login/signup screens
- Cross-platform authentication flow
- User profile management

### Development Process
1. **Planning**: Use AGENTS.md for comprehensive project planning
2. **Implementation**: Follow the file-based routing patterns already established
3. **Testing**: Test across iOS, Android, and web platforms
4. **Integration**: Add Firebase or other services as planned

## Testing and Debugging

The project includes standard React Native debugging tools:
- Use Expo Dev Tools for debugging
- Metro bundler for code reloading
- React DevTools support
- Remote debugging available

### Platform Testing
```bash
# Test on specific platforms
npm run ios        # iOS Simulator
npm run android    # Android Emulator
npm run web        # Web Browser

# Or use Expo CLI interactive mode
expo start
# Then press 'i' for iOS, 'a' for Android, 'w' for web
```

## Future Development

Based on AGENTS.md, the project may evolve to include:
- **Authentication**: Firebase Auth with email/password
- **Navigation**: Auth-based conditional navigation
- **Security**: Input validation and secure authentication flows
- **Platforms**: Enhanced iOS, Android, and web support
- **UI/UX**: Consistent design across all platforms

### Migration Path
To implement the planned features from AGENTS.md:
1. Install Firebase dependencies
2. Set up authentication context
3. Create login/signup screens using existing theming system
4. Replace tab navigation with auth-conditional navigation
5. Add form validation and error handling
