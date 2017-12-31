import { takeEvery, select, call, put } from 'redux-saga/effects';

import {
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const getLatestRate = currency =>
  fetch(`http://api.fixer.io/latest?base=${currency}`);

function* fetchInitialConversionRates(action) {
  try {
    let currency = action.currency;

    if (!currency) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({
        type: CONVERSION_ERROR,
        error: result.error,
      });
    } else {
      yield put({
        type: CONVERSION_RESULT,
        result,
      });
    }
  } catch (e) {
    yield put({
      type: CONVERSION_ERROR,
      error: e.message,
    });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchInitialConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchInitialConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchInitialConversionRates);
}
