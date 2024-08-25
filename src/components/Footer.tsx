const Footer = () => {
  return (
    <footer className="bottom-0 border-t inset-2x-0 border-zinc-500/10">
      <div className="flex flex-col gap-1 px-6 py-12 mx-auto text-xs text-center text-zinc-700 max-w-7xl lg:px-8">
        <p>
          Made by{" "}
          <a
            href="https://mitulagr2.netlify.app/"
            className="font-semibold duration-150 hover:text-zinc-200"
          >
            @mitulagr2
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
