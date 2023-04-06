import { Field, Formik } from 'formik'
import React from 'react'
import './Checkout.css'
function CheckOut() {
    const userLogin = JSON.parse(localStorage.getItem('userlogin'))
    console.log(userLogin)
    const initialValues = {
        fullName: `${userLogin.fullName}`,
        email: `${userLogin.email}`,
        phone: `${userLogin.phone}`,
        address: `${userLogin.address}`,
    }
    const CheckOut = () => {

    }
    return (
        <div class="checkout-container" >
            <h2  >Your information</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={CheckOut}

            >
                <form className='checkout-form'>
                    <table>

                        <tr>


                            <th> Full Name</th>
                            <td>
                                <span>
                                    {userLogin.fullName}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th> Phone number</th>
                            <td>
                                <span>
                                    {userLogin.phone}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th> Email</th>
                            <td>
                                <span>
                                    {userLogin.email}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th> Address</th>
                            <td>
                                <span>
                                    {userLogin.address}
                                </span>
                            </td>
                        </tr>

                    </table>

                </form>


            </Formik>

        </div>
    )
}

export default CheckOut