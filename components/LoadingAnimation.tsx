import React from "react";
import { StyleSheet, View } from "react-native";
import { LogoAnimation } from "@/components/LogoAnimation";

export function LoadingPage() {
    return (
        <View style={styles.container}>
            <LogoAnimation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#141316",
        position: "absolute",
        inset: 0,
        zIndex: 100,
    },
});
