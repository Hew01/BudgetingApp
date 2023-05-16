import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
        'inter-black': require('./assets/fonts/Inter-Black.ttf'),
        'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
        'inter-extrabold': require('./assets/fonts/Inter-ExtraBold.ttf'),
        'inter-extralight': require('./assets/fonts/Inter-ExtraLight.ttf'),
        'inter-light': require('./assets/fonts/Inter-Light.ttf'),
        'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
        'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
        'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'inter-thin.': require('./assets/fonts/Inter-Thin.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    });
};