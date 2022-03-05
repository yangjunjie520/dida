import { AnyAction, Dispatch } from 'redux'

export interface Loading {
  global: boolean
  effects: { [key: string]: boolean | undefined }
}

export interface ConnectProps {
  dispatch: Dispatch<AnyAction>
}
