import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

export default function Home() {
  const router = useRouter();
  const [nomeUsuario, setNomeUsuario] = React.useState('');
  // console.log('retorno do useState', nomeUsuario, setNomeUsuario);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz da natureza</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${nomeUsuario}`);
              // console.log('fazendo uma submissão pelo react');
            }}
            >
              <Input
                nomeUsuario="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  // console.log(infosDoEvento.target.value);
                  setNomeUsuario(infosDoEvento.target.value);
                }}
                placeholder="Coloque seu nome aqui"
                value={nomeUsuario}
              />
              <Button type="submit" disabled={nomeUsuario.length === 0}>
                {`Jogar ${nomeUsuario}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Loren ipsum </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/codeprates" />
    </QuizBackground>
  );
}
