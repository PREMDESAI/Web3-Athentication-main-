import { router, Stack } from 'expo-router';
import { Animated, SafeAreaView, View, StyleSheet } from 'react-native';
import { hp, wp } from '@/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { LogoAnimation } from '@/components/LogoAnimation';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';


//<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//    <Text> Welcome index </Text>
//    <Button
//        onPress={() => router.replace('/login')}
//        title="Continue"
//    />
//</View>
export default function SignIn() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* background video */}
                    <BackgroundVideo />

                    {/* linear gradient */}
                    <Animated.View style={{ flex: 1 }}>
                        <LinearGradient
                            colors={[
                                "rgba(0,0,0,0.2)",
                                "rgba(0,0,0,0.4)",
                                "black",
                                "black",
                            ]}
                            style={styles.gradient}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 0.8 }}
                        />
                        {/* content */}

                        <View style={styles.contentContainer}>
                            {/* logo */}
                            <Animated.Text>
                                <LogoAnimation />
                            </Animated.Text>

                            {/* title */}
                            <Animated.Text>
                                <Typography
                                    size="2xl"
                                    fontFamily="poppins"
                                    weight="600"
                                >
                                    Welcome to MetaTicket!
                                </Typography>
                            </Animated.Text>

                            {/* subtitle */}
                            <Animated.Text style={styles.subtitle}>
                                <Typography color="#C2C2C2" fontFamily="poppins">
                                    Please login to scan and let the event begin!
                                </Typography>
                            </Animated.Text>

                            {/* login button */}
                            <Animated.View style={{ width: "100%" }}>
                                <Button
                                    text="Log In"
                                    //onPress={() => navigation.navigate("auth")}
                                    onPress={() => router.replace('/login')}
                                />
                            </Animated.View>
                        </View>
                    </Animated.View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "black",
    },
    gradient: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 14,
        paddingHorizontal: wp(5),
        paddingVertical: hp(6),
    },
    subtitle: {
        marginBottom: hp(6),
        maxWidth: wp(60),
        textAlign: "center",
    },
});
