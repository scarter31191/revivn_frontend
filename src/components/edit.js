import React, {useState} from 'react'

function edit() {
    const initialItem = {
        product: "",
        submission: "",
        location: "",
        status: "",
        employee: ""
    }

    const [edit, setEdit] = useState({initialItem})
    const updateItem = (item) => {
        setEdit({
            product: product.value, 
            submission: submission.value,
            location: location.value,
            status: status.value,
            employee: employee.value
        })
    }

    return (
        <div>
            
        </div>
    )
}

export default edit;