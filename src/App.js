import React from 'react'
import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

const Home = () =>{
    return(
        <div className='container'>
            <h1>Home</h1>
        </div>
    )
}

function App (){


    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Generos' exact component={Generos} />
                    <Route path='/Generos/novo' exact component={NovoGenero} />
                    <Route path='/Generos/:id' exact component={EditarGenero} />
                    <Route path='/Series' exact component={Series} />
                    <Route path='/Series/novo' exact component={NovaSerie} />
                    <Route path='/Series/:id' exact component={InfoSerie} />
                </Switch>
                
            </div>
        </Router>
    );
}
export default App;