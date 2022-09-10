import React from "react";
import './signup.css';


function Signup(){
    return(
        <div className="signup">
            <form action="/" method="POST">
                <div class="form-container">
                    <h3 class="form-item">SIGN UP FOR OUR DAILY INSIDER</h3>
                    <div class="form-item">
                        <input type="email" name="email" placeholder=" Enter your email" required="required"></input>
                    </div>
                    <div class="form-item">
                    <button type="submit">Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;