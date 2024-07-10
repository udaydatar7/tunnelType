import { useGameState } from "../hooks/zustand/useGameState";

function Footer() {
  const { isTyping } = useGameState();
  return (
    <>
      <footer className={isTyping ? "hide" : ""}>
        <a
          href="https://github.com/udaydatar7"
          target="blank"
          className="github"
          tabIndex={isTyping ? -1 : 1}
        >
          <img src="github.svg" alt="" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
