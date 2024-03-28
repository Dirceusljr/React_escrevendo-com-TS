import React from "react";
import style from "./Botao.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Botao({ children, type, onClick }: Props) {
  return (
    <button 
        type={type} 
        className={style.botao} 
        onClick={onClick}
    >
      {children}
    </button>
  );
}
// class Botao1 extends React.Component<{ children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}> {
//     render() {
//         const {type = "button", onClick } = this.props;
//         return (
//             <button type={type} className={style.botao} onClick={onClick}>
//                 { this.props.children }
//             </button>
//         )
//     }
// }

export default Botao;
