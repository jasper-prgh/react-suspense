import wrapPromise from "./wrapPromise";

function timeoutPromise1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 2000);
    });
}

function timeoutPromise2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 4000);
    });
}

const timeoutPromiseResource1 = wrapPromise(timeoutPromise1);
const timeoutPromiseResource2 = wrapPromise(timeoutPromise2);

export {
    timeoutPromiseResource1,
    timeoutPromiseResource2,
};
