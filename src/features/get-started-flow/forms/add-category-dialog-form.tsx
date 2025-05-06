import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { FC, useState } from "react";

type AddCategoryDialogFormProps = {
  onSubmit: (name: string) => void;
};

export const AddCategoryDialogForm: FC<AddCategoryDialogFormProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
    setIsOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    setInput("");
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>Tilføj kategori</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tilføj kategori</DialogTitle>
          <DialogDescription hidden>Tilføj en kategori til dit menukort</DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <Label htmlFor="categoryName">Kategori navn</Label>
          <Input name="categoryName" type="text" placeholder="Kategori navn" value={input} onChange={(e) => setInput(e.currentTarget.value)} />

          <Button variant="default" type="submit" disabled={input === ""}>
            Tilføj
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
