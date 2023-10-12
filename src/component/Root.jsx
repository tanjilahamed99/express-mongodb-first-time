const Root = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value

        const user = { name, email }
        console.log(user)

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" required/>
                <br />
                <input type="email" name="email" required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Root;