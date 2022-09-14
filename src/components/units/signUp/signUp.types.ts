import { UseFormReturn } from "react-hook-form";

export interface ISignUpUIProps {
  register: UseFormReturn["register"];
  handleSubmit: UseFormReturn["handleSubmit"];
  formState: UseFormReturn["formState"];
  onClickSignUp: (data: any) => Promise<void>;
  onClickSendToken: (data: any) => Promise<void>;
  onClickCheckToken: (data: any) => Promise<void>;
  minutes: Number;
  seconds: Number;
  isCheck: boolean;
}
