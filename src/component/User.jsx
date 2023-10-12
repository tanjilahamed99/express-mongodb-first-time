import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const loaderUser = useLoaderData()
    const [user, setUser] = useState(loaderUser)

    const handleDelete = _id => {
        console.log(_id)

        fetch(`http://localhost:5000/user/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('delate complete')
                    const remaining = user.filter(user => user._id !== _id)
                    setUser(remaining)
                }
            })
    }

    return (
        <div>

            {
                user.map((user, idx) => <p key={idx} >{user.name}
                    <Link to={`/update/${user._id}`}><button>update</button></Link>
                    <button
                        onClick={() => handleDelete(user._id)}
                    >delete</button> </p>)
            }

        </div>
    );
};

export default User;