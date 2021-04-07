import React from 'react';

export default class LoginPage extends React.Component {

    render() {

        return (
            <React.Fragment>
                <h2>Sign Up Page</h2><br />    
                <div class="signup">    
                    <form id="signup">    
                        <label><b>User Name     
                        </b>    
                        </label>    
                        <input type="text" name="username" id="username" placeholder="Username" />    
                        <br /><br />    
                        <label><b>Password     
                        </b>    
                        </label>    
                        <input type="Password" name="password" id="password" placeholder="Password" />    
                        <br /><br />    
                        <button type='button'>Sign Up</button>    
                    </form>     
                </div>    
            </React.Fragment>
        )
    }
}