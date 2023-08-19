import Image from "next/image";
import Link from 'next/link'

import { NuggetContainer, Wrapper } from './nugget.style'
import { NuggetsIcon } from "@/components/Icons";

export function Nuggets() {
  return (
    <NuggetContainer>
      <Wrapper>
        <div>
          <Image src={NuggetsIcon} alt="" />
        </div>
        <div>
          I am a strong believer that valuable insights can come in small packages, so I maintain a dedicated list to gather these 
          <Link href="/nuggets">
          &nbsp; golden nuggets &nbsp;
          </Link>
          whenever I come across them.
        </div>
      </Wrapper>
    </NuggetContainer>
  )
}