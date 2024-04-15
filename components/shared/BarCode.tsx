import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function BarCode({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <div className="flex items-center space-x-2 mt-4">
          <Image
            src={"/icons/barcode.svg"}
            width={478}
            height={427}
            alt="logo"
            className="w-full  object-center object-cover aspect-auto cursor-pointer"
          />
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(!open)}
              className="tracking-wider"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
