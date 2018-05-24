exports.SUCCESS_MESSAGE = 'Operação realizado com sucesso!';
exports.ERROR_MESSAGE = 'Ocorreu erro ao realizar operação!';

exports.successResult = data => ({
  Success: true,
  Data: data,
  Message: SUCCESS_MESSAGE
});

exports.errorResult = serverMessage => ({
  Success: false,
  Message: ERROR_MESSAGE,
  ServerMessage: serverMessage
});

exports.defaultClient = {
  name: 'Boba Fetch'
};

exports.defaultProduct = {
  name: 'A280 blaster rifle',
  unitPrice: 10000,
  multiple: 1
};

exports.defaultUser = {
  username: 'meupedidoauth',
  password: 'meupedidoauth2018'
};