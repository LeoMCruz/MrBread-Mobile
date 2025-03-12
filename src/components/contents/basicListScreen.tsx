import  React, { useState } from 'react';
import { FlatListArea, FlatListItems } from '../views/styles';
import { CreateButton } from '../buttons/styles';
import { SafeAreaView } from '../global/styles';
import SearchArea from './searchArea';
import { Ionicons } from '@expo/vector-icons';
import ProductsList from './productsList';
import { useNavigation } from '@react-navigation/native';
import { AdminNavigationProp, AdminStackParams } from '../../routes/adminStack';
import { MainModal } from './modal';

export default function BasicListScreen({children, modal, setSearchText, add, setPage}
    : {children?: React.ReactNode, modal?: React.ReactElement, setSearchText: (text: string) => void, add: boolean, setPage: (page: number) => void}){
    const navigation = useNavigation<AdminNavigationProp>();
    const [isVisible, setIsVisible] = useState(false);
    const closeModal = () => setIsVisible(prev => !prev);
    return(
        <SafeAreaView>
            <SearchArea 
                setSearchText={setSearchText}
                setPage={setPage}
            />
            <FlatListArea>
                {children}
            </FlatListArea>
            {add && <CreateButton onPress={() => setIsVisible(prev => !prev)}>
                <Ionicons name="add-circle-outline" size={40} color="#4657a1" />
            </CreateButton>}
            {modal && <MainModal
                isVisible={isVisible}
                closeModal={() => setIsVisible(prev => !prev)}
                children={
                    React.cloneElement(modal as React.ReactElement, { closeModal })
                }
            />}
        </SafeAreaView>
    );
}