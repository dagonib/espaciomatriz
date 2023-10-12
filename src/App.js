import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Copyright from './components/Copyright'
import HomeScreen from './screens/HomeScreen'
import CarolinaAScreen from './screens/CarolinaAScreen'
import ProjectScreen from './screens/ProjectScreen'
import OfferScreen from './screens/OfferScreen'
import WeTalkScreen from './screens/WeTalkScreen'
import PrivacyPolicy from './screens/PrivacyPolicy'

import './App.scss';
import ScrollToTop from './utilities/ScrollToTop'

const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <Navigation></Navigation>
        <main>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/inicio' component={HomeScreen} />
            <Route path='/carolina' component={CarolinaAScreen} />
            <Route path='/el-proyecto' component={ProjectScreen} />
            <Route path='/ofrezco' component={OfferScreen} />
            <Route path='/hablamos' component={WeTalkScreen} />
            <Route path='/politicaprivacidad' component={PrivacyPolicy} />
        </main>
        <Footer />
        <Copyright />
    </Router>
  )
}

export default App
