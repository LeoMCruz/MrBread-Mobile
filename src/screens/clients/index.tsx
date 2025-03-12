import React, { useState } from "react";
import { StandardText } from "../../components/texts/styles";
import BasicListScreen from "../../components/contents/basicListScreen";

export default function Clients(){
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(0);
    return(
        <BasicListScreen
            add={false}
            setSearchText={setSearchText}
            setPage={setPage}
        />
    );
}