import { Redirect, Stack } from 'expo-router';

import { useSession } from '@/contexts/session';
import { LoadingPage } from '@/components/LoadingAnimation';

export default function AppLayout() {
    const { loggedIn, loading } = useSession();
    if (loading) {
        return <LoadingPage />;
    }

    if (!loggedIn) {
        return <Redirect href="/welcome" />;
    }

    return <Stack screenOptions={{ headerShown: false }} />;
}

