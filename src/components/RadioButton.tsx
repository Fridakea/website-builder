import { FC } from "react";

type RadioButtonProps = {
  id: number;
  label: string;
  required?: boolean;
  isChecked?: boolean;
  onChange?: (newValue: string) => void;
};

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  label,
  required = true,
  isChecked = false,
  onChange,
}) => {
  return (
    <div className={isChecked ? "bg-red-500" : ""}>
      <input
        key={id}
        type="radio"
        id={label}
        onChange={(e) => onChange?.(e.currentTarget.value)}
        value={label}
        name={label}
        required={required}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
