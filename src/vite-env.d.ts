/// <reference types="vite/client" />
interface IInputProps {
    alarmTitle?: string;
    alarmDescription?: string;
    alarmTime?: string;
    value?: string;
    placeholder?: string;
    defaultValue?: string;
    type?: React.HTMLInputTypeAttribute;
    // onChangeHandler?: (_: string) => unknown;
    validator?: (_: string) => boolean;
  }
  