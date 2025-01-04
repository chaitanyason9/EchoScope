import { Card, Flex, TextInput, PasswordInput, Divider, Button } from '@mantine/core';
import BottomText from '../components/BottomText';
import { GoogleIcon, GitHubIcon } from '../CustomIcons';
import { Link } from'react-router-dom';

export default function SignUp() {
    return (
        <Flex justify="center" align="center" style={{ height: '100vh' }} className='bg-gray-100'>
            <Card shadow="sm" padding="lg" radius="md" withBorder className='w-96'>
                <Flex direction="column" justify="center" gap="md">
                    <div className='text-xl text-center font-semibold mb-2'>Sign In in EchoScope</div>
                    <div className='flex gap-3'>
                        <div className='flex-1 flex justify-center items-center gap-3 border border-neutral-200 p-1.5 rounded-md hover:text-blue-500 hover:cursor-pointer'>
                           <GoogleIcon/> Google
                        </div>
                        <div className='flex-1 flex justify-center items-center gap-3 border border-neutral-200 p-1.5 rounded-md hover:text-blue-500 hover:cursor-pointer'>
                           <GitHubIcon/> Github
                        </div>
                    </div>
                    <div>
                        <Divider label="Or continue with" className='mb-2'></Divider>
                        <TextInput label='Email' placeholder='Enter your email' />
                    </div>
                    <div>
                        <PasswordInput label='Password' placeholder='Enter your password'></PasswordInput>
                        <div className='text-xs mt-1 ml-1'>Forgot your password? <Link to='/auth/reset-password' className='text-blue-500'>Reset Password</Link></div>
                    </div>
                    <Button className="mt-2">Sign In</Button>
                    <BottomText type='signip'></BottomText>
                </Flex>
            </Card>
        </Flex>
    )
}