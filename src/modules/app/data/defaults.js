module.exports = {
  idRamifications: 2,
  idResponsables: 2,
  idMembers: 2,
  ramifications: {
    [0]: {
      id: 0,
      zone: 'FRANCE',
      region: 'Picardie',
      capacity: 1,
      responsable: null,
      members: []
    },
    [1]: {
      id: 1,
      zone: 'FRANCE',
      region: 'Languedoc',
      capacity: 4,
      responsable: null,
      members: []
    },
    [2]: {
      id: 2,
      zone: 'USA',
      region: 'Californie',
      capacity: 2,
      responsable: null,
      members: []
    }
  },
  responsables: {
    [0]: {
      id: 0,
      firstName: 'Jean',
      lastName: 'Dupont',
      level: 5
    },
    [1]: {
      id: 1,
      firstName: 'Jacques',
      lastName: 'Durand',
      level: 3
    },
    [2]: {
      id: 2,
      firstName: 'Antoine',
      lastName: 'Laprise',
      level: 8
    }
  },
  members: {
    [0]: {
      id: 0,
      firstName: 'Océane',
      lastName: 'Binet',
      classe: 'B'
    },
    [1]: {
      id: 1,
      firstName: 'Claude',
      lastName: 'Bler',
      classe: 'A'
    },
    [2]: {
      id: 2,
      firstName: 'Patrice',
      lastName: 'Baron',
      classe: 'H'
    }
  }
}
