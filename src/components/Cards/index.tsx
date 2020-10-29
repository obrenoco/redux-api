import React, { useEffect, useState } from 'react';
import api from '../../services';

import { CardsList, Value } from './styles';

interface ContractProps {
  dataCards: {
    billing: {
      monthlyBilling: number;
    };
    contracts: {
      activeContracts: number;
      overdueContracts: number;
      overdueValue: number;
      soldContracts: number;
      totalContracts: number;
      totalReceivedValue: number;
    };
  };
  reference: {
    referenceMonth: string;
    referenceYear: string;
  };
}

const Cards: React.FC = () => {
  const [contract, setContract] = useState<ContractProps>();

  useEffect(() => {
    api.get('').then(response => {
      setContract(response.data);
    });
  }, []);


  return (
      <CardsList>
          <h3>Ativos</h3>
          <Value>
            <strong>R$ {contract?.reference.referenceMonth}</strong>
          </Value>
      </CardsList>
  );
};

export default Cards;
