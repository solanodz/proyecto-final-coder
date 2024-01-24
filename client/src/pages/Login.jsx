import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const Login = () => {
    return (
        <div className='mx-auto max-w-xl'>
            <h1 className='text-center my-12 text-3xl font-bold'>Login</h1>
            <form action="post">
                <div className='my-2'>
                    <Label>Email</Label>
                    <Input type="email" />
                </div>
                <div className='grid grid-flow-col gap-3 my-2'>
                    <div>
                        <Label>Password</Label>
                        <Input type="password" />
                    </div>
                </div>
            </form>
            <Button className="w-full flex mx-auto mt-3">Login</Button>
            <p className='text-muted-foreground my-3 text-center'>You don&apos;t have an account? <Link to={'/register'} className='text-black font-medium underline'>click here</Link></p>
        </div>
    )
}

export default Login
