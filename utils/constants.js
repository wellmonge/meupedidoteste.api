export const SUCCESS_MESSAGE = 'Operação realizado com sucesso!';
export const ERROR_MESSAGE = 'Ocorreu erro ao realizar operação!';

export const successResult = data => ({
  Success: true,
  Data: data,
  Message: SUCCESS_MESSAGE,
});

export const errorResult = serverMessage => ({
  Success: false,
  Message: ERROR_MESSAGE,
  ServerMessage: serverMessage,
});
