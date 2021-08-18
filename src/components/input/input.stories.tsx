import '../../index.css';
import Input from './Input';

export default {
  title: 'My input',
  component: Input,
};

export const Main: any = (args: any) => <Input {...args}></Input>;

Main.args = {};
