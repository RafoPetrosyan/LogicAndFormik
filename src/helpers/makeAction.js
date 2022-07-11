export function makeAction(type, payload, callback) {
    return {
        type,
        payload,
        callback,
    }
}