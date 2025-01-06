import { Link } from 'react-router-dom';

export default function BottomText({ type }: { type: string }) {
    return (
        type === 'signup' ? (
            <div className='text-center text-sm'>
                Already have an account? <Link to='/auth/signin' className='text-blue-500'>Sign in</Link>
            </div>
        ) : (
            <div className='text-center text-sm'>
                Don't have an account? <Link to='/auth/signup' className='text-blue-500'>Sign up</Link>
            </div>
        )
    );
}