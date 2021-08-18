import Button from './Button';
import '../../index.css';

export default {
  title: 'My awesome Button',
  component: Button,
  argTypes: {
    theme: {
      control: { type: 'select' },
    },
  },
};

export const main: any = (args: any) => <Button {...args}></Button>;
main.args = {
  children: 'Log in',
  type: 'submit',
  disabled: false,
};
