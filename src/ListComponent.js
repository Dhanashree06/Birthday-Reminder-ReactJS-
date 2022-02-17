import React from 'react';
const ListComponent = ({people}) => {
    return ( 
        <>

        {people.map((person) => {
        
        const{ id, name, age}= person;
       return(
       <birthdays key={id} className="person">
        <div>
            <h4>{name}</h4>
            <p>{age}years</p>
        </div>
        </birthdays>
       ); 
       
       })}
       </>
     );
}
 
export default ListComponent ;