interface Props {
  titleBanner: string;
  textBloc: string;
  image: string;
}
export default function BlocVertical({ titleBanner, textBloc, image }: Props) {
  return (
    <div className="">
      <div className="ml-10 mt-4 w-1/2 ">
        <h3 className="uppercase font-bold bg-amber-500 py-4 pl-4 mb-4">
          {titleBanner}
        </h3>
        <p className="text-justify ml-4">{textBloc}</p>
      </div>
      <img src={image} alt="" className="w-1/4 h-1/4" />
    </div>
  );
}
