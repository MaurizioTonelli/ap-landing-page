import {AxiosError} from "axios";
import { QueryClient, UseQueryOptions, UseMutationOptions, DefaultOptions } from "react-query";

const queryConfig: DefaultOptions = {
    queries: {
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
        retry: false
    }
}

export const queryClient = new QueryClient({defaultOptions: queryConfig});

