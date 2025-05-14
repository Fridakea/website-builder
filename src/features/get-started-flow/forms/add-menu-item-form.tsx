import { FC, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AddMenuItemFormProps = {
  onSubmit: (name: string, price?: string) => void;
};

export const AddMenuItemForm: FC<AddMenuItemFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(name, price);
    setName("");
    setPrice("");
    nameInputRef.current?.focus();
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-row flex-wrap gap-2 mb-2">
      <Input
        ref={nameInputRef}
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        placeholder="Ting..."
        className="min-w-fit bg-muted text-muted-foreground flex-[2]"
        inputMode="text"
      />

      <div className="flex flex-row gap-2 flex-1">
        <Input
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
          type="text"
          placeholder="Pris..."
          className="bg-muted text-muted-foreground flex-[1]"
          inputMode="text"
        />
        <Button type="submit" size="sm" disabled={name === ""}>
          Tilføj
        </Button>
      </div>
    </form>
  );
};
