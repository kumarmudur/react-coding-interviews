import { createContext, useEffect, useState } from "react";

import featureFlagsDataServiceCall from '../data';

export const FeatureFlagsContext = createContext(null);

const FeatureFlagsGlobalState = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    const fetchFeatureFlags = async () => {
        try {
            setLoading(true);
            const response = await featureFlagsDataServiceCall();
            setEnabledFlags(response);
            setLoading(false);
            console.log('response', response)
        } catch (error) {
           console.log(error);
           setLoading(false);
           throw new Error(error);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    return <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>{children}</FeatureFlagsContext.Provider>
};

export default FeatureFlagsGlobalState;