// Dados e regras do agendamento: dias da semana e horários livres e ocupados.
// Funções puras: recebem valores e devolvem resultados, sem mexer na tela.

export const horas = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
];
const totalDias = 6; // quantos cards de dia aparecem

// getDay() devolve 0 para domingo ... 6 para sábado
export const diasCurtos = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
export const diasLongos = [
  "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
  "Quinta-feira", "Sexta-feira", "Sábado",
];

// getMonth() devolve 0 para janeiro ... 11 para dezembro
export const meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

// Data → texto "2026-10-26" (sem toISOString, que usa o fuso de Londres)
export function paraTexto(data) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");
  return ano + "-" + mes + "-" + dia;
}

// Texto "2026-10-26" → data
export function paraData(texto) {
  const partes = texto.split("-");
  return new Date(
    Number(partes[0]),
    Number(partes[1]) - 1,
    Number(partes[2])
  );
}

// Data e hora em que um horário começa. parseInt("17:00") devolve 17.
function inicioDoHorario(dia, horario) {
  const inicio = paraData(dia);
  inicio.setHours(parseInt(horario));
  return inicio;
}

// Próximos 6 dias de atendimento (segunda a sábado).
// Começa hoje; se o último horário de hoje já começou, começa amanhã.
export function proximosDias() {
  const lista = [];
  const data = new Date();
  const ultimaHora = parseInt(horas[horas.length - 1]); // 20

  if (data.getHours() >= ultimaHora) {
    data.setDate(data.getDate() + 1);
  }

  while (lista.length < totalDias) {
    if (data.getDay() !== 0) {
      // 0 = domingo: estúdio fechado
      lista.push(paraTexto(data));
    }
    data.setDate(data.getDate() + 1);
  }
  return lista;
}

// Enquanto o site não tem servidor, simulamos a agenda dos outros alunos:
// (dia do mês + hora) % 3 marca 1 de cada 3 horários como ocupado.
function ocupadoPorOutroAluno(dia, horario) {
  const soma = paraData(dia).getDate() + parseInt(horario);
  return soma % 3 === 0;
}

// Livre = ainda não começou, ninguém reservou e não está ocupado.
export function estaLivre(dia, horario, reservas) {
  if (inicioDoHorario(dia, horario) <= new Date()) {
    return false; // já passou
  }
  const reservado = reservas.some(
    (reserva) => reserva.dia === dia && reserva.horario === horario
  );
  if (reservado) {
    return false;
  }
  return !ocupadoPorOutroAluno(dia, horario);
}

// Quantos horários livres o dia tem
export function contarLivres(dia, reservas) {
  return horas.filter((hora) => estaLivre(dia, hora, reservas)).length;
}

// Lê as reservas salvas no navegador (lista vazia se não houver)
export function lerReservas(chave) {
  return JSON.parse(localStorage.getItem(chave)) || [];
}
