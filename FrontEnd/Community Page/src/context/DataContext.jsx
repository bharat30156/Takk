import React from 'react'
import { createContext, useState } from 'react'

const DataContext = createContext();

function DataProvider({children}) {
    const [data, setData] = useState()
  return (
    <DataContext.Provider value={{data, setData}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider