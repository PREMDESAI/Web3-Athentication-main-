import { useContext, createContext, type PropsWithChildren } from 'react';
import { LOGIN_PROVIDER } from "@web3auth/react-native-sdk";
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { web3auth } from '@/services/web3auth';

const AuthContext = createContext<{
    loggedIn: boolean;
    loading: boolean;
    login: (email: string) => void;
    logout: () => void;
}>({
    loggedIn: false,
    loading: true,
    login: () => null,
    logout: () => null,
});

// This hook can be used to access the user info.
export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log('running');
        const init = async () => {
            try {
                await web3auth.init();
                console.log('init');

                if (web3auth.connected) {
                    setLoggedIn(true);
                    console.log('connected');
                    router.replace('/');
                }
            } catch (e) {
                console.error('web3auth init error', e);
            } finally {
                console.log('end');
                setLoading(false);
            }
        };
        init();
    }, []);

    const login = async (email: string) => {
        try {
            if (!web3auth.ready) {
                console.log('Web3auth not initialized');
                return;
            }

            await web3auth.login({
                loginProvider: LOGIN_PROVIDER.EMAIL_PASSWORDLESS,
                extraLoginOptions: {
                    login_hint: email,
                },
            });

            if (web3auth.connected) {
                console.log('Logged In');
                setLoggedIn(true);
                router.replace('/');
            }
        } catch (e: any) {
            console.log(e.message);
        }
    };

    const logout = async () => {
        if (!web3auth.ready) {
            console.log('Web3auth not initialized');
            return;
        }

        await web3auth.logout();

        if (!web3auth.connected) {
            console.log('Logged out');
            setLoggedIn(false);
            router.replace('/welcome');
        }
    };

    return (
        <AuthContext.Provider
            value={{
                loggedIn,
                loading,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
}

