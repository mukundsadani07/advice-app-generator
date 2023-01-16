import "./styles.css";
import { useState, useEffect } from "react";
import pauseMobile from "../images/pattern-divider-mobile.svg";
import pauseDesktop from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";
// ### Primary

// - Light Cyan: hsl(193, 38%, 86%)
// - Neon Green: hsl(150, 100%, 66%)

// ### Neutral

// - Grayish Blue: hsl(217, 19%, 38%)
// - Dark Grayish Blue: hsl(217, 19%, 24%)
// - Dark Blue: hsl(218, 23%, 16%)

export default function App() {
  const [adviceText, setAdviceText] = useState([]);

  const fetchAdviceHandler = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip);
    setAdviceText(data.slip);
  };

  useEffect(() => {
    fetchAdviceHandler();
  }, []);

  return (
    <>
      <div className="bg-slate-900 h-screen flex justify-center items-center">
        <div className="bg-slate-700 w-[90%] text-center px-8 pt-8 rounded-xl flex-row justify-center items-center space-y-3 md:w-[500px]">
          <h3 className="text-sm  text-center text-green-400 tracking-widest uppercase">
            Advice #{adviceText.id}
          </h3>
          <p className="text-slate-300 text-2xl font-bold">
            "{adviceText.advice}"
          </p>
          <picture className="mx-auto">
            <source media="(min-width: 768px)" srcSet={pauseDesktop} />
            <img src={pauseMobile} alt="" className="mx-auto mt-8" />
          </picture>
          <div className="bg-green-400 rounded-3xl w-[52px] mx-auto flex relative top-[25px] align-center justify-center p-4 hover:drop-shadow-[0_35px_35px_hsl(150, 100%, 66%)]">
            <button onClick={fetchAdviceHandler}>
              <img
                className="rounded-md bg-green-400 w-[25px]"
                src={dice}
                alt="dice"
              />
            </button>
          </div>
        </div>
      </div>
      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mukund Sadani</a>.
      </div> */}
    </>
  );
}
