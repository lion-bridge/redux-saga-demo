import { put, takeEvery, all } from 'redux-saga/effects';
import { action } from '../main'

function* hello() {
    yield console.log('hello saga');
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    yield delay(1000);
    // yield put(action('INCREMENT'));// 这样会导致每次+2
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        hello()
    ])
}