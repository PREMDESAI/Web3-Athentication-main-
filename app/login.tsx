import { useState } from 'react';
import { useSession } from '@/contexts/session';
import { Animated, Keyboard, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { hp, wp } from '@/utils';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const { login } = useSession();

    const handleLogin = async () => {
        login(email);
    }

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    {/* background video */}
                    <BackgroundVideo />

                    {/* linear gradient */}
                    <Animated.View style={{ flex: 1 }}>
                        <LinearGradient
                            colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.4)", "black", "black"]}
                            style={styles.gradient}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 0.8 }}
                        />

                        {/* content */}
                        <View style={styles.contentContainer}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                {/* title */}
                                <Animated.Text>
                                    <Typography fontFamily="poppins" weight="600" size="3xl">
                                        Sign in
                                    </Typography>
                                </Animated.Text>

                                {/* subtitle */}
                                <Animated.Text>
                                    <Typography fontFamily="poppins" color="#C2C2C2">
                                        Login with your email—no password needed. Quick and easy!
                                    </Typography>
                                </Animated.Text>

                                {/* email input field  */}
                                <Animated.View style={styles.inputContainer}>
                                    <Label text="Email" />
                                    <Input
                                        onChangeText={setEmail}
                                        placeholder="Enter your email address"
                                        keyboardType="email-address"
                                    />

                                    <Typography size="md">
                                        We'll send you a sign-in link to your email.
                                    </Typography>
                                </Animated.View>

                                {/* login button */}
                                <Animated.View style={styles.loginButton}>
                                    <Button onPress={handleLogin} text="Continue" />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        </View>
                    </Animated.View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    gradient: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8,
        paddingHorizontal: wp(5),
        paddingVertical: hp(6),
    },
    inputContainer: {
        width: "100%",
        display: "flex",
        gap: 5,
        marginTop: hp(5),
    },
    textInput: {
        width: "100%",
        backgroundColor: "#2C9CF026",
        borderColor: "#4F5B75",
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: "white",
        fontSize: hp(2),
    },
    loginButton: {
        marginTop: hp(4),
    },
});
