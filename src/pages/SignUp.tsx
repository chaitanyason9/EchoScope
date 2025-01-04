import { Card, Flex, TextInput, PasswordInput, Divider, Button } from '@mantine/core';
import BottomText from '../components/BottomText';
import { GoogleIcon, GitHubIcon } from '../CustomIcons';

export default function SignUp() {
    return (
        <Flex justify="center" align="center" style={{ height: '100vh' }} className='bg-gray-100'>
            <Card shadow="sm" padding="lg" radius="md" withBorder className='w-96'>
                <Flex direction="column" justify="center" gap="md">
                    <div className='text-xl text-center font-bold mb-2'>Create a new account</div>
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
                        <TextInput label='Username' placeholder='Enter your username' />
                    </div>
                    <TextInput label='Email' placeholder='Enter your email' />
                    <PasswordInput label='Password' placeholder='Enter your password'></PasswordInput>
                    <Button className="mt-2">Continue</Button>
                    <BottomText type='signup'></BottomText>
                </Flex>
            </Card>
        </Flex>
    )
}