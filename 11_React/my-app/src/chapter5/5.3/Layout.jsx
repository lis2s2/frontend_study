import Header from "./Header";
import Footer from "./Footer";


function Layout(props) {
  return (
    <>
    {/* {<Header title = "헤더입니다." />} */}
    {props.header}
      레이아웃 크기는 가로 {props.width}, 세로 {props.height}
    {props.footer}
    {/* {<Footer />} */}
    </>
  );
}

export default Layout;