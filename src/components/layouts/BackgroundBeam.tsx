import Image from "next/image";

const BackgroundBeam = () => {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <Image
            className="w-[90rem] flex-none max-w-none block"
            src="/imgs/beam.png"
            alt="Beam"
            width={1080}
            height={1080}
          />
        </picture>
      </div>
    </div>
  );
};

export default BackgroundBeam;
