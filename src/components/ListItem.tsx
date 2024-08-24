import ProductDetailsDialog from "./ProductDetailsDialog";

type Props = {
  thumbnileURL: string;
  description: string;
  price: number;
  title: string;
  category: string;
};

export default function ListItem(props: Props) {
  return (
    <article className="bg-white shadow-md rounded-[6px] border border-solid border-gray-300 overflow-hidden p-4 flex flex-col">
      <div className="relative">
        <img
          className="w-full aspect-square"
          src={props.thumbnileURL}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center mt-6 relative h-full">
        <h3 className="text-lg font-medium text-slate-800 pb-6">{props.title}</h3>
        <div className="flex-grow flex-shrink flex">
          <ProductDetailsDialog {...props}>
            <button className="mt-auto  px-4 py-2 rounded-sm border border-solid border-[#AD9271] select-none text-sm font-playfair-display text-[#ad9271] justify-end">
              View details
            </button>
          </ProductDetailsDialog>
        </div>
      </div>
    </article>
  );
}
