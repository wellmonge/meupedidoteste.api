export const SUCCESS_MESSAGE = "Operação realizado com sucesso!";
export const ERROR_MESSAGE = "Ocorreu erro ao realizar operação!";

export const successResult = (data) =>{
  return {    
      Success: true,
      Data: result,
      Message: SUCCESS_MESSAGE
  } 
}

export const errorResult = (serverMessage) =>{
  return {
      Success: false,
      Message: ERROR_MESSAGE,
      ServerMessage: serverMessage
  } 
}