import React from 'react';
function signUp(){
    return (
        <div className="container">
            
            <form>
                <div className="row">
                    <div className="form-group col">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                    <div className="form-group col">
                        <label for="inputPassword4">Confirm your Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <label for="FirstName">First Name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                    <label for="LastName">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div>
                    <input className="datepicker" data-date-format="mm/dd/yyyy" />
                    <input className="btn btn-secondary" type="submit" value="Submit" />
                </div>
            </form>

        </div>
    )
}
export default signUp;