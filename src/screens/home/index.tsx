import React, { useContext } from 'react';
import { StandardText } from '../../components/texts/styles';
import { Container } from '../../components/global/styles';
import { AuthContext } from '../../context/auth';

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <StandardText>Email: {user?.username}</StandardText>
      <StandardText>Nome: {user?.nome}</StandardText>
      <StandardText>Status: {user?.status}</StandardText>
      <StandardText>Perfil Acesso: {user?.perfilAcesso}</StandardText>
      <StandardText>Nome Organização: {user?.nomeOrganizacao}</StandardText>
      <StandardText>Id Organização: {user?.organizacaoId}</StandardText>
    </Container>
  );
}