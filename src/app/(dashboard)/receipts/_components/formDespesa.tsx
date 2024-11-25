"use client"
import React, { useState } from 'react';
import { PostDespesa } from './postDespesaCard';

const FormularioDespesa: React.FC = () => {
  const [categoria, setCategoria] = useState('');
  const [nomeDaDespesa, setNomeDaDespesa] = useState('');
  const [dataDeVencimento, setDataDeVencimento] = useState('');
  const [valor, setValor] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    PostDespesa(categoria, nomeDaDespesa, dataDeVencimento, valor);
    setCategoria('');
    setNomeDaDespesa('');
    setDataDeVencimento('');
    setValor(0);
  };

  return (
    <form onSubmit={handleSubmit} method='dialog' className=" w-full flex flex-col justify-center items-start gap-2">
      <div className='flex flex-col'>
        <label>Categoria</label>
        <input className='bg-white p-1 border border-off-black rounded-lg hover:border-r-2 hover:border-b-2 hover:border-off-grey'
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <label>Nome da Despesa:</label>
        <input className='bg-white p-1 border border-off-black rounded-lg hover:border-r-2 hover:border-b-2 hover:border-off-grey'
          type="text"
          value={nomeDaDespesa}
          onChange={(e) => setNomeDaDespesa(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <label>Data de Vencimento:</label>
        <input className='bg-white p-1 border border-off-black rounded-lg hover:border-r-2 hover:border-b-2 hover:border-off-grey'
          type="text"
          value={dataDeVencimento}
          onChange={(e) => setDataDeVencimento(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <label>Valor:</label>
        <input className='bg-white p-1 border border-off-black rounded-lg hover:border-r-2 hover:border-b-2 hover:border-off-grey justify-items-end'
          type="text"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
      </div>
      <button  className="px-4 py-2 bg-blue-400 self-center rounded-lg border hover:border-r-2 hover:border-b-2 border-off-black hover:bg-gray-400 active:bg-blue-600" type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default FormularioDespesa;