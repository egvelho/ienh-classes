import streamlit as st

# Configuração da página
st.set_page_config(page_title="Exercícios de Python", layout="wide")

st.title("🚀 Conversor de Exercícios: Jupyter para Streamlit")

# Menu lateral para navegação entre as questões
questao = st.sidebar.selectbox(
    "Escolha a Questão",
    [f"Questão {i}" for i in range(1, 17)]
)

st.header(f"Executando {questao}")
st.divider()

# --- Lógica das Questões ---

if questao == "Questão 1":
    st.subheader("Padronização de E-mail")
    email_bruto = st.text_input("Digite o email")
    if email_bruto:
        email_padronizado = email_bruto.strip()
        st.write("Resultado:")
        st.code(email_padronizado)

elif questao == "Questão 2":
    st.subheader("Recibo de Compra")
    nome_cliente = st.text_input("Digite o nome do cliente")
    valor_compra = st.number_input("Digite o valor da compra", min_value=0.0, step=0.01)
    if st.button("Gerar Mensagem"):
        mensagem = f"{nome_cliente} agradecemos sua compra no valor de R${valor_compra:.2f}."
        st.success(mensagem)

elif questao == "Questão 3":
    st.subheader("Divisão de Registro")
    registro = st.text_input("Digite a linha de registro (ex: Nome;Cidade;Idade)")
    if registro:
        campos = registro.split(';')
        st.write(f"Quantidade de campos: {len(campos)}")
        for i, campo in enumerate(campos):
            st.write(f"Campo {i+1}: **{campo}**")

elif questao == "Questão 4":
    st.subheader("Gerador de Identificador Único")
    cd = st.text_input("Código do Centro de Distribuição")
    cat = st.text_input("Código da Categoria")
    lote = st.text_input("Número do Lote")
    if st.button("Gerar Código"):
        identificador_unico = "-".join([cd, cat, lote])
        st.info(f"Identificador: {identificador_unico}")

elif questao == "Questão 5":
    st.subheader("Análise de Crachá")
    cracha = st.text_input("Digite o código do crachá (Ex: CRA-123456-SET-M)")
    if cracha and len(cracha) >= 15:
        codigo_interno = cracha[4:10]
        setor = cracha[11:14]
        codigo_turno = cracha[-1]
        
        turnos = {'M': 'Manhã', 'T': 'Tarde', 'N': 'Noite'}
        turno_extenso = turnos.get(codigo_turno, "Turno Inválido")
        
        st.write(f"**Código Interno:** {codigo_interno}")
        st.write(f"**Setor:** {setor}")
        st.write(f"**Turno:** {turno_extenso}")

elif questao == "Questão 6":
    st.subheader("Higienização de Relatório")
    linha_bruta = st.text_input("Digite a linha de dados (separada por ;)")
    if linha_bruta:
        campos_limpos = [campo.strip() for campo in linha_bruta.split(';')]
        resultado_final = "/".join(campos_limpos)
        st.code(resultado_final)

elif questao == "Questão 7":
    st.subheader("Validação de Arquivos TI")
    nome_arquivo = st.text_input("Nome do arquivo")
    prefixo_ti = st.text_input("Prefixo do departamento")
    if st.button("Validar"):
        comeca_com_prefixo = nome_arquivo.startswith(prefixo_ti)
        termina_com_extensao = nome_arquivo.endswith(('.py', '.txt'))
        
        if comeca_com_prefixo and termina_com_extensao:
            st.success("VÁLIDO")
        else:
            if not comeca_com_prefixo: st.error("INVÁLIDO: Prefixo incorreto.")
            if not termina_com_extensao: st.error("INVÁLIDO: Extensão não permitida.")

