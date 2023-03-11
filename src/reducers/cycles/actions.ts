import { Cycles } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_ACTIVE_CYCLE_AS_FINISHED = 'MARK_ACTIVE_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycles) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCyclesAsFinishedAction() {
  return {
    type: ActionTypes.MARK_ACTIVE_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
