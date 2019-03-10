# LES-API


200 - success
201 - put/post success
204 - no body
400 - request error ( invalid filter, invalid parameter)
401 - authentication
403 - forbidden ( cliente trying to update a product)
500 - data base error, code error

res.json default is 200

Uma controller orquestra chamadas dos servicos, que fazem trabalhos especificos, que chamam reporistorios