import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SessionContext = createContext({ state: '' });

const SessionProvider = ({ children }: { children: React.ReactElement }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams()
    const [state, setState] = useState('');

    useEffect(() => {
        if (searchParams.get("state")) {
            setState((searchParams.get("state")??"").toString());
        }
    }, [searchParams]);

    return (
        <SessionContext.Provider value={{ state }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => useContext(SessionContext);

export default SessionProvider;