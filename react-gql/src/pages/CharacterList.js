import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import "./CharacterList.css";



export default function CharacterList() {

  const {error,loading,data}=useCharacters();
  console.log(data);
  if(loading) return <div>loading...</div>
  if(error) return <div>error occured...</div>
  return (
    
    <div className='CharacterList'>
      {
               data.characters.results.map(character=>{
                 return(
                   <Link to={`/${character.id}`}>
                     
                     <img src={character.image}/>
                     <h2>{character.name}</h2>
                   </Link>
                 );
               })
             }
    </div>
  )
}




// import React from 'react';
// import { useQuery,gql } from '@apollo/client';

// const GET_CHARACTERS=gql`
// query{
//   characters{
//    results{
//     id
//     name
//     image
//   }
//   }
// }

// `

// export default function CharacterList() {

//   const {error,data,loading}=useQuery(GET_CHARACTERS);

//   console.log({error,data,loading});

//   return <div className='CharacterList'>
//             {
//               data.characters.results.map(character=>{
//                 return(
//                   <div>
//                     hlo
                    
//                     <img src={character.image}/>
//                     <h2>{character.name}</h2>
//                   </div>
//                 );
//               })
//             }
//           </div>;
// }
