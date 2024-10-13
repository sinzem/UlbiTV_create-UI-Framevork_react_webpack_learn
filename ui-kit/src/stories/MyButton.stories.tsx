import type { Meta, StoryObj } from '@storybook/react';

import MyButton from '../MyButton/MyButton'; /* (подключаем свой элемент) */


const meta = {
  title: 'Example/Button',
  component: MyButton, /* (заменяем названия) */
  parameters: { /* (удаляем все лишние параметры) */

  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: { },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RedBtn: Story = {
  args: { /* (передаем соответствующие аргументы) */
    color: "red",
    children: 'Button',
  },
};

export const OrangeBtn: Story = {
  args: {
    color: "orange",
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    color: "orange",
    children: 'Button',
    big: true
  },
};
/* На выходе получаем кнопку в приложении для тестировки Storybook */
