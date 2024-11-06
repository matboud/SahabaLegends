import 'react-native-gesture-handler/jestSetup';

// Mocks for native modules
jest.mock('react-native-gesture-handler', () => {
  const gestureHandler = jest.requireActual('react-native-gesture-handler');

  return {
    ...gestureHandler,
    // Mock other components if necessary
    GestureHandlerRootView: jest.fn(({ children }) => children),
  };
});