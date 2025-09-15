# Expo Router Starter Template

This is a starter project for building cross-platform applications with Expo Router. It includes a collection of pre-built components, hooks, and a foundational structure to help you get started quickly.

The entire codebase is documented with JSDoc comments to ensure clarity and ease of use.

## Project Structure

The project is organized into the following directories:

- **`app/`**: Contains all the screens and navigation logic, powered by Expo Router.
  - **`(tabs)/`**: Defines the tab-based navigation, including the layout and individual screens.
  - **`_layout.tsx`**: The root layout for the entire application.
  - **`modal.tsx`**: An example of a modal screen.
- **`components/`**: Reusable UI components used throughout the application.
  - **`ui/`**: Smaller, more generic UI elements.
- **`constants/`**: Global constants, such as theme colors and fonts.
- **`hooks/`**: Custom React hooks for managing state and logic.
- **`assets/`**: Static assets like images and fonts.

## Getting Started

Follow these steps to get the project running on your local machine.

### 1. Install Dependencies

First, ensure you have Node.js and npm installed. Then, install the project dependencies:

```bash
npm install
```

### 2. Start the Development Server

To start the Expo development server, run:

```bash
npx expo start
```

This will open the Expo developer tools in your terminal. From here, you can:

- Press `i` to open the app in the **iOS Simulator**.
- Press `a` to open the app in the **Android Emulator**.
- Press `w` to open the app in your **web browser**.
- Scan the QR code with the **Expo Go** app on your physical device.

## Core Features & Components

This starter template includes a variety of pre-built features and components to accelerate your development process.

### Themed Components

The components in `components/themed-text.tsx` and `components/themed-view.tsx` automatically adapt to the system's light or dark mode.

- **`ThemedText`**: A text component that uses theme-based colors.
- **`ThemedView`**: A view component with a theme-based background color.

### Custom Hooks

- **`useColorScheme()`**: A hook to get the current color scheme ('light' or 'dark'). It's adapted for web to handle server-side rendering.
- **`useThemeColor(props, colorName)`**: A hook to resolve colors from the theme. It can take direct `light` and `dark` color props as an override.

### UI Components

- **`Collapsible`**: An accordion-style component to show and hide content.
- **`ExternalLink`**: A link component that opens URLs in an in-app browser on native platforms and a new tab on the web.
- **`IconSymbol`**: A component that displays native SF Symbols on iOS and falls back to Material Icons on Android and web.
- **`ParallaxScrollView`**: A scroll view with a parallaxing header image effect.

## Resetting the Project

If you want to start from a clean slate while preserving the starter code as an example, you can run:

```bash
npm run reset-project
```

This script will:
1. Rename the current `app` directory to `app-example`.
2. Create a new, empty `app` directory.

This allows you to build your own application from scratch without losing the examples provided in this template.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- **[Expo Documentation](https://docs.expo.dev/)**: The official documentation for the Expo framework.
- **[Expo Router](https://docs.expo.dev/router/introduction/)**: Learn how to handle navigation with file-based routing.
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: For creating powerful animations.
- **[Expo Symbols](https://docs.expo.dev/versions/latest/sdk/symbols/)**: For using native SF Symbols on iOS.

## Community & Support

- **[Discord Community](https://chat.expo.dev)**: Join the official Expo Discord to chat with other developers.
- **[Expo on GitHub](https://github.com/expo/expo)**: Report issues or contribute to the Expo platform.
