import {rtkApi} from "@/api/RtkApi";
import {AxiosInstance} from "axios";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";
import {FiltersSliceSchema} from "@/store/reducers/FiltersSliceSchema";

export interface StateSchema {
    user: UserSliceSchema;
    filters: FiltersSliceSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}