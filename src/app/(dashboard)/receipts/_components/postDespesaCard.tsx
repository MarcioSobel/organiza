interface Despesa {
    id?: number; 
    categoria: string;
    nomeDaDespesa: string;
    dataDeVencimento: string;
    valor?: number;
  }
  
  export const PostDespesa = (categoria: string, nomeDaDespesa: string, dataDeVencimento:string, valor: number): void => {
    const novaDespesa: Despesa = { categoria, nomeDaDespesa, dataDeVencimento, valor };
  
    fetch('http://localhost:3010/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaDespesa),
    }).then((response) => {
      if (!response.ok) {
        console.error('Erro ao adicionar despesa', response.statusText);
      }
    });
  };