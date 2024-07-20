import { isEmpty, has } from 'lodash';

export const STATE = {
    idle: 'idle',
    loading: 'loading',
    empty: 'empty',
    success: 'success',
    error: 'error'
}

export function specifyState({ data, isLoading = false, isFetching = false,
    isSuccess = false, isError = false }) {
    if (isLoading || isFetching) return STATE.loading;
    if (isError) return STATE.error
    if (isSuccess && (has(data, 'items') ? isEmpty(data?.items) : isEmpty(data))) return STATE.empty
    if (isSuccess) return STATE.success
    return STATE.idle
}

export default function StateManager({ idleState, emptyState, errorState, loadingState, successState, state = STATE.success, successIsIdle = true, ...props }) {
    if (state === STATE.error) return errorState;
    if (state === STATE.loading) return loadingState;
    if (state === STATE.empty) return emptyState;
    if (!successIsIdle && state === STATE.success) return successState;
    if (state === STATE.idle) return idleState ?? props?.children;
    if (state === STATE.success) return props?.children;
    return <>
    </>
}
