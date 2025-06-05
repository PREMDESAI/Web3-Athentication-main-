import { Dropdown } from '@/components/Dropdown';
import { Input } from '@/components/Input';
import { Navbar } from '@/components/Navbar';
import { Typography } from '@/components/Typography';
import { useSession } from '@/contexts/session';
import { hp, wp } from '@/utils';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const FILTER_OPTIONS = {
    Active: "active",
    Inactive: "inactive",
};

export default function Index() {
    const { logout } = useSession();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar />
            <View style={styles.parentContainer}>
                {/* filters */}
                <View>
                    {/* label */}
                    <Typography fontFamily="poppins" weight="500">
                        Active Events
                    </Typography>

                    {/* input | filter */}
                    <View style={styles.filterSearchContainer}>
                        {/* input */}
                        <Input
                            // icon={<MaterialIcons name="search" size={20} color="#fff" />}
                            placeholder="Search Event name"
                            style={{ flex: 5, marginRight: wp(2) }}
                            inputStyle={{ fontSize: hp(1.5) }}
                        />

                        {/* filters */}
                        <Dropdown
                            options={Object.keys(FILTER_OPTIONS)}
                            // iconLeft={
                            //   <MaterialIcons name="filter-list" size={20} color="#fff" />
                            // }
                            placeholder="Filters"
                            style={{ flex: 3 }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: "#141316",
        paddingVertical: hp(2),
        paddingHorizontal: wp(5),
        display: "flex",
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginVertical: 20,
    },
    filterSearchContainer: {
        width: "100%",
        marginTop: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    childBox: {
        flex: 1,
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
});
