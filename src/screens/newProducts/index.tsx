import React from 'react';
import { StandardText } from '../../components/texts/styles';
import { AvoidView, SafeAreaView, ScrollView } from '../../components/global/styles';

export default function NewProducts(){
    return(
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-start'
            }}
            >
                <AvoidView>
                </AvoidView>
            </ScrollView>
        </SafeAreaView>
    );
}