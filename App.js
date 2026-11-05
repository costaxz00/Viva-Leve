import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet
} from 'react-native';

export default function App() {
  const [tela, setTela] = useState('Início');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [treino, setTreino] = useState('');
  const [exercicio, setExercicio] = useState('');
  const [duracao, setDuracao] = useState('');
  const [alimento, setAlimento] = useState('');
  const [calorias, setCalorias] = useState('');
  const [refeicao, setRefeicao] = useState('');

  const [treinos, setTreinos] = useState([]);
  const [alimentacao, setAlimentacao] = useState([]);

  const campo = (titulo, valor, alterar, dica) => (
    <TextInput
      style={styles.input}
      placeholder={dica}
      placeholderTextColor="#888"
      value={valor}
      onChangeText={alterar}
    />
  );

  const botao = (texto, acao) => (
    <TouchableOpacity style={styles.botao} onPress={acao}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Viva-Leve 🌿</Text>
      <Text style={styles.subtitulo}>Saúde e bem-estar</Text>

      <ScrollView style={{ flex: 1 }}>
        {tela === 'Início' && (
          <View>
            <Text style={styles.titulo}>Olá! Bem-vindo(a)</Text>
            <Text style={styles.texto}>
              Cuide da sua saúde e acompanhe seus hábitos.
            </Text>
            <View style={styles.card}>
              <Text style={styles.texto}>Treinos registrados</Text>
              <Text style={styles.numero}>{treinos.length}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.texto}>Refeições registradas</Text>
              <Text style={styles.numero}>{alimentacao.length}</Text>
            </View>
          </View>
        )}

        {tela === 'Cadastro' && (
          <View>
            <Text style={styles.titulo}>Meu Cadastro</Text>
            {campo('Nome', nome, setNome, 'Digite seu nome')}
            {campo('Idade', idade, setIdade, 'Digite sua idade')}
            {campo('Peso', peso, setPeso, 'Digite seu peso')}
            {botao('Salvar cadastro', () => alert('Cadastro salvo!'))}
          </View>
        )}

        {tela === 'Treinos' && (
          <View>
            <Text style={styles.titulo}>Meus Treinos</Text>
            {campo('Treino', treino, setTreino, 'Nome do treino')}
            {campo('Exercício', exercicio, setExercicio, 'Nome do exercício')}
            {campo('Duração', duracao, setDuracao, 'Duração em minutos')}
            {botao('Adicionar treino', () => {
              if (!treino || !exercicio || !duracao) {
                alert('Preencha todos os campos');
                return;
              }
              setTreinos([...treinos, { treino, exercicio, duracao }]);
              setTreino('');
              setExercicio('');
              setDuracao('');
            })}
            {treinos.map((item, i) => (
              <View style={styles.card} key={i}>
                <Text style={styles.texto}>{item.treino}</Text>
                <Text style={styles.texto}>{item.exercicio}</Text>
                <Text style={styles.texto}>{item.duracao} minutos</Text>
              </View>
            ))}
          </View>
        )}

        {tela === 'Alimentação' && (
          <View>
            <Text style={styles.titulo}>Minha Alimentação</Text>
            {campo('Alimento', alimento, setAlimento, 'Nome do alimento')}
            {campo('Calorias', calorias, setCalorias, 'Calorias (opcional)')}
            {campo('Refeição', refeicao, setRefeicao, 'Ex.: Café da manhã')}
            {botao('Adicionar refeição', () => {
              if (!alimento || !refeicao) {
                alert('Preencha o alimento e a refeição');
                return;
              }
              setAlimentacao([...alimentacao, { alimento, calorias, refeicao }]);
              setAlimento('');
              setCalorias('');
              setRefeicao('');
            })}
            {alimentacao.map((item, i) => (
              <View style={styles.card} key={i}>
                <Text style={styles.texto}>{item.alimento}</Text>
                <Text style={styles.texto}>{item.refeicao}</Text>
                <Text style={styles.texto}>{item.calorias} calorias</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.menu}>
        {['Início', 'Cadastro', 'Treinos', 'Alimentação'].map(item => (
          <TouchableOpacity key={item} onPress={() => setTela(item)}>
            <Text style={styles.menuTexto}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8F3',
    padding: 20,
    paddingTop: 45
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#218653'
  },
  subtitulo: {
    color: '#555',
    marginBottom: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#218653',
    marginVertical: 20
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8
  },
  numero: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#218653'
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginVertical: 8
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B8D8C3',
    borderRadius: 10,
    padding: 14,
    marginVertical: 7,
    color: '#222'
  },
  botao: {
    backgroundColor: '#218653',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10
  },
  textoBotao: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#B8D8C3'
  },
  menuTexto: {
    color: '#218653',
    fontSize: 12,
    fontWeight: 'bold'
  }
});
