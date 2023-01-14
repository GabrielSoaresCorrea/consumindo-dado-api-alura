async function buscaEndereco(cep) {

    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""

    try {
      
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPconvertida = await consultaCEP.json()

        if(consultaCEPconvertida.erro) throw Error('CEP não existente!')

        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')

        cidade.value = consultaCEPconvertida.localidade
        logradouro.value = consultaCEPconvertida.logradouro
        estado.value = consultaCEPconvertida.uf

        console.log(consultaCEPconvertida)
        return consultaCEPconvertida

    } catch(erro){
        mensagemErro.innerHTML = `<p>CEP não existente</p>`
        console.log(erro)
        
    }
}

const cep = document.getElementById('cep')
cep.addEventListener('focusout', () => {
    buscaEndereco(cep.value)
})