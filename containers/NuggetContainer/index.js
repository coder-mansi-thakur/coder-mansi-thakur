import NuggetComponent from '@/components/NuggetComponent'

import { NuggetWrapper } from './index.style'

import {nuggets} from './nuggets'

export default function Nugget() {
  return (
    <div>
      {/* <div>Filter</div> */}

      <NuggetWrapper>
        {nuggets.map((nug) => (
          <NuggetComponent key={nug.title} data={nug} />
        ))}
      </NuggetWrapper>

    </div>
  )
}