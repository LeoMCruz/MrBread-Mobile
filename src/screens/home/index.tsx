import React, { useContext } from 'react';
import { StandardText } from '../../components/texts/styles';
import { AvoidView, Container, SafeAreaView, ScrollView } from '../../components/global/styles';
import { AuthContext } from '../../context/auth';
import Background from '../../components/contents/publicbackground';
import MrLogo from '../../components/contents/logo';
import SignInContent from '../../components/contents/signInContent';
import HomeContent from '../../components/contents/homeContent';
import { Title } from '../../components/views/styles';
import Logout from '../../components/contents/logout';
import DataContent from '../../components/contents/dataContent';

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView>
          <Background
            children={
              <>
              <Logout />
              <DataContent />
              
              </>
            }
          />
          <HomeContent/>
    </SafeAreaView>
  );
}