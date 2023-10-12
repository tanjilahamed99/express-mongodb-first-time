import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadUser = useLoaderData()

    return (
        <div>
            <h2>update</h2>
            <h1>{loadUser.name}</h1>

            <form>
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