import React, {useState} from 'react';
import axios from 'axios';


function CarSearchForm() {
        const [search, setSearch] = useState({})


       const handleApiSearch = (e) => {
           setSearch(e.target.value)
       }

       const handleSubmit = (e) => {
           e.preventDefault()
            



       }



    return (
        <div>

            <div>
                <form className="form-control">
                    <label>Look for a car</label>
                    <input  className="form-control"     placeholder="Search"/>
                    <input type="submit" />
                </form>
            </div>
   
        </div>
    )
}

export default CarSearchForm

