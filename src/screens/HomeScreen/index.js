import { Button, Center, Text } from 'native-base';
import NAVIGATION_KEY from '../../../constans/NavigationKey';
function HomeScreen({ navigation }) {
    return (
        <Center flex={1}>
            <Text mb={6}>Home Screen 🔥</Text>
            <Button onPress={() => navigation.navigate(NAVIGATION_KEY.SamplePopup)}>Open Popup</Button>
        </Center>
    );
}

export default HomeScreen;
