import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import {
  HeaderHistory,
  HistoryContainer,
  HistoryList,
  Status,
  StopButton,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { HandPalm } from 'phosphor-react'

export function History() {
  const { cycles, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  return (
    <HistoryContainer>
      <HeaderHistory>
        <h1>Meu histórico</h1>
        {activeCycle ? (
          <StopButton onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
          </StopButton>
        ) : (
          <span></span>
        )}
      </HeaderHistory>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {cycle.minutesAmount}{' '}
                    {cycle.minutesAmount > 1 ? 'minutos' : 'minuto'}
                  </td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {cycle.interrupetedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interrupetedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
