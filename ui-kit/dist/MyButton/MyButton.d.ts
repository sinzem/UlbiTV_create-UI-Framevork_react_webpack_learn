import { FC } from 'react';
import "./myButton.css";
export interface MyButtonProps {
    color: string;
    big?: boolean;
    children: string;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
