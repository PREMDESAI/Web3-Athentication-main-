import React from "react";
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
    TextStyle,
    StyleProp,
} from "react-native";
import { hp } from "@/utils";

type InputFieldProps = {
    isError?: boolean;
    isDisabled?: boolean;
    style?: ViewStyle;
    inputStyle?: StyleProp<TextStyle>;
    icon?: React.ReactNode;
    placeholderTextColor?: string;
};

export function Input({
    style,
    isDisabled,
    isError = false,
    icon,
    inputStyle,
    placeholderTextColor,
    ...props
}: InputFieldProps & TextInputProps) {
    return (
        <View
            style={[
                styles.container,
                isError && styles.error,
                isDisabled && styles.disabled,
                style,
            ]}
        >
            {icon && <View style={styles.icon}>{icon}</View>}
            <TextInput
                {...props}
                editable={!isDisabled}
                style={[styles.input, inputStyle, icon ? styles.inputWithIcon : undefined]}
                placeholderTextColor={placeholderTextColor ?? "white"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#182737",
        borderColor: "#2C9CF0",
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        paddingVertical: hp(1.8),
        paddingHorizontal: hp(1.8),
        color: "white",
        fontSize: hp(2),
        fontFamily: "Poppins_400Regular",
    },
    inputWithIcon: {
        paddingLeft: 0,
    },
    icon: {
        marginRight: 10,
    },
    disabled: {
        backgroundColor: "#E0E0E0",
    },
    error: {
        borderColor: "#FF4D4F",
    },
});
