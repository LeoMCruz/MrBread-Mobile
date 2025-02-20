import React from "react";
import { Logo } from "../views/styles";
import MrBread from "../../assets/mrBread.svg";

export default function MrLogo(){
    return(
        <Logo>
            <MrBread width={200} height={200} />
        </Logo>
    );
}