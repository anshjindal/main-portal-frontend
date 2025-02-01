

function HeroBanner({ Header, Content }) {
  return (
    <div className="flex mb-[5vw] justify-center text-black text-left">
    <div className="w-[80%] max-[450px]:mt-[5vw] max-[450px]:mb-[5vw] max-[450px]:w-full">
      <div className="flex mt-[1vw] items-center max-[450px]:flex-col max-[450px]:space-y-[8vw]">
        <h1 className="text-[4vw]/[5vw] text-left w-[40vw] font-bold max-[450px]:text-[7vw]/[7.5vw] max-[450px]:w-[80%] max-[450px]:mt-[3vw]">
          {Header}
        </h1>
        <p className="w-[40vw] text-[1.1vw] text-left text-black float-right max-[450px]:text-[3vw] max-[450px]:w-[80%]">
          {Content}
        </p>
      </div>
    </div>
  </div>

  );
}

export default HeroBanner;
