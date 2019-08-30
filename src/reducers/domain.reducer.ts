import { State } from '../../type'
import { DomainAction } from '../../type/domain'

import {
  ADD_SECRET,
  FETCH_SECRET_REQUEST,
  FETCH_SECRET_SUCCESS,
  FETCH_SECRET_FAILURE,
  FETCH_SECRETS_REQUEST,
  FETCH_SECRETS_SUCCESS,
  FETCH_SECRETS_FAILURE
} from '../constants/domain.constant'

const initialState: State['domain'] = {
  lastSecretId: undefined,
  secrets: {
    data: [],
    loading: false,
    error: undefined
  }
}

const domain = (state: State['domain'] = initialState, action: DomainAction): State['domain'] => {
  switch (action.type) {
    case ADD_SECRET: {
      return {
        ...state,
        lastSecretId: action.payload
      }
    }
    case FETCH_SECRET_REQUEST: {
      return {
        ...state,
        secrets: {
          ...state.secrets,
          data: [],
          loading: true,
          error: undefined
        }
      }
    }
    case FETCH_SECRET_SUCCESS: {
      return {
        ...state,
        secrets: {
          ...state.secrets,
          data: [...state.secrets.data, action.payload],
          loading: false,
          error: undefined
        }
      }
    }
    case FETCH_SECRET_FAILURE: {
      return {
        ...state,
        secrets: {
          ...state.secrets,
          loading: false,
          error: action.payload
        }
      }
    }
    case FETCH_SECRETS_REQUEST: {
      return {
        ...state,
        secrets: {
          ...state.secrets,
          data: [],
          loading: true,
          error: undefined
        }
      }
    }
    case FETCH_SECRETS_SUCCESS: {
      return {
        ...state,
        secrets: {
          ...state.secrets,
          data: [...state.secrets.data, ...action.payload],
          loading: false,
          error: undefined
        }
      }
    }
    case FETCH_SECRETS_FAILURE: {
      return {
        ...state,
        secrets: {
          ...state.secrets,
          loading: false,
          error: action.payload
        }
      }
    }
    default: {
      return state
    }
  }
}

export default domain
