# React Native Dimensions API Orientation Change Issue

This repository demonstrates a common issue with the `Dimensions` API in React Native. The problem arises when the application doesn't update its layout correctly after a device orientation change. The `Dimensions` API doesn't automatically update, causing UI elements to be rendered using the incorrect dimensions.

## Bug Description
The `Dimensions.get('window')` method returns an object containing screen width and height. However, when the screen rotates, the values returned remain the same unless the component is remounted.  This results in UI misalignment or rendering issues.

## Solution
This bug is solved by using the `Dimensions` API in conjunction with the `useEffect` hook and the `onLayout` event. By adding an event listener, the component is updated when the screen is resized and the application correctly re-renders with the new dimensions.