import React from 'react';
import { LoginBackground } from '../views/styles';

export default function Background({children}: {children?: React.ReactNode}){
    return(
        <LoginBackground>
            {children}
        </LoginBackground>
    );
}