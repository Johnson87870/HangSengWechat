import { useEffect, useState, useRef } from "react";
import { HeaderTextCom } from "../../components/HeaderText";
import "./ivc.css";
export const IvcPage = () => {
  const [verCodes, setVerCodes] = useState();
  const [focus, setFocus] = useState();
  const [isNext, setIsNext] = useState(true);
  const [currentTimes, setCurrentTimes] = useState(0);
  const [timing, setTiming] = useState(false);
  const curInputRef = useRef();
  const codeChange = (e) => {
    const { value } = e.target;
    const codeLen = value.length;
    setVerCodes(value);
    if (codeLen === 6) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }
  };
  const codeClick = () => {
    curInputRef?.current?.focus();
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const retryCode = () => {
    if (currentTimes <= 0 && !timing) {
      setCurrentTimes(60);
      setTiming(true);
    }
  };
  const nextClick = () => {
    console.log("nextClick");
  };
  useEffect(() => {
    console.log("IvcPages");
    let interval = 0;
    if (timing) {
      interval = window.setInterval(() => {
        setCurrentTimes((preSecond) => {
          console.log("preSecond", preSecond);
          if (preSecond <= 0) {
            setTiming(false);
            clearInterval(interval);
            return 0;
          }
          return preSecond - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timing]);
  return (
    <>
      <HeaderTextCom title="填写手机短信验证码" />
      <div className="ivc">
        <p className="ivc-title">已发送到手机号</p>
        <p className="ivc-phone-num">
          +86 <span>18719007964</span>
        </p>
        <div className="verification-code">
          <ul className="code-container" onClick={() => codeClick()}>
            {Array(6)
              .fill("")
              .map((num, index) => {
                return (
                  <li
                    className={[
                      "fieldWrap",
                      verCodes?.[index] ? "highlight" : "",
                      verCodes?.length === index && focus ? focus : "",
                    ].join(" ")}
                    key={index}
                  >
                    {verCodes?.[index]}
                  </li>
                );
              })}
          </ul>
          <input
            className="ivc-input"
            type="tel"
            ref={curInputRef}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={codeChange}
            maxLength={6}
          />
          <button className="retryBtn" disabled={timing} onClick={retryCode}>
            {timing
              ? `${currentTimes}秒后重新发送短信验证码`
              : "重新获取验证码"}
          </button>
          <div></div>
        </div>
        <button className="nextBtn" disabled={isNext} onClick={nextClick}>
          下一步
        </button>
      </div>
    </>
  );
};
