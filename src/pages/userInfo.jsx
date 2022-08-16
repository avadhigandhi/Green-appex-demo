import React from "react";



const UserForm = (props) => {
    const {InfoData} = props
    return (
        <>
         <p>
         Name :{InfoData?.name}<br/>
         nasa_jpl_url :{InfoData?.nasa_jpl_url }<br/>
         is_potentially_hazardous_asteroid :{InfoData?.is_potentially_hazardous_asteroid ? 'true' :'false'}<br/>
         </p>
            
        </>
    )
}

export default React.memo(UserForm)