import React from 'react';
import Card from './Card';


const cardlist = ({animals}) => {
    return (
        <div className="">
            {animals.map((user, i) => {
                return (<Card 
                    key={i} 
                    id={animals[i].id} 
                    name={animals[i].name['name-en']} 
                    species={animals[i].species} 
                    photo = {"http://acnhapi.com/images/villagers/"+animals[i].id}
                    // photo = {animals[i].photo} 
                    catchphrase={animals[i]['catch-phrase']}
                />)
            })}
        </div>
    );
}

export default cardlist;