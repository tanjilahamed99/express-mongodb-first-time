import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadUser = useLoaderData()

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;

        const user = { name, email }
        console.log(user)

        fetch(`http://localhost:5000/user/${loadUser._id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h2>update</h2>
            <h1>{loadUser.name}</h1>

            <form onSubmit={handleUpdate}>
                <h2>update your data</h2>
                <br />
                <br />
                <input type="text" name="name" defaultValue={loadUser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadUser.email} id="" />
                <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default Update;