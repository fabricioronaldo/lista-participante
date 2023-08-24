import React, { useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');
    

    function handleParticipantAdd() {
        if(participants.includes(participantName)){
            return Alert.alert('Participante',`Já existe o participante ${participantName} na lista. `);
        }
        
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover',`Deseja realmente remover o participante ${name} da lista?`,[
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado')
            },
            {
                text: 'Não'
            }
        ])
        console.log(`O participante ${name} será removido da lista`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Terça, 22 de Agosto de 2023.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
    
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} 
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ainda não existe particiapntes no evento. Adicione participantes a sua lista de presença. 
                    </Text>
                )}
            />
        </View>
    );
}