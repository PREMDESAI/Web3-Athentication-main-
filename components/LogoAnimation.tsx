import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { wp } from "@/utils";

export function LogoAnimation() {
    return (
        <View>
            <Image
                source={require("../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.img}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: wp(50),
        height: wp(50),
    },
});
