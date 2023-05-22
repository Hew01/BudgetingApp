import { Center, HStack, VStack, Box, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <HStack style={{ height: 60 }} shadow={9} bg="white">
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const activeColor = options.tabBarIconActiveColor;
                const icon = options.tabBarIcon;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <VStack flex={1} key={index}>
                        <HStack>
                            <Box flex={0.5}></Box>
                            <Box
                                h={1}
                                borderBottomRadius={4}
                                flex={1}
                                bg={isFocused ? 'primary.500' : 'transparent'}
                            ></Box>
                            <Box flex={0.5}></Box>
                        </HStack>
                        <Center flex={1}>
                            <TouchableOpacity
                                accessibilityState={isFocused ? { selected: true } : {}}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                            >
                                <Center>
                                    {icon &&
                                        icon({
                                            color: activeColor,
                                            focused: isFocused,
                                            size: 0,
                                        })}
                                    <Text color="gray.500" fontSize={10}>
                                        {label}
                                    </Text>
                                </Center>
                            </TouchableOpacity>
                        </Center>
                    </VStack>
                );
            })}
        </HStack>
    );
};
