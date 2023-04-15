import React from 'react'

export async function getServerSideProps({ query }:any) {
    const { id } = query;
    console.log(query)
    return { props: { id } };
  }


const SinglePlace = ({id}:any) => {
  return (
    <div>
         <div>
      <h1>{id}</h1>
      <p>{id}</p>
      <img src={id} alt={id} />
    </div>

    </div>
  )
}

export default SinglePlace