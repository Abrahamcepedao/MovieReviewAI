'use client'
//React
import { useState } from 'react'

//Next.js
import { useRouter } from 'next/navigation';

//MUI
import { IconButton } from '@mui/material';

//MUi - icons
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';

const Header = () => {
    //Router
    const router = useRouter()

    //Redux - auth
    //useState - menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    /* handle menu click */
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className='lg:fixed top-5 right-5 w-full mb-2 lg:w-ds__right'>
            <div className='flex justify-between items-center max-w-6xl m-auto'>
                <h1 className='text-black dark:text-white font-bold text-base sm:text-xl'>Marvel</h1>
                <div>
                    <IconButton>
                        <LocalMoviesRoundedIcon className='text-white'/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Header