import React, { useState } from 'react'
import { Button, Col, Input, InputGroup, InputGroupText, Row } from 'reactstrap'
import { User, Phone, Mail, Lock, Eye, EyeOff } from 'react-feather'
import toast, { Toaster } from 'react-hot-toast'

const Signup = () => {
    const [type, setType] = useState("Signup")
    const [passwordView, setPasswordView] = useState("password")
    const [passwordCheck, setPasswordCheck] = useState({
        password: "",
        confirm_password: ""
    })
    const notify = () => toast.error('Password not match');

    console.log(type, passwordCheck)
    return (
        <>
            <Row>
                <Col className='sm-12 d-flex justify-content-center align-items-center'>
                    <div className='w-50' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px" }}>
                        <div className='d-flex justify-content-center align-items-center w-100'>
                            <div className='p-5 w-75'>
                                <div className='d-flex gap-5 justify-content-center'>
                                    <div onClick={() => setType("Login")}>Login</div>
                                    <div onClick={() => setType("Signup")}>Signup</div>
                                </div>
                                <div className='d-flex flex-column gap-3 mt-5'>

                                    {
                                        type === "Signup" ? (
                                            <>
                                                <div className='w-100'>
                                                    <InputGroup>
                                                        <InputGroupText>
                                                            <User size='20px' />
                                                        </InputGroupText>
                                                        <Input placeholder="username" type='text' />
                                                    </InputGroup>
                                                </div>

                                                <div className='w-100'>
                                                    <InputGroup>
                                                        <InputGroupText>
                                                            <Mail size='20px' />
                                                        </InputGroupText>
                                                        <Input placeholder='email' type='email' />
                                                    </InputGroup>
                                                </div>

                                                <div className='w-100'>
                                                    <InputGroup>
                                                        <InputGroupText>
                                                            <Phone size='20px' />
                                                        </InputGroupText>
                                                        <Input placeholder='phone number' type='number' />
                                                    </InputGroup>
                                                </div>

                                                <div className='w-100'>
                                                    <InputGroup>
                                                        <InputGroupText>
                                                            <Lock size='20px' />
                                                        </InputGroupText>
                                                        <Input
                                                            placeholder='password'
                                                            type={passwordView}
                                                            onChange={(e) => {
                                                                setPasswordCheck({
                                                                    ...passwordCheck,
                                                                    password: e.target.value
                                                                });
                                                            }}
                                                        />
                                                        <InputGroupText
                                                            onClick={(e) => {
                                                                setPasswordView((prevView) => (prevView === 'password' ? 'text' : 'password'));
                                                            }}
                                                            style={{ cursor: 'pointer' }}>
                                                            {passwordView === 'text' ? <EyeOff size='20px' /> : <Eye size='20px' />}
                                                        </InputGroupText>
                                                    </InputGroup>
                                                </div>

                                                <div className='w-100'>
                                                    <InputGroup>
                                                        <InputGroupText>
                                                            <Lock size='20px' />
                                                        </InputGroupText>
                                                        <Input
                                                            placeholder='confirm password'
                                                            type='password'
                                                            onChange={(e) => {
                                                                setPasswordCheck({
                                                                    ...passwordCheck,
                                                                    confirm_password: e.target.value
                                                                });
                                                            }}
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className='w-100'>
                                                    <InputGroup>
                                                        <InputGroupText>
                                                            <Mail size='20px' />
                                                        </InputGroupText>
                                                        <Input placeholder='email' type='email' />
                                                    </InputGroup>
                                                </div>

                                                <div className='w-100'>
                                                    <InputGroup>
                                                        <InputGroupText>
                                                            <Lock size='20px' />
                                                        </InputGroupText>
                                                        <Input placeholder='password' type='password' />
                                                    </InputGroup>
                                                </div>
                                            </>
                                        )
                                    }

                                </div>
                                <div className=' mt-5 d-flex justify-content-center'>
                                    <Button
                                        color="primary"
                                        onClick={() => {
                                            passwordCheck.password !== passwordCheck.confirm_password ? (
                                                notify()
                                            ) : (
                                                console.log("Passwords match")
                                            )
                                        }}
                                    >
                                        {type}
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Col>
                <Toaster />
            </Row >
        </>
    )
}

export default Signup