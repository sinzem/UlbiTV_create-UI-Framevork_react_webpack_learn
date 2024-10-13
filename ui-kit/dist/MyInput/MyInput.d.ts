import { FC } from 'react';
import "./myInput.css";
export interface MyInputProps {
    big?: boolean;
    placeholder: string;
    label: string;
}
declare const MyInput: FC<MyInputProps>;
export default MyInput;
