"use client"
import { Receipt } from "./cardDespesa";

// import { useState, useEffect } from "react";


export const DeletarDespesa = (despesa: Receipt): void => {
    const id = despesa.id;
   
    fetch(`http://localhost:3010/card/${id}`, {
        method: 'DELETE',
            }).then((response) => {
        if (!response.ok) {
            console.error('Erro ao deletar despesa', response.statusText);
        }
        else {
            console.log('Despesa deletada com sucesso');
        }
       
    });

};