import { Studio } from "../../src/interfaces";

interface Props {
  newStudio: Studio;
}

export default function IsContact({ newStudio }: Props) {
  return (
    <div
      className={
        "home-config-normal flex justify-between py-2  w-full lg:w-9/12 mt-2"
      }
    >
      <p
        style={{
          background: newStudio.background2 || "#E6E6E6",
          color: newStudio.color_primary || "#000000",
        }}
        className=" text-xl lg:text-2xl w-[49%] text-center"
      >
        {" "}
        Contacter le studio
      </p>
      <p
        style={{
          background: newStudio.background2 || "#E6E6E6",
          color: newStudio.color_primary || "#000000",
        }}
        className="text-xl lg:text-2xl w-[49%] text-center"
      >
        Contacter SpotOn
      </p>
    </div>
  );
}
