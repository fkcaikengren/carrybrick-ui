

import {componentSizes} from './constant'

export type TupleElemnets<T extends readonly any[]> = T[number]

export type ComponentSize = TupleElemnets<typeof componentSizes>