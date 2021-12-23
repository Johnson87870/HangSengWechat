import { useEffect, useState } from "react";
import { HeaderTextCom } from "../../components/HeaderText";
import "./idv.css";
export const IdvPage = (props) => {
  const [securityCode, setSecurityCode] = useState("");
  const [telPhoneNum, setTelPhoneNum] = useState("");

  const securityCodeOnChange = (e) => {
    const { value } = e.target;
    setSecurityCode(value);
  };

  const areaCodeOnChange = (e) => {
    const { value } = e.target;
    setTelPhoneNum(value);
  };

  const isNext = () => {
    if (securityCode && telPhoneNum) {
      return false;
    }
    return true;
  };

  const nextClick = () => {
    props.history.push("./ivc");
  };

  useEffect(() => {
    console.log("IdvPages");
  });
  return (
    <>
      <HeaderTextCom title="输入电子身份认证编号" />
      <div className="idv">
        <div className="security">
          {securityCode ? <p className="security-label">保安编码</p> : ""}
          <input
            className="security-input input-init"
            type="text"
            placeholder="保安编码"
            onChange={securityCodeOnChange}
          />
          <p className="security-tips">
            你可以在短讯内查看你的电子身份验证编码。
          </p>
        </div>
        <div className="tel-phone">
          <div className="area-code">
            <p className="area-code-label">区号</p>
            <div className="area-code-value">+86</div>
          </div>
          <div className="phone-number">
            {telPhoneNum ? <p>电话号码</p> : ""}
            <input
              className="input-init phone-number-value"
              type="tel"
              placeholder="电话号码"
              onChange={areaCodeOnChange}
            />
          </div>
        </div>
        <button className="nextBtn" disabled={isNext()} onClick={nextClick}>
          下一步
        </button>
      </div>
    </>
  );
};
