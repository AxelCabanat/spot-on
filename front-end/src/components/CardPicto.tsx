interface Props {
  picto: string;
  titleCard: string;
  bodyCard: string;
}

export default function CardPicto({ picto, titleCard, bodyCard }: Props) {
  return (
    <div className="card-picto">
      <div className="flex items-center block-h-picto ">
        <img className="picto-img" src={picto} alt="pictograme organisation" />
      </div>
      <p className="uppercase text-center font-bold font-['brandon-grotesque-bold'] mx-2 md:h-[48px] md:my-4">{titleCard}</p>
      <p className="text-center mx-2">{bodyCard}</p>
    </div>
  );
}
