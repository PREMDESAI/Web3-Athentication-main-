import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { hp } from "@/utils";
import { Typography } from "@/components/Typography";

type DropdownProps<T> = {
    options?: T[];
    placeholder?: string;
    defaultValue?: T | null;
    onChange?: (selectedOption: T) => void;
    isLoading?: boolean;
    isError?: boolean;
    onRetry?: () => void;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    style?: object;
    getOptionLabel?: (option: T) => string;
    getOptionValue?: (option: T) => string | number;
};

export function Dropdown<T>({
    options = [],
    placeholder = "Select an option",
    defaultValue = null,
    onChange,
    isLoading = false,
    isError = false,
    onRetry,
    iconLeft,
    iconRight,
    style,
    getOptionLabel = (option) => String(option),
    getOptionValue = (option) => String(option),
}: DropdownProps<T>) {
    const [selectedValue, setSelectedValue] = useState<T | null>(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (defaultValue) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    const handleSelect = (option: T) => {
        setSelectedValue(option);
        setIsOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    const handleOutsidePress = () => {
        setIsOpen(false);
    };

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setIsOpen(!isOpen)}
                activeOpacity={0.8}
            >
                {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
                <Typography
                    size="sm"
                    fontFamily="poppins"
                    weight="500"
                    style={styles.text}
                >
                    {selectedValue
                        ? getOptionLabel(selectedValue)
                        : placeholder}
                </Typography>
                {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
            </TouchableOpacity>

            {isOpen && (
                <View style={styles.dropdownMenu}>
                    {isLoading ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    ) : isError ? (
                        <View style={[styles.errorContainer]}>
                            {/* Minimum height for error */}
                            <Typography style={styles.errorText}>
                                Failed to load options.
                            </Typography>
                            {onRetry && (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={onRetry}
                                    style={styles.retryButton}
                                >
                                    <Text style={styles.retryText}>Retry</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    ) : (
                        <FlatList
                            data={options}
                            keyExtractor={(item) =>
                                getOptionValue(item).toString()
                            }
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleSelect(item)}
                                    activeOpacity={0.8}
                                >
                                    <Typography
                                        size="sm"
                                        style={styles.optionText}
                                    >
                                        {getOptionLabel(item)}
                                    </Typography>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    dropdown: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#182737",
        borderWidth: 1,
        borderColor: "#2C9CF0",
        borderRadius: 4,
        paddingVertical: hp(1.8),
        paddingHorizontal: hp(1.5),
    },
    text: {
        flex: 1,
        marginHorizontal: 10,
    },
    iconLeft: {
        marginRight: 5,
    },
    iconRight: {
        marginLeft: 5,
    },
    dropdownMenu: {
        width: "100%",
        backgroundColor: "#141316",
        borderWidth: 1,
        borderColor: "#2C9CF050",
        borderRadius: 4,
        marginTop: 5,
        maxHeight: hp(25),
        position: "absolute",
        zIndex: 1000,
        top: 50,
    },
    option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff20",
    },
    optionText: {
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    errorContainer: {
        alignItems: "center",
        padding: 15,
        minHeight: hp(8),
        width: "100%",
    },
    errorText: {
        fontSize: hp(2),
        color: "white",
        marginBottom: 10,
    },
    retryButton: {
        backgroundColor: "#4F5B75",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 4,
    },
    retryText: {
        color: "#FFFFFF",
        fontSize: hp(2),
    },
    loadingContainer: {
        alignItems: "center",
        justifyContent: "center",
        minHeight: hp(8),
        width: "100%",
    },
});
