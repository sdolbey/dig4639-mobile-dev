import React from 'react';

class AddContact extends React.Component {

    sendContact = () => {

        // Get data from inputs
        let name = document.querySelector('#contactName').value;
        let phone = document.querySelector('#contactPhone').value;
        
        // Send data to API
        window.fetch("http://plato.mrl.ai:8080/contacts/add", {
            method: 'POST',
            body: JSON.stringify({ name: name, number: phone }),
            headers: {API: "dolbey", "Content-type": "application/json"}
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.props.updateAll();
        })

    }

    submitHandler = e => {
        e.preventDefault();
        this.sendContact();
    }


    render() {
        return(
            <div>
                <h2>Add contact</h2>
                <form onSubmit={this.submitHandler}>
                    <input className="u-full-width" id="contactName" type="text" placeholder="Name" name="name" required/>
                    <input className="u-full-width" id="contactPhone" type="tel" placeholder="Phone number" name="phone" required/>
                    <input className="submit-button" type="submit" value="Add"/>
                </form>
            </div>
        )
    }

}

export default AddContact;