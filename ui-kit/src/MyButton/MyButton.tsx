import React, { FC } from 'react';

export interface MyButtonProps {
    color: string;
    big: boolean;
}

const MyButton: FC<MyButtonProps> = ({
                                        children,
                                        color,
                                        // big,
                                        ...props}) => {
    return (
        <div {...props} style={{color}}>
            {children}
        </div>
    );
};

export default MyButton;