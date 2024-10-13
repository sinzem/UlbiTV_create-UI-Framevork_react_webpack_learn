import React, { FC } from 'react';
import  "./myButton.css";

export interface MyButtonProps {
    color: string;
    big?: boolean;
    children: string;
}

const MyButton: FC<MyButtonProps> = ({
                                        children,
                                        color,
                                        big,
                                        ...props}) => {

    const rootClasses = ["my-button"];
    if (big) {
        rootClasses.push("big-btn");
    }

    return (
        <button{...props} className={rootClasses.join(" ")} style={{color}}>
            { children }
        </button>
    );
};

export default MyButton;