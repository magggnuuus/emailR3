import React, {useState} from 'react'


export default function AddNewUser() {
    const [user, setName] = useState('');
    const mailRequirements = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const elementHidden = !user.match(mailRequirements);
    const firstPartOfMail = user.split("@", 1);
    const secondPartOfMail = "@" + user.split("@").pop();
    const mailTo = <a href="mailto:feed.back@example.com?subject=Hi&amp;body=That was a Task, Systaro">
        give feedback!
    </a>;




    return (
        <div>
            <h1>Please enter a correct mail</h1>
            <form>
                <input
                    type="text"
                    value={user}
                    onChange={event => setName(event.target.value)}
                />
                <div className="App">
                </div>
                <p hidden={elementHidden}>
                    <p> entire mail: {user} </p>
                    <p> first part of mail: {firstPartOfMail} </p>
                    <p> second part of mail: {secondPartOfMail} </p>
                    <p>{mailTo}</p>
                </p>
            </form>
        </div>
    );
}

