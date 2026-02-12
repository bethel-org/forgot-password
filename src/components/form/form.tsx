import { FormProvider } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import { FormContent, Error } from "./form.styles.ts";

export interface FormProps {
  children: React.ReactNode;
  formMethods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  className?: string;
  [key: string]: any;
}

const Form = ({ children, formMethods, onSubmit, ...props }: FormProps) => {
  const {
    formState: { errors },
    handleSubmit,
  } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <FormContent {...props} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </FormContent>
      {errors?.general && <Error>{errors.root?.message}</Error>}
    </FormProvider>
  );
};

Form.displayName = "Form";

export { Form };
