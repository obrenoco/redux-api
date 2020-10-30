import React, { useEffect, useState } from 'react';
import api from '../../services';
import formatDataCards from '../../utils/formatDataCards';

import { CardsList, Value } from './styles';

interface ContractProps {
  data: {
    dataCards: {
      billing: {
        monthlyBilling: number;
      };
      contracts: {
      activeContracts: number,
      overdueContracts: number,
      overdueValue: number,
      soldContracts: number,
      totalContracts: number,
      totalReceivedValue: number
        }
    }
  }
}

const Cards: React.FC = () => {
  const [contract, setContract] = useState<ContractProps>();

  
  
  useEffect(() => {
    api.get('').then(response => {
      setContract(response.data);
    });
  }, []);

  const monthlyBilling = contract?.data.dataCards.billing.monthlyBilling!;
  const activeContracts = contract?.data.dataCards.contracts.activeContracts!;
  const overdueContracts = contract?.data.dataCards.contracts.overdueContracts!;
  const overdueValue = contract?.data.dataCards.contracts.overdueValue!;
  const soldContracts = contract?.data.dataCards.contracts.soldContracts!;
  const totalContracts = contract?.data.dataCards.contracts.totalContracts!;
  const totalReceivedValue = contract?.data.dataCards.contracts.totalReceivedValue!;


  const formatedMonthlyBilling = formatDataCards(monthlyBilling);
  const formatedActiveContracts = formatDataCards(activeContracts);
  const formatedOverdueContracts = formatDataCards(overdueContracts);
  const formatedOverdueValue = formatDataCards(overdueValue);
  const formatedSoldContracts = formatDataCards(soldContracts);
  const formatedTotalContracts = formatDataCards(totalContracts);
  const formatedReceivedValue = formatDataCards(totalReceivedValue);


  return (
      <CardsList>
          <h3>Ativos</h3>
          <Value>
            <strong>R$ {formatedMonthlyBilling}</strong>
          </Value>

          <h3>Ativos</h3>
          <Value>
            <strong>R$ {formatedActiveContracts}</strong>
          </Value>

          <h3>Ativos</h3>
          <Value>
            <strong>R$ {formatedOverdueContracts}</strong>
          </Value>

          <h3>Ativos</h3>
          <Value>
            <strong>R$ {formatedOverdueValue}</strong>
          </Value>

          <h3>Ativos</h3>
          <Value>
            <strong>R$ {formatedSoldContracts}</strong>
          </Value>

          <h3>Ativos</h3>
          <Value>
            <strong>R$ {formatedTotalContracts}</strong>
          </Value>

          <h3>Ativos</h3>
          <Value>
            <strong>R$ {formatedReceivedValue}</strong>
          </Value>
      </CardsList>
  );
};

export default Cards;
