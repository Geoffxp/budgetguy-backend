export const syncCatcher = (fn) => {
    try {
        const data = fn()
        return [data, null]
    } catch (err) {
        return [null, err]
    }
}

export const asyncCatcher = async (fn) => {
    try {
        const data = await fn()
        return [data, null]
    } catch (err) {
        return [null, err]
    }
}

export const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));