import React, {useState} from 'react'

function PickupInput() {
    const initialFormState = {
        product: "",
        submission: "",
        location: "",
        status: "",
        employee: ""
    }

    const [pickup, setPickup] = useState(initialFormState)

    const handleInputchange = (event) => {
        const { name, value} = event.target

        setPickup({...pickup, [name]: value})
    }

    return (
        <div>
            <h4>Add A Pickup</h4>
                <form>
                  <input type="text" name="product" value={pickup.product} onChange={handleInputchange} required="required" placeholder="Product..."></input>
                  <input type="text" name="location" value={pickup.location} onChange={handleInputchange} required="required" placeholder="Location..."></input>
                  <input type="text" name="employee" value={pickup.employee} onChange={handleInputchange} required="required" placeholder="Assigned Employee..."></input>
                  <select>
                    <option name="status" value="awaiting pickup" required="required">Awaiting Pickup</option>
                    <option name="status" value="picked-up" required="required">Picked-up</option>
                    <option name="status" value="recieved" required="required">Recieved</option>
                  </select>
                  <button type="submit">Add</button>
                </form>
        </div>
    )
}

export default PickupInput
