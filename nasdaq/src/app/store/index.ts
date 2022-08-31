
import { IContext } from 'overmind'
import {
    createStateHook,
    createActionsHook,
    createEffectsHook,
    createReactionHook
} from 'overmind-react'
import { namespaced } from 'overmind/config'
import * as stocks from './stocks/stocksIndex'
// import * as stockDetails from './stockDetails/stockDetailsIndex'

export const config = namespaced({
    stocks,
    // stockDetails
})


export type Context = IContext<typeof config>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useEffects = createEffectsHook<Context>()
export const useReaction = createReactionHook<Context>()