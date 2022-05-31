import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Spacer } from '../../../../../components/Spacer';
import { Text } from '../../../../../components/Text';
import RegisterLayout from '../../../../register/_helpers/RegisterLayout';

export const AboutQRcode = () => (
  <RegisterLayout>
    <Text font="title" textAlign="left">
      Termos e condições de uso
    </Text>

    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Spacer amount={4} />
        <Text textAlign="left">1. OBJETO.</Text>
        <Spacer amount={4} />
        <Text textAlign="left">
          1.1. De acordo com o presente Contrato, o Âmbito Jurídico proverá ao
          Usuário serviços gratuitos e pagos de informação via internet
          (“Serviço”), tais como Notícias do Âmbito Jurídico, Revista Âmbito
          Jurídico, Classificados, Diretório de Links e outros que o Âmbito
          Jurídico possa vir a disponibilizar. O uso do Serviço implica na
          aceitação, pelo Usuário, dos termos deste Contrato.
        </Text>
        <Spacer amount={4} />
        <Text textAlign="left">
          1.2. O Serviço estará disponível 24 horas por dia, 7 dias por semana.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          1.3. Não haverá limite de tempo de uso do Serviço Gratuito pelo
          Usuário, salvo interrupções ocasionadas por serviços de manutenção no
          sistema, falhas operacionais das empresas fornecedoras de energia
          elétrica e serviços de telecomunicações, caso fortuito ou força maior,
          pelos quais o Âmbito Jurídico não se responsabilizará sob nenhuma
          circunstância.
        </Text>
        <Spacer amount={4} />
        <Text textAlign="left">
          1.3.1 O Serviço Pago terá duração de tempo de acordo com o tempo de
          assinatura contratada pelo Usuário.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          1.3.2 Entende-se por Serviço Pago, aquele que for assim instituído, a
          conveniência do Âmbito Jurídico, para o qual deve o Usuário aderir
          mediante cadastro específico (além do cadastro gratuito no portal) e
          prévio pagamento. São pagos os seguintes serviços: Assessoria em
          Cálculos Judiciais e Extrajudicias, Programa de Rádio Âmbito Jurídico,
          Cursos a Distância, Seminários Virtuais (apenas quando o usuário
          quiser receber certificado de participação), Simulados virtuais e o
          acesso ao sistema de processo eletrônico do Âmbito Jurídico.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          1.4. O Serviço poderá ser alterado ou cancelado a qualquer tempo
          unilateralmente pelo Âmbito Jurídico, independentemente de notificação
          ao Usuário e sem que qualquer multa ou indenização seja devida pela
          mesma ao Usuário. Neste caso, Âmbito Jurídico avisará com antecedência
          de 15 dias, através do e-mail do Usuário, cadastrado no Serviço.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          1.4.1 Os serviços serão interrompidos imediatamente no caso de mudança
          regulatória que torne impossível a continuidade da prestação destes
          serviços sem a cobrança de valores mensais.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          1.4.2 No caso de cancelamento de Serviço Pago por parte do Âmbito
          Jurídico, este se compromete a devolver o valor proporcional ao tempo
          de contrato não utilizado pelo Usuário.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          1.5. Âmbito Jurídico poderá também disponibilizar outros serviços
          cobrados no futuro, aos quais o Usuário poderá aderir ou não, sem
          prejuízo do Serviço ora contratado.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          2. USO DO SERVIÇO. 2.1. Para fazer uso do Serviço, o Usuário deverá
          preencher corretamente a Ficha Cadastral, fornecendo todos os dados
          que lhe forem solicitados.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          2.1.1 O usuário declara que os dados do cadastro são verídicos e
          corretos e reconhece ser de sua responsabilidade as incorreções por
          ventura existentes.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          2.2. Ao contratar o Serviço, o Usuário estará declarando ser maior de
          18 anos ou menor de 18 anos devidamente autorizado pelos pais ou
          responsáveis a aceitar os termos deste Contrato.
        </Text>

        <Spacer amount={4} />
        <Text textAlign="left">
          2.3. O espaço em disco reservado para cada Usuário para armazenamento
          de dados (Comunidade Âmbito Jurídico) será limitado às informações ali
          permitidas. O Usuário desde já reconhece que o Âmbito Jurídico não
          poderá ser responsabilizada por possíveis falhas no armazenamento de
          dados, nem pela má utilização por parte de terceiros.
        </Text>
        <Spacer amount={24} />
      </ScrollView>
    </View>
  </RegisterLayout>
);
