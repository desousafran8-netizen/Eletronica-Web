document.getElementById('cadastro-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede que a página recarregue ao enviar o formulário

    // 1. Coleta dos dados do formulário
    const nome = document.getElementById('nome-cliente').value;
    const telefone = document.getElementById('telefone-cliente').value;
    const produto = document.getElementById('produto-servico').value;
    // Pega o valor ou define "Não informado" se o campo estiver vazio
    const modelo = document.getElementById('modelo-produto').value || "Não informado";
    const observacoes = document.getElementById('observacoes').value || "Nenhuma.";
    
    // Gera a data atual
    const data = new Date().toLocaleDateString('pt-BR');

    // 2. Formatação do Telefone (para exibir bonitinho)
    // Ex: 99984808301 -> (99) 98480-8301
    let telefoneFormatado = telefone;
    if (telefone.length === 11) {
        telefoneFormatado = `(${telefone.substring(0,2)}) ${telefone.substring(2,7)}-${telefone.substring(7)}`;
    }

    // 3. Monta o conteúdo HTML da Nota de Serviço
    const notaHTML = `
        <div style="border: 1px solid #000; padding: 20px; margin-top: 20px;">
            <p><strong>Número da OS:</strong> ${Date.now().toString().slice(-6)}</p>
            <p><strong>Data de Emissão:</strong> ${data}</p>
            <hr>
            <h4>Informações do Cliente:</h4>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Telefone:</strong> ${telefoneFormatado}</p>
            <hr>
            <h4>Detalhes do Serviço:</h4>
            <p><strong>Produto/Serviço:</strong> ${produto}</p>
            <p><strong>Modelo:</strong> ${modelo}</p>
            <p><strong>Observações/Defeito:</strong> <br> ${observacoes}</p>
            <hr>
            <p><strong>Técnico Responsável:</strong> ______________________</p>
            <p><strong>Assinatura do Cliente:</strong> ______________________</p>
        </div>
    `;

    // 4. Exibe a nota na tela
    document.getElementById('nota-conteudo').innerHTML = notaHTML;
    document.getElementById('nota-fiscal-area').style.display = 'block';
    document.getElementById('cadastro-form').style.display = 'none'; // Esconde o formulário
});