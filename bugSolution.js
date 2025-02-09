The solution involves using the `useEffect` hook and the `Dimensions` API's `addEventListener` method to listen for orientation changes.  The component re-renders when the dimensions change, ensuring accurate UI layout.

```javascript
import { Dimensions, View, StyleSheet, useLayoutEffect } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: width,
    height: height
  });

  useLayoutEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenDimensions({ width: window.width, height: window.height });
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={[styles.container, { width: screenDimensions.width, height: screenDimensions.height }]}>
      {/* UI elements using screenDimensions.width and screenDimensions.height */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default MyComponent;
```