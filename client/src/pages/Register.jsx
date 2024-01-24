import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { useState } from 'react'


const Register = () => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')

    async function registerUser(e) {
        e.preventDefault()

        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                phone,
                password,
                country,
                city,
                address,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status !== 201) {
            alert('Error en el registro. Intenta de nuevo.')
        } else {
            alert('El registro fue exitoso.')
        }

        console.log(response.status)
        const data = await response.json()
        console.log(data)
    }


    return (
        <div className='mx-auto max-w-5xl'>
            <h1 className='text-center my-12 text-3xl font-bold'>Register</h1>
            <form onSubmit={registerUser} className='grid grid-flow-col gap-20'>
                <section className=''>
                    <h2 className='text-xl font-bold'>Account Info</h2>
                    <div className='grid grid-flow-col gap-3 my-2'>
                        <div>
                            <Label className="text-muted-foreground ">First name</Label>
                            <Input
                                type="text"
                                value={first_name}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label className="text-muted-foreground ">Last name</Label>
                            <Input
                                type="text"
                                value={last_name}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='my-2'>
                        <Label className="text-muted-foreground ">Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='grid grid-flow-col gap-3 my-2'>
                        <div>
                            <Label className="text-muted-foreground ">Password</Label>
                            <Input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}

                            />
                        </div>
                        <div>
                            <Label className="text-muted-foreground ">Repeat password</Label>
                            <Input type="password" />
                        </div>
                    </div>
                </section>
                <section className=''>
                    <h2 className='text-xl font-bold'>User Info</h2>
                    <div className='grid grid-flow-col gap-3 my-2'>
                        <div>
                            <Label className="text-muted-foreground ">Country</Label>
                            <Input
                                type="text"
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label className="text-muted-foreground ">Province/state</Label>
                            <Input
                                type="text"
                                value={province}
                                onChange={e => setProvince(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='grid grid-flow-col gap-3 my-2'>
                        <div>
                            <Label className="text-muted-foreground ">City</Label>
                            <Input
                                type="string"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label className="text-muted-foreground ">Address</Label>
                            <Input
                                type="string"
                                value={address}
                                onChange={e => setAddress(e.target.value)}

                            />
                        </div>

                    </div>
                    <div>
                        <Label className="text-muted-foreground ">Phone</Label>
                        <Input
                            type="number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                </section>
                <Button type="submit" className="w-full flex mx-auto mt-3">Register</Button>
                <p className='text-muted-foreground my-3 text-center'>Already have an account? <Link to={'/login'} className='text-black underline font-medium'>click here</Link></p>

            </form>

        </div>
    )
}

export default Register
