import React, {useState} from 'react';

import {
  Container,
  Card,
  IconCard,
  Data,
  NameLabel,
  DoubtLabel,
  Image
} from './styles';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ModalDoubt from '../../components/ModalDoubt'

const DoubtCard = ({doubtId, data, navigation})  => {
  const [showModal, setShowModal] = useState(false);

  const handleDoubt = async () => {
    setShowModal(true);
  }

  return (
    <>
      <Container>
        <Card
          key={doubtId}
          onPress={handleDoubt}
        >
          <IconCard>
            <Image source={{uri: data.doctor.path_avatar}} resizeMode="center"/>
          </IconCard>

          <Data>
            <NameLabel>{data.doctor.username?? data.name} {data.doctor.surname}</NameLabel>
            <DoubtLabel> - {(data.doubt).length > 30
              ?
                (((data.doubt).substring(0, 50)) + '...')
              : data.doubt
              ?? 'Sua dúvida'}
            </DoubtLabel>
            <DoubtLabel style={{color: '#111'}}> - Resposta</DoubtLabel>
          </Data>

          <Icon name="whatsapp" size={35} color="#1f1" />
        </Card>

      </Container>
      <ModalDoubt
        isActive={true}
        visible={showModal}
        justifyContent={'center'}
        onClose={() => setShowModal(false)}
        navigation={navigation}
        data={data}
      />
    </>
  );
};

export default DoubtCard;
