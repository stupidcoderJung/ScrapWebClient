import React from "react";
import styled from "styled-components";
import KaKaoLogin from "react-kakao-login";

class KakaoSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "kakao",
      id: "",
      email: "",
      provider: "",
    };
  }

  responseKaKao = (res) => {
    this.setState({
      data: res,
      email: res.profile,
    });
    console.log(JSON.stringify(this.state.email));
    alert(JSON.stringify(this.state.data));
  };

  responseFail = (err) => {
    alert(err);
  };

  render() {
    return (
      <>
        <div>
          <h1>카카오톡 간편 로그인</h1>
          <h4>로그인 후 더 많은 혜택을 누리세요!</h4>
          {/* <StKaKaoLogin>
                      <img src={img} alt="a" onClick={this.loginWithKakao} />
                  </StKaKaoLogin> */}
          <br></br>
          <KaKaoBtn
            jsKey={"a5d849c953431eac1be8eb9281ed893b"}
            buttonText="KaKao"
            onSuccess={this.responseKaKao}
            onFailure={this.responseFail}
            getProfile={true}
          />
        </div>
      </>
    );
  }
}
const StKaKaoLogin = styled.div`
  cursor: pointer;
  /* border-radius:10px; */
  /* width: 200px; */
  /* &:hover{
      box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
  } */
`;

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default KakaoSignUp;
