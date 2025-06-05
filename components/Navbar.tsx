import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { hp, wp } from "@/utils";

export function Navbar() {
    const navigation = useNavigation();

    return (
        <>
            {/* <Menu open={isMenuOpen} closeHandler={() => setIsMenuOpen(false)} /> */}

            <View style={styles.mainContainer}>
                {/* logo */}
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../assets/images/mintix-logo.png")}
                        style={styles.logo}
                    />
                </Pressable>

                {/* profile and hamburger button   */}
                <View style={styles.container}>
                    {/* profile button */}
                    <Pressable>
                        <Image
                            style={styles.profileImg}
                            source={require("../assets/images/avatar.webp")}
                        />
                    </Pressable>

                    {/* hamburger menu */}
                    <Pressable
                        onPress={() =>
                            navigation.dispatch(DrawerActions.openDrawer())
                        }
                    >
                        <MaterialIcons name="menu" size={40} color="white" />
                    </Pressable>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        backgroundColor: "#090B0D",
        position: "relative",
    },
    logo: {},
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    profileImg: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    profileButton: {
        width: 40,
        height: 40,
    },
    hamburgerButton: {},
});
