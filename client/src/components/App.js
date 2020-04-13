import React, { Component, Suspense, lazy } from "react";
import { Router } from "@reach/router";
// Styling
import "../utilities.css";
import "./App.css";
import Heart from "@bit/joshk.react-spinners-css.heart";
// Pages
const NotFound = lazy(()=>import("./pages/NotFound.js"));
const Homepage = lazy(()=>import("./pages/Homepage.js"));
const SignIn = lazy(()=>import("./pages/SignIn.js"));
const Register = lazy(()=>import("./pages/Register.js"));
const Resources = lazy(()=>import("./pages/Resources.js"));
const FAQ = lazy(()=>import("./pages/FAQ.js"));
const WhoWeAre = lazy(()=>import("./pages/WhoWeAre.js"));
const Contact = lazy(()=>import("./pages/Contact.js"));
const FindATutor = lazy(()=>import("./pages/FindATutor.js"));
const Profile = lazy(()=>import("./pages/Profile.js"));
const ProtectedPage = lazy(()=>import("./modules/ProtectedPage.js"));
const NavBar = lazy(()=> import("./modules/NavBar.js"))

// Providers 
import UserProvider from "../providers/UserProvider";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component

  render() {
    const loading_component =
      (<table id="wrapper">
        <tr>
          <td><Heart color={"#F2BE32"}/></td>
        </tr>
      </table>)
    return (
      <div className="App Fade">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <UserProvider>
          <Suspense fallback={<div/>}>
            <NavBar />
          </Suspense>
           {/* "primary={false}" breaks an accessibility feature of reach router that allows screen readers to work
           https://stackoverflow.com/questions/53058110/stop-reach-router-scrolling-down-the-page-after-navigating-to-new-page*/}
           <Suspense fallback={loading_component}>
             <Router primary={false} basepath="/">
               <Homepage path="/"/>
               <Resources path="/resources" />
               <SignIn path="/auth" />
               <Register path="/register" />
               <FAQ path="/faq" />
               <WhoWeAre path="/whoweare" />
               <Contact path="/contact" />
               <ProtectedPage path="/findatutor" component={FindATutor}/>
               <ProtectedPage path="/profile" component={Profile}/>
               <NotFound default/>
             </Router>
           </Suspense>

        </UserProvider>
      </div>
    );
  }
}

export default App;
