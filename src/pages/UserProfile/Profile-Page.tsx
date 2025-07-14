import {Profile} from "../../features/Profile/ui/Profile.tsx";
import Header from "../../widgets/Header/Header.tsx";
import Navigation from "../../widgets/Navigation/Navigation.tsx";

export default function ProfilePage() {
    
    return (

        <div>
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}