import { styled } from 'linaria/react'

export const StyledColumnView = styled.view<{ background?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 12px 14px 10px;
  background: ${p => (p.background ? p.background : '#fff')};
  width: 100%;
  .txt.red {
    color: #FF0606;
  }
  .txt.green {
    color: #00A170;
  }
  .rate {
    color: #5B5C73 !important;
    font-size: 12px!important
    font-family: PingFangSC-Regular!important
  }
`
