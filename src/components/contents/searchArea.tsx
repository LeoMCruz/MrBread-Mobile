import React, { useState } from 'react';
import { SearchView } from '../views/styles';
import { PublicInput } from '../inputs/styles';
import { EvilIcons } from '@expo/vector-icons';
import { FakeButton } from '../buttons/styles';

export default function SearchArea({ setSearchText, setPage }: { setSearchText: (text: string) => void, setPage: (page: number) => void }){
    const [storedText, setStoredText] = useState("");

    function handleSearch(text: string){
        setPage(0);
        setSearchText(text);
    }
    return(
        <SearchView>
            <PublicInput
                xSize={90}
                ySize={40}
                placeholder="Pesquisar"
                value={storedText}
                onChangeText={(text: string) => {
                    setStoredText(text);
                    handleSearch(text);
                }}
            />
            {storedText.length > 0 && (
                <FakeButton onPress={() => {setStoredText(""), setSearchText("")}}>
                    <EvilIcons name="close" size={20} color="black" />
                </FakeButton>
            )}
        </SearchView>
    );
}