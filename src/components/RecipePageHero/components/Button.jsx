import  { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import useSWR from 'swr';

function FavoriteButton(props) {

    console.log(props)

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);


    // IF USER IS NOT IN LOCAL STORAGE, ASKED TO LOG IN INSTEAD
    if (user === null) {
        return (
            <p>
                <a href="/login">Log in to favorite this recipe!</a>
            </p>);
    }
    return <FindInitialState userId={user.user_id} recipeId={props.recipeId}/>
}

function FindInitialState(props) {

    let favBool;

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR(`/api/users/${props.userId}/recipes/${props.recipeId}`, fetcher)
    
    console.log("This user has this recipe favorited?", data)
    if (error) return <div>failed to load</div>
    if (data === undefined) return <div>loading...</div>

    favBool = data;

    return <SetStateAndToggle favBool={favBool} userId={props.userId} recipeId={props.recipeId}/>
}

function SetStateAndToggle(props) {
    const [favorite, setFavorite] = useState(props.favBool);


    // this toggles my button
    const toggleFavorite = (recipeId) => {
        // const clickedRecipe = target.value; //don't need target as argument either??

        // this sets the state for my selected recipes (adds/ removes)
        setFavorite((favorite) => {
          if (favorite == true) {
            console.log("I clicked unfavorite")
            console.log(props)
            fetch(`/api/users/${props.userId}/recipes/${recipeId}/remove`, { method: 'PATCH' })
            .then(console.log("This was a favorited recipe, but now it isnt!"));

          }
          if (favorite == false) {
            console.log("I clicked favorite")
            fetch(`/api/users/${props.userId}/recipes/${recipeId}/add`, { method: 'PATCH' })
            .then(console.log("This was not a favorited recipe. Now it is!"));
          }
          return !favorite;
        });
    }
    const location = useLocation();
    return (
        <Link to={`/favorite/${id}`} state={{ from: location }}>
        <button
            onClick={() => toggleFavorite(props.recipeId)}
            key={props.recipeId}>
            
        { favorite === true ? "Remove from Favorite" : "Add to Favorite"} 
        </button>
        </Link>
    );
}

export {FavoriteButton};