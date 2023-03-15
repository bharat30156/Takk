import React from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext();



function DataProvider({children}) {
    const [communityInfo, setCommunityInfo] = useState()
  return (
    <DataContext.Provider value={{communityInfo, setCommunityInfo}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider