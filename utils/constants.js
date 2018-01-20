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

export const defaultClient = {
  name: 'Boba Fetch',
};

export const defaultProduct = {
  name: 'A280 blaster rifle',
  unitPrice: 10000,
  multiple: 1,
};

export const defaultUser = {
  username: 'meupedidoauth',
  password: 'meupedidoauth2018',
};
