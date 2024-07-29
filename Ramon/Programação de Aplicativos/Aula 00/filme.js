class Filme {
    constructor(titulo, lancamento, duracao, elenco, sinopse, nota, genero, direcao) {
        this.titulo = titulo
        this.lancamento = lancamento
        this.duracao = duracao
        this.elenco = elenco
        this.sinopse = sinopse
        this.nota = nota
        this.genero = genero
        this.direcao = direcao
    }
}

var bacurau = new Filme(
    "Bacurau",
    2019,
    "2h 10min",
    ["Sônia Braga", "Udo Kier", "Barbara Colen"],
    "Pouco após a morte de dona Carmelita, aos 94 anos, os moradores de um pequeno povoado localizado no sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade pela primeira vez. Quando carros se tornam vítimas de tiros e cadáveres começam a aparecer, Teresa (Bárbara Colen), Domingas (Sônia Braga), Acácio (Thomas Aquino), Plínio (Wilson Rabelo), Lunga (Silvero Pereira) e outros habitantes chegam à conclusão de que estão sendo atacados. Falta identificar o inimigo e criar coletivamente um meio de defesa.",
    4.1,
    ["Drama", "Suspense"],
    ["Kleber Mendonça Filho", "Juliano Dornelles"]
)