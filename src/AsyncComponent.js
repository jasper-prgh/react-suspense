import React from 'react'
import {timeoutPromiseResource1, timeoutPromiseResource2} from './Api/timeoutPromise';

export function AsyncComponent1() {
    timeoutPromiseResource1.read();

    return <div>AsyncComponent1</div>;
}

export function AsyncComponent2() {
    timeoutPromiseResource2.read();

    return <div>AsyncComponent2</div>;
}
