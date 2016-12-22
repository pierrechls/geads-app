import { ADD_NEW_RAMIFICATION, ADD_NEW_RESPONSABLE, ADD_NEW_MEMBER, ADD_RESPONSABLE_RAMIFICATION, ADD_MEMBER_RAMIFICATION, DELETE_MEMBER_RAMIFICATION, DELETE_RESPONSABLE_RAMIFICATION } from './constants'

export const newRamification = (zone, region, capacity) => {
  return {
    type: ADD_NEW_RAMIFICATION,
    payload: {
      zone,
      region,
      capacity
    }
  }
}

export const newResponsable = (firstName, lastName, level) => {
  return {
    type: ADD_NEW_RESPONSABLE,
    payload: {
      firstName,
      lastName,
      level
    }
  }
}

export const newMember = (firstName, lastName, classe) => {
  return {
    type: ADD_NEW_MEMBER,
    payload: {
      firstName,
      lastName,
      classe
    }
  }
}

export const addResponsableIntoARamification = (idRamification, idResponsable) => {
  return {
    type: ADD_RESPONSABLE_RAMIFICATION,
    payload: {
      idRamification,
      idResponsable
    }
  }
}

export const addMemberIntoARamification = (idRamification, idMember) => {
  return {
    type: ADD_MEMBER_RAMIFICATION,
    payload: {
      idRamification,
      idMember
    }
  }
}

export const deleteMemberFromARamification = (idRamification, idMember) => {
  return {
    type: DELETE_MEMBER_RAMIFICATION,
    payload: {
      idRamification,
      idMember
    }
  }
}

export const deleteResponsableFromARamification = (idRamification, idResponsable) => {
  return {
    type: DELETE_RESPONSABLE_RAMIFICATION,
    payload: {
      idRamification,
      idResponsable
    }
  }
}
