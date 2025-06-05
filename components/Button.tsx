import React from "react";
import {
    Pressable,
    PressableProps,
    StyleSheet,
    View,
    ViewStyle,
} from "react-native";
import { Typography } from "@/components/Typography";

type ButtonProps = PressableProps & {
    onPress?: () => void;
    text: string;
    style?: ViewStyle;
    shadowStyle?: object;
    textStyle?: object;
};

export function Button({
    onPress,
    text,
    textStyle,
    style,
    shadowStyle,
}: ButtonProps) {
    return (
        <View style={{ position: "relative" }}>
            <Pressable onPress={onPress} style={[styles.style, style]}>
                <Typography weight="600" style={[styles.textStyle, textStyle]}>
                    {text}
                </Typography>
            </Pressable>
            <View style={[styles.shadowStyle, shadowStyle]} />
        </View>
    );
}

const styles = StyleSheet.create({
    style: {
        width: "100%",
        padding: 15,
        borderCurve: "continuous",
        backgroundColor: "#2C9CF0",
        borderRadius: 4,
        position: "relative",
        zIndex: 10,
    },
    textStyle: {
        letterSpacing: 1,
        textAlign: "center",
    },
    shadowStyle: {
        position: "absolute",
        inset: 0,
        backgroundColor: "#0068B680",
        borderRadius: 4,
        transform: [{ translateX: 5 }, { translateY: 5 }],
        zIndex: 1,
    },
});
