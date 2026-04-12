interface AccordionItemsPorps {
  product: { id: number; title: string; image: string }[];
}

const AccordionItems = ({ product }: AccordionItemsPorps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-3">
      {product.map((item) => (
        <li key={item.id} className="first:mt-4 flex items-center gap-10">
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} className="max-h-30 w-40 object-cover" />
        </li>
      ))}
    </div>
  );
};

export default AccordionItems;
