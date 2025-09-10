import Button from "./ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="w-screen h-screen">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg pointer-events-auto text-center">
          Zero Investment
        </h1>
        <h2 className="text-xl md:text-2xl text-white mb-10 drop-shadow-lg text-center">Go Solar, Infinite Savings</h2>
        <div className="flex gap-10">
          <Button
            title="Know More"
            className="pointer-events-auto bg-primary"
          />
          <Button
            title="Contact US"
            className="pointer-events-auto bg-transparent text-white border-2 hover:bg-white hover:text-black"
          />
        </div>
      </div>

      <div className="relative w-full h-full">
        <video
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Solar-Panel-Hero-Desktop.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
