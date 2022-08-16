import React from "react";
import {submitDataAsync} from '../service'
import UserInfo from "./userInfo";


const initialForm = {
    asteroid: ''
}

const UserForm = () => {

    const [formFields, setFormFields] = React.useState(initialForm)
    const[InfoData , setInfoData] = React.useState('')

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        submitDataAsync(formFields.asteroid).then((res)=>{
            setInfoData(res.data)
        })
    }

    return (
        <>
            <input
                name='asteroid'
                id='asteroid'
                value={formFields.asteroid}
                onChange={(e) => { handleChange(e) }}
                placeholder={"Enter Asteroid ID"}
            />
            <button disabled={formFields.asteroid === ''} onClick={() => { handleSubmit() }}> Submit</button>

            {InfoData ? <UserInfo InfoData ={InfoData}/> :false}
        </>
    )
}

export default React.memo(UserForm)