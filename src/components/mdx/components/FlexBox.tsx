import { type PropsWithChildren } from "react"
import React from "react"


export const FlexRow = ({children}: PropsWithChildren) => {
    return (
        <div className="flex space-x-2 w-full flex-row">
            {children}
        </div>
    )
}

export const FlexCol = ({children}:PropsWithChildren) => {
    return (
        <div className="flex space-y-2">
            {children}
        </div>
    )
}
