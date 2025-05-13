import { Switch } from "@radix-ui/react-switch";
import { FC } from "react";

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { twMerge } from "tailwind-merge";

type SwitchCardProps = {
  className?: string;
  control: any;
  name: string;
  fieldProp: any;
  children: React.ReactNode;
};

export const SwitchCard: FC<SwitchCardProps> = ({ className, control, name, fieldProp, children }) => {
  return (
    <div className={twMerge("flex flex-col gap-4 rounded-lg border p-3 shadow-sm", className)}>
      <FormField
        control={control}
        name={name}
        render={({ {...fieldProp} }) => (
          <FormItem className="flex flex-row-reverse items-center justify-end gap-4">
            <FormLabel>Billedgalleri</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      {children}
    </div>
  );
};
