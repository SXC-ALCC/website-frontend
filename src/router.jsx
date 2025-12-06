import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./main";
import TeamPage from "./main_team";
import ProjectsPage from "./main_projects";
import MembershipPage from "./main_membership";
import EventsPage from "./main_events";
import ChallengesPage from "./main_challenges";




function App() {
  return (
    <div>
      

      <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/teampage" element={<TeamPage/>}/>
       <Route path="/projectspage" element={<ProjectsPage/>}/>
       <Route path="/Membershipage" element={<MembershipPage/>}/>
       <Route path="/EventsPage" element={<EventsPage/>}/>
       <Route path="/ChallengesPage" element={<ChallengesPage/>}/>

      </Routes> 
    </div>
  );
}

export default App;