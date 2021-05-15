import React from 'react';
import { Typography } from '@material-ui/core';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>&#169;Inusha Manawadu</Typography>
            </div>
            <div className='footer_right'>
            <Typography className='footer_copyright'>
                Developed by <a href='/' target='_blank'> Inusha Manawadu </a>
                <br/>
            </Typography>
            </div>
        </div>
    )
}

export default Footer
