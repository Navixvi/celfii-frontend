// import video from "../../../assets/celfii-video.mp4";

const HeroBanner = () => (
  <section>
    <div className="relative w-full bg-red-50">
      {/* Referencia de video */}
      <div className="flex flex-col gap-8 items-center justify-center w-full h-[90vh]">
        <h1 className="font-semibold text-center text-8xl">Cel-Fii Tecnología</h1>
        <span className="text-5xl font-semibold text-red-500">Referencia de video</span>
      </div>
      {/* <video
        className="object-cover w-full"
        style={{ height: "calc(100vh - 80px)" }}
        autoPlay
        loop
        muted
      >
        {" "}
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  </section>
);

export default HeroBanner;
