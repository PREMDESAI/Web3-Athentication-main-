import { hp } from "@/utils";
import React from "react";
import { StyleSheet } from "react-native";
import { Typography } from "@/components/Typography";

type LabelProps = {
    text: string;
    style?: Object;
};

export function Label({ text, style }: LabelProps) {
    return (
        <Typography weight="500" style={[style]}>
            {text}
        </Typography>
    );
}
