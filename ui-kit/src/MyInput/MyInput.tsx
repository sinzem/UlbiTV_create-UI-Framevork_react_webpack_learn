import React, { FC } from 'react';
import "./myInput.css";

export interface MyInputProps {
    big?: boolean;
    placeholder: string;
    label: string;
}

const MyInput: FC<MyInputProps> = ({big, placeholder, label, ...props}) => {

    const classes = ["my-input"];
    if (big) {
        classes.push("big-input");
    }

    return (
        <label>
            {label}
            <input className={classes.join(" ")} placeholder="placeholder" {...props}/>
        </label>
    );
};

export default MyInput; /* (добавляем в экпорты в index.ts) */