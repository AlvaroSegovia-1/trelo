/* eslint-disable react/react-in-jsx-scope */
import { FC, useReducer } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './uiReducer'

export interface UIState {
  sidemenuOpen: boolean
  isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false
}

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        // Methods
        closeSideMenu,
        openSideMenu,
        setIsAddingEntry
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
