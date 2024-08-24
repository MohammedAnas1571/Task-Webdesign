import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "./ui/dialog";

type Props = {
  children: React.ReactElement;
  thumbnileURL: string;
  description: string;
  price: number;
  title: string;
  category: string;
};

export default function ProductDetailsDialog({
  children,
  title,
  description,
  thumbnileURL,
  price,
  category,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogContent>
          <div>
            <span className="mb-1 text-slate-500">{category}</span>
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <img
              className="w-full aspect-square"
              src={thumbnileURL}
              alt={title}
            />
            <span className="mt-1 block text-lg font-medium">${price}</span>
            <p className="mt-4">{description}</p>
          </div>
        </DialogContent>
      </DialogContent>
    </Dialog>
  );
}