elif questao == "Questão 8":
    st.subheader("Decodificador de Macro")
    macro = st.text_input("Digite a macro (8 caracteres)", max_chars=8)
    if len(macro) == 8:
        st.write(f"**Coordenadas:** X={macro[0]}, Y={macro[1]}")
        st.write(f"**Ação:** {macro[2:5]}")
        
        tipos = {'A': 'Ataque', 'E': 'Especial'}
        st.write(f"**Tipo:** {tipos.get(macro[5], 'Comum')}")
        
        if macro[6] == 'D': st.write("**Status:** Defensivo")
        elif macro[7] == 'S': st.write("**Status:** Com atraso")
        else: st.write("**Status:** Normal")

elif questao == "Questão 9":
    st.subheader("Filtro de Termos Ofensivos")
    frase = st.text_input("Digite a mensagem")
    if frase:
        termos = {'bobo': '****', 'chato': '*****', 'idiota': '******', 'feio': '****'}
        for termo, mascara in termos.items():
            frase = frase.replace(termo, mascara)
        st.warning(frase)

elif questao == "Questão 10":
    st.subheader("Demonstrativo Financeiro")
    v_brutas = st.number_input("Vendas Brutas", value=0.0)
    custos = st.number_input("Custos", value=0.0)
    despesas = st.number_input("Despesas Operacionais", value=0.0)
    
    if st.button("Calcular"):
        receita = v_brutas - custos
        saldo = receita - despesas
        status = " (Positivo)" if saldo > 0 else " (Negativo)" if saldo < 0 else ""
        
        st.text(f"{'Receita Total':<20}{receita:>15.2f}")
        st.text(f"{'Total de Despesas':<20}{despesas:>15.2f}")
        st.text(f"{'Saldo Final':<20}{saldo:>15.2f}{status}")

elif questao == "Questão 11":
    st.subheader("Localizador de DNA")
    seq = st.text_input("Sequência de DNA").upper()
    codon = st.text_input("Códon Alvo").upper()
    if seq and codon:
        idx = seq.find(codon)
        st.write(f"Índice encontrado: **{idx}**")

elif questao == "Questão 12":
    st.subheader("Formatador de Lista")
    nomes = st.text_input("Lista de nomes (separados por vírgula)")
    if nomes:
        lista = [n.strip() for n in nomes.split(',')]
        st.write("/".join(lista))

elif questao == "Questão 13":
    st.subheader("Padronizador de IP")
    entrada = st.text_input("Digite o endereço IP (formatos variados)")
    if entrada:
        if '_mask' in entrada: entrada = entrada.split('_mask')[0]
        limpo = entrada.replace('_', '-').split('-')
        octetos = []
        for i in range(4):
            try:
                val = int(limpo[i])
                octetos.append(val if 0 <= val <= 255 else 0)
            except: octetos.append(0)
        st.success("{:d}.{:d}.{:d}.{:d}".format(*octetos))

elif questao == "Questão 14":
    st.subheader("Análise de Caminho")
    caminho = st.text_input("Caminho do arquivo")
    if caminho:
        if caminho.endswith('/'): st.warning("NULO")
        else:
            st.write(f"Primeira barra: {caminho.find('/')}")
            st.write(f"Última barra: {caminho.rfind('/')}")
            nome = caminho.split('/')[-1]
            tipo = "Executável" if nome.endswith(('.exe', '.bin', '.sh')) else "Arquivo comum"
            st.info(f"Classificação: {tipo}")

elif questao == "Questão 15":
    st.subheader("Higienização de Fragmento")
    frag = st.text_input("Digite o fragmento")
    if frag:
        limpo = frag.strip().strip(".,;:!?").strip().strip("^~").strip().strip("[]").strip()
        st.code(limpo)

elif questao == "Questão 16":
    st.subheader("Decriptador de Mensagem")
    msg_enc = st.text_input("Mensagem encriptada")
    if msg_enc:
        chave = 0
        for char in reversed(msg_enc):
            if char == '.': chave += 1
            else: break
        
        palavras = msg_enc.strip(". ").split()
        decodificadas = []
        for p in palavras:
            if len(p) > 3:
                decodificadas.append("".join(chr(ord(c) - chave) for c in p))
            else:
                decodificadas.append(p)
        st.success(" ".join(decodificadas))
