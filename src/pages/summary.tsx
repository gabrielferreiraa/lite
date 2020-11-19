import { useRecoilValue } from 'recoil'
import { orderState } from 'state'

const Summary: React.FC = () => {
  const { qtdConsults, price } = useRecoilValue(orderState)

  return (
    <h2>
      {qtdConsults} consults (R$ {price})
    </h2>
  )
}

export default Summary
