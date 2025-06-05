import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { hp } from "@/utils";

export type TypographyProps = TextProps & {
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    weight?: "400" | "500" | "600" | "700";
    fontFamily?: "inter" | "poppins" | "conthrax";
    style?: object;
    children?: React.ReactNode;
    color?: string;
};

const fontFamilies = {
    inter: {
        "200": "Inter_18pt-Thin",
        "300": "Inter_18pt-Light",
        "400": "Inter_18pt-Regular",
        "500": "Inter_18pt-Medium",
        "600": "Inter_18pt-SemiBold",
        "700": "Inter_18pt-Bold",
    },
    poppins: {
        "300": "Poppins-Light",
        "400": "Poppins-Regular",
        "500": "Poppins-Medium",
        "600": "Poppins-SemiBold",
        "700": "Poppins-Bold",
        "800": "Poppins-ExtraBold",
    },
    conthrax: {
        "400": "conthrax",
    },
};

export function Typography({
    size = "md",
    weight = "400",
    fontFamily = "inter",
    style,
    color = "white",
    children,
    ...props
}: TypographyProps) {
    const appliedFont =
        fontFamilies[fontFamily]?.[weight] || fontFamilies[fontFamily]["400"];

    return (
        <Text
            {...props}
            style={[
                styles[size],
                {
                    color,
                    fontFamily: appliedFont,
                    fontWeight: weight,
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    xs: {
        fontSize: hp(1.5),
    },
    sm: {
        fontSize: hp(1.8),
    },
    md: {
        fontSize: hp(2),
    },
    lg: {
        fontSize: hp(2.5),
    },
    xl: {
        fontSize: hp(3),
    },
    "2xl": {
        fontSize: hp(3.5),
    },
    "3xl": {
        fontSize: hp(4),
    },
});
