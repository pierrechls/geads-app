import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'scroll'
  }
})

import Home from './Views/Home';

import RamificationsManager from './Views/Ramifications/RamificationsManager';
import AddRamification from './Views/Ramifications/AddRamification';
import EditRamification from './Views/Ramifications/EditRamification';

import ResponsablesManager from './Views/Responsables/ResponsablesManager';
import AddResponsable from './Views/Responsables/AddResponsable';

import MembersManager from './Views/Members/MembersManager';
import AddMember from './Views/Members/AddMember';


const App = (props) => {

  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={ Home } title="GeadsApp" initial={ true } />

        <Scene key="RamificationsManager" component={ RamificationsManager } title="Ramifications" />
        <Scene key="EditRamification" component={ EditRamification } title="Modifier une ramification" />
        <Scene key="AddRamification" component={ AddRamification } title="Ajouter une ramification" />

        <Scene key="ResponsablesManager" component={ ResponsablesManager } title="Responsables" />
        <Scene key="AddResponsable" component={ AddResponsable } title="Ajouter un responsable" />

        <Scene key="MembersManager" component={ MembersManager } title="Membres" />
        <Scene key="AddMember" component={ AddMember } title="Ajouter un membre" />
      </Scene>
    </Router>
  )
}

App.displayName = 'App'

export default App
