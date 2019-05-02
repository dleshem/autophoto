jQuery = typeof(jQuery) === 'undefined' ? $ : jQuery;

async function sleep(timeout) {
    await new Promise(res => setTimeout(res, timeout));
}

async function waitFor(func, timeout = 30000, pollDuration = 100) {
    while (timeout >= 0) {
        if (func()) {
            break;
        }

        const waitDuration = Math.min(timeout, pollDuration);
        await sleep(waitDuration);
        timeout -= waitDuration;
    }
}
