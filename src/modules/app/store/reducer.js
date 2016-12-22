import { handleActions } from 'redux-actions'
import { ADD_NEW_RAMIFICATION, ADD_NEW_RESPONSABLE, ADD_NEW_MEMBER, ADD_RESPONSABLE_RAMIFICATION, ADD_MEMBER_RAMIFICATION, DELETE_MEMBER_RAMIFICATION, DELETE_RESPONSABLE_RAMIFICATION } from './constants'
import data from './../data/defaults.js'

const initialState = {
  idRamifications: data.idRamifications,
  idResponsables: data.idResponsables,
  idMembers: data.idMembers,
  ramifications: data.ramifications,
  responsables: data.responsables,
  members: data.members
}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions({
  [ADD_NEW_RAMIFICATION]: (state, action) => {

    const { payload: { zone, region, capacity } } = action

    const { idRamifications } = state
    const newId = idRamifications + 1

    return {
      ...state,
      idRamifications: newId,
      ramifications: {
        ...state.ramifications,
        [newId]: {
          id: newId,
          zone: zone,
          region: region,
          capacity: capacity,
          responsable: null,
          members: null
        }
      }
    }
  },
  [ADD_NEW_RESPONSABLE]: (state, action) => {

    const { payload: { firstName, lastName, level } } = action

    const { idResponsables } = state
    const newId = idResponsables + 1

    return {
      ...state,
      idResponsables: newId,
      responsables: {
        ...state.responsables,
        [newId]: {
          id: newId,
          firstName: firstName,
          lastName: lastName,
          level: level
        }
      }
    }
  },
  [ADD_NEW_MEMBER]: (state, action) => {

    const { payload: { firstName, lastName, classe } } = action

    const { idMembers } = state
    const newId = idMembers + 1

    return {
      ...state,
      idMembers: newId,
      members: {
        ...state.members,
        [newId]: {
          id: newId,
          firstName: firstName,
          lastName: lastName,
          classe: classe
        }
      }
    }
  },
  [ADD_RESPONSABLE_RAMIFICATION]: (state, action) => {
    const { payload: { idRamification, idResponsable } } = action

    //because payload contains the id and we already know that we are about
    //to increment the value of that id, we modify only that value by one

    return {
      ...state,
      ramifications: {
        ...state.ramifications,
        [idRamification]: {
          ...state.ramifications[idRamification],
          responsable: idResponsable
        }
      }
    }
  },
  [ADD_MEMBER_RAMIFICATION]: (state, action) => {
    const { payload: { idRamification, idMember } } = action
    return {
      ...state,
      ramifications: {
        ...state.ramifications,
        [idRamification]: {
          ...state.ramifications[idRamification],
          members: [
            ...state.ramifications[idRamification].members,
            idMember
          ]
        }
      }
    }
  },
  [DELETE_MEMBER_RAMIFICATION]: (state, action) => {
    const { payload: { idRamification, idMember } } = action

    const index = state.ramifications[idRamification].members.indexOf(idMember)

    return {
      ...state,
      ramifications: {
        ...state.ramifications,
        [idRamification]: {
          ...state.ramifications[idRamification],
          members: [
            ...state.ramifications[idRamification].members.slice(0, index),
            ...state.ramifications[idRamification].members.slice(index + 1)
          ]
        }
      }
    }
  },
  [DELETE_RESPONSABLE_RAMIFICATION]: (state, action) => {
    const { payload: { idRamification, idResponsable } } = action

    return {
      ...state,
      ramifications: {
        ...state.ramifications,
        [idRamification]: {
          ...state.ramifications[idRamification],
          responsable: null
        }
      }
    }
  }
}, initialState)
