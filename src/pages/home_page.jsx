import React, { useState, useEffect  } from 'react';
import SideBar from '../components/sidebar';
import '../styles/home_page.css';
const HomePage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        

        if (!userId) {
            navigate('/login');
            return;
        }

        fetch(`http://localhost:5173/api/projects?user_id=${userId}`) // Replace with your API endpoint
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
            });
    }, []);
return(
    <div>
    <SideBar/>

    <div className="container">
        <div className="calories" value={userData.calories}>
            <span className="progress-value">0%</span>
        </div>
        <span class="text">Calories</span>
    </div>

    <div className="right-menu">
        <h1>Day </h1>

        <label for="water">Water:</label><br></br>
        <meter id="water" value={userData.water} min="0" max="100"></meter><br></br>

        <label for="proteins">Proteins:</label><br></br>
        <meter id="proteins" value={userData.proteins} min="0" max="100"></meter><br></br>

        <label for="carbs">Carbs:</label><br></br>
        <meter id="carbs"  value={userData.carbs} min="0" max="100"></meter><br></br>

        <label for="fats">Fats:</label><br></br>
        <meter id="fats" value={userData.fats} min="0" max="100"></meter><br></br>
    </div>
</div>
);
};

      export default HomePage;