import {
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CHANGE_CURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, { currency: state.baseCurrency }),
      };
    case SWAP_CURRENCY:
      const { baseCurrency, quoteCurrency } = state;

      return {
        ...state,
        baseCurrency: quoteCurrency,
        quoteCurrency: baseCurrency,
      };
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      };
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };
    case CONVERSION_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
