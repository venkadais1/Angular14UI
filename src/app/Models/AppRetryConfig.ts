import { ObservableInput } from "rxjs";

export interface AppRetryConfig
{
    count? : number,
    delay? : number | ((error:any, retryCount: number)=> ObservableInput<any>)
    resetOnSuccess?: boolean
}