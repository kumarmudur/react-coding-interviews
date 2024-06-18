import { useEffect, useState } from "react";

import User from './user';
import './style.css';

const GitHubProfileFinder = () => {
    const [userName, SetUserName] = useState('kumarmudur');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleOnChange = event => SetUserName(event.target.value);

    const handleSubmit = () => {
        fetchGithubUserData();
    }

    const fetchGithubUserData = async () => {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        if (data) {
            setUserData(data);
            setLoading(false);
            SetUserName('');
        }
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) return <h1>Loading data! Please wait</h1>

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input 
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username"
                    value={userName}
                    onChange={handleOnChange}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    );
};

export default GitHubProfileFinder;