import { Switch, Route } from 'react-router-dom'
import About from './pages/about'
import Blogs from './pages/blogs'
import Contact from './pages/contact'

const Routes = () => {
  return (
    <Switch>
      <Route path="/blogs" exact>
        <Blogs />
      </Route>
      <Route path="/blogs" exact>
        <Blogs />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/">
        <About />
      </Route>
    </Switch>
  )
}
export default Routes
