export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full">
          <h1 className="mb-5 text-5xl font-bold">
            Presence. Humanity. Evolution.
          </h1>
          <p className="mb-5">
            We begin within. We build together. We rise as one.
          </p>
          <div className="flex justify-center flex-row gap-x-2">
            <button className="btn btn-primary">Join the Inner Circle</button>
            <button className="btn btn-primary">Explore the Movement</button>
          </div>
        </div>
      </div>
    </div>
  );
}
